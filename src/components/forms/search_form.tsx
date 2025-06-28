import InputField from "../inputs/input_field.tsx";
import {useTranslation} from "react-i18next";
import type {ComponentPropsWithoutRef} from "react";

interface SearchFormType extends ComponentPropsWithoutRef<'div'> {
    translateFile:string
}
const SearchForm = ({children,translateFile}:SearchFormType) => {
    const {t} = useTranslation(translateFile);

    return (
        <div className="join w-full">
        <div className="w-full">
            <div>
                {/*<input className="input join-item" placeholder="Search"/>*/}
                <InputField
                    name="search_input"
                    // labelText={t('search-label')}
                    fieldType="text"
                    placeholder={t('search-placeholder')}
                    withLabel={false}
                    classes="w-full join-item m-0"
                />
            </div>
        </div>
        <select className="select join-item bg-base-300">
            {children}
        </select>
        <div className="indicator">
            <button className="btn btn-primary join-item">{t("search-btn")}</button>
        </div>
    </div>)
}

export default SearchForm;