// src/i18n/LocaleSwitcher.tsx

import {useTranslation} from "react-i18next";
import Select from "../components/inputs/select.tsx";
import supportedLngs from "./supported_langs.ts";
import {type ChangeEventHandler, type ReactElement, useEffect} from "react";


const checkStoredLang = (fallbackLang: string): string => {
    try {
        const storedLang = localStorage.getItem("lang");
        return storedLang || fallbackLang; // Use storedLang if it exists, otherwise use fallbackLang
    } catch {
        localStorage.setItem("lang", fallbackLang)
        return fallbackLang;
    }
};

export default function LocaleSwitcher(): ReactElement {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(checkStoredLang(i18n.language))
        console.log(i18n.language)
    }, []);

    const selectChangeEvent: ChangeEventHandler<HTMLSelectElement> = async (e) => {
        await i18n.changeLanguage(e.target.value)
        localStorage.setItem("lang", e.target.value)
    }

    return (
        <Select withLabel={true} labelText={t('login-lang-switch')} defaultValue={i18n.language}
                onChange={selectChangeEvent}>
            {Object.entries(supportedLngs).map(([code, name]) => (
                <option value={code} key={code}>
                    {name}
                </option>
            ))}
        </Select>
    );
}