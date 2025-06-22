// src/i18n/LocaleSwitcher.tsx

import { useTranslation } from "react-i18next";
import Select from "../components/inputs/select.tsx";
import supportedLngs from "./supported_langs.ts";

export default function LocaleSwitcher() {
    const { t, i18n } = useTranslation();

    return (
        <div className="...">
            <div className="...">
                <Select withLabel={true} labelText={t('login-lang-switch')} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                    {Object.entries(supportedLngs).map(([code, name]) => (
                        <option value={code} key={code}>
                            {name}
                        </option>
                    ))}
                </Select>
            </div>
        </div>
    );
}