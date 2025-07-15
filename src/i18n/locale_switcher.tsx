// src/i18n/LocaleSwitcher.tsx

import {useTranslation} from 'react-i18next';
import Select from '../components/inputs/select.tsx';
import supportedLangs from './supported_langs.ts';
import {type ChangeEventHandler, type ReactElement} from 'react';
import useUserSettingsStore from "../states/stores/user_settings_store.ts";

// const checkStoredLang = (fallbackLang: string): string => {
//     try {
//         const storedLang = localStorage.getItem('lang');
//         return storedLang || fallbackLang; // Use storedLang if it exists, otherwise use fallbackLang
//     } catch {
//         localStorage.setItem('lang', fallbackLang);
//         return fallbackLang;
//     }
// };

export default function LocaleSwitcher(): ReactElement {
    const {t} = useTranslation("login");
    const {lang, setLang} = useUserSettingsStore()

    // useEffect(() => {
    //     i18n.changeLanguage(lang);
    //     // console.log(i18n.language);
    // }, []);

    const selectChangeEvent: ChangeEventHandler<HTMLSelectElement> = async (
        e,
    ) => {
        // await i18n.changeLanguage(e.target.value);
        // localStorage.setItem('lang', e.target.value);
        await setLang(e.target.value as "ar" | "en")
    };

    return (
        <Select
            withLabel={true}
            labelText={t('lang-switch')}
            value={lang}
            onChange={selectChangeEvent}
        >
            {Object.entries(supportedLangs).map(([code, name]) => (
                <option value={code} key={code}>
                    {name}
                </option>
            ))}
        </Select>
    );
}
