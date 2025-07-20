import InputField from "../inputs/input_field.tsx";
import {
    useRef,
    type ChangeEventHandler,
    type ComponentPropsWithoutRef,
    type JSX,
    type KeyboardEventHandler,
    type MouseEventHandler,
} from "react";
import { SearchIcon } from "../icons/crud_icons.tsx";

interface SearchFormType extends ComponentPropsWithoutRef<"div"> {
    /** Additional CSS classes for the container */
    containerClasses?: string;
    /** If true, disables the filter select */
    filterChangeable?: boolean;
    /** Handler for the search button click */
    clickEvent: MouseEventHandler<HTMLButtonElement>;
    /** Handler for input field changes */
    changeInputEvent: ChangeEventHandler<HTMLInputElement>;
    placeHolder: string;
}

/**
 * SearchForm component renders a search input, a filter select, and a search button.
 *
 * @param {SearchFormType} props - Props for the SearchForm component
 * @returns {JSX.Element}
 */
/**
 * Renders a search form component with an input field, a filter dropdown, and a search button.
 *
 * @param {object} props - The props for the SearchForm component.
 * @param {React.ReactNode} props.children - The options to be rendered inside the filter dropdown.
 * @param {string} [props.containerClasses] - Additional CSS classes for the container div.
 * @param {boolean} [props.filterChangeable=true] - If true, the filter dropdown is disabled.
 * @param {() => void} [props.clickEvent] - Callback function to be called when the search button is clicked.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} [props.changeInputEvent] - Callback for input field change events.
 * @param {string} [props.placeHolder] - Placeholder text for the input field.
 * @returns {JSX.Element} The rendered search form component.
 */
const SearchForm = ({
    children,
    containerClasses,
    filterChangeable = true,
    clickEvent,
    changeInputEvent,
    placeHolder,
}: SearchFormType): JSX.Element => {
    const searchBtnRef = useRef<HTMLButtonElement>(null);

    // Handle Enter key in search input
    const onInputFieldKeyPress: KeyboardEventHandler<HTMLInputElement> = (
        e
    ) => {
        if (e.key === "Enter") {
            e.preventDefault();
            searchBtnRef.current?.click();
        }
    };

    return (
        <div className={`join w-full ${containerClasses}`}>
            <div className="w-auto flex-grow">
                <InputField
                    onKeyDown={onInputFieldKeyPress}
                    name="search_input"
                    type="text"
                    placeholder={placeHolder}
                    withLabel={false}
                    containerClasses="w-full join-item"
                    onChange={changeInputEvent}
                />
            </div>
            <select
                className="select join-item w-2/7 md:w-1/5 lg:w-2/7 xl:w-1/5 bg-base-300"
                disabled={!filterChangeable}
            >
                {children}
            </select>
            <div className="indicator">
                <button
                    ref={searchBtnRef}
                    onClick={clickEvent}
                    className="btn btn-primary btn-square join-item"
                >
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
};

export default SearchForm;
