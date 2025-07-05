import InputField from "../inputs/input_field.tsx";
import {useTranslation} from "react-i18next";
import type {ComponentPropsWithoutRef} from "react";
import {SearchIcon} from "../icons/crud_icons.tsx";
import Select from "../inputs/select.tsx";

interface SearchFormType extends ComponentPropsWithoutRef<'div'> {
    translateFile: string,
    containerClasses?: string
    filterChangeable?: boolean
}

const SearchForm = ({children, translateFile, containerClasses, filterChangeable = true}: SearchFormType) => {
    const {t} = useTranslation(translateFile);

    return (
        <div className={`join w-full ${containerClasses}`}>
            {/*<div>*/}
            <div className="w-auto md:flex-grow">
                {/*<input className="input join-item" placeholder="Search"/>*/}
                <InputField
                    name="search_input"
                    // labelText={t('search-label')}
                    fieldType="text"
                    placeholder={t('search-placeholder')}
                    withLabel={false}
                    classes="w-full join-item"
                    changeEvent={() => {
                    }}
                />
            </div>
            {/*</div>*/}
            <select className="select join-item w-2/5 md:w-1/5 lg:w-2/7 xl:w-1/5 bg-base-300" disabled={filterChangeable}>
                {children}
            </select>
            <div className="indicator">
                <button className="btn btn-primary btn-square join-item"><SearchIcon/></button>
            </div>
        </div>)
}

export default SearchForm;