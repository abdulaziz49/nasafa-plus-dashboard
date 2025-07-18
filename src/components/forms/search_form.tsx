import InputField from "../inputs/input_field.tsx";
import {useTranslation} from "react-i18next";
import {
    type ChangeEventHandler,
    type ComponentPropsWithoutRef,
    type KeyboardEventHandler,
    type MouseEventHandler,
    type Ref
} from "react";
import {SearchIcon} from "../icons/crud_icons.tsx";
// import {store} from "../../states/store.ts";

// import Select from "../inputs/select.tsx";

interface SearchFormType extends ComponentPropsWithoutRef<'div'> {
    translateFile: string;
    containerClasses?: string;
    filterChangeable?: boolean;
    clickEvent: MouseEventHandler<HTMLButtonElement>;
    storeTerm: (term: string) => void;
    reference: Ref<HTMLButtonElement> | undefined;
    changeInputEvent: ChangeEventHandler<HTMLInputElement>;
    keyPressed: KeyboardEventHandler<HTMLInputElement> | undefined;
}

const SearchForm = ({
                        children,
                        translateFile,
                        containerClasses,
                        filterChangeable = true,
                        clickEvent,
                        // storeTerm,
                        // term
                        reference,
                        changeInputEvent,
                        keyPressed
                    }: SearchFormType) => {
    const {t} = useTranslation(translateFile);

    // const changeSearchFormEvent = async (value: string) => {
    //     // //updating value of term delays, fix it (storeTerm is useState function)
    //     // await storeTerm(value)
    //     //
    //     // // trigger search button click if the term value is empty and input field is also empty
    //     // if (term.length === 0 && value.length === 0 ) {
    //     //     btnRef.current?.click()
    //     // }
    //
    //     storeTerm(value); // Update the parent's state
    //
    //     // Trigger search button click if the input field is now empty (after user's input)
    //     // We check value, not the 'term' prop from the current render.
    //     if (value.length === 0) {
    //         btnRef.current?.click();
    //     }
    // }

    return (
        <div className={`join w-full ${containerClasses}`}>
            {/*<div>*/}
            <div className="w-auto md:flex-grow">
                {/*<input className="input join-item" placeholder="Search"/>*/}
                <InputField
                    onKeyDown={keyPressed}
                    name="search_input"
                    // labelText={t('search-label')}
                    fieldType="text"
                    placeholder={t('search-placeholder')}
                    withLabel={false}
                    // value={term}
                    classes="w-full join-item"
                    onChange={changeInputEvent}
                />
            </div>
            {/*</div>*/}
            <select className="select join-item w-2/5 md:w-1/5 lg:w-2/7 xl:w-1/5 bg-base-300"
                    disabled={filterChangeable}>
                {children}
            </select>
            <div className="indicator">
                <button ref={reference} onClick={clickEvent} className="btn btn-primary btn-square join-item">
                    <SearchIcon/>
                </button>
            </div>
        </div>
    )
}

export default SearchForm;