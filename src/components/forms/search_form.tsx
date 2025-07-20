import InputField from '../inputs/input_field.tsx';
import {
	type ChangeEventHandler,
	type ComponentPropsWithoutRef,
	type JSX,
	type KeyboardEventHandler,
	type MouseEventHandler,
	type Ref,
} from 'react';
import { SearchIcon } from '../icons/crud_icons.tsx';

interface SearchFormType extends ComponentPropsWithoutRef<'div'> {
	/** Additional CSS classes for the container */
	containerClasses?: string;
	/** If true, disables the filter select */
	filterChangeable?: boolean;
	/** Handler for the search button click */
	clickEvent: MouseEventHandler<HTMLButtonElement>;
	/** Ref for the search button */
	reference: Ref<HTMLButtonElement> | undefined;
	/** Handler for input field changes */
	changeInputEvent: ChangeEventHandler<HTMLInputElement>;
	/** Handler for key press events in the input */
	keyPressed: KeyboardEventHandler<HTMLInputElement> | undefined;
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
 * @param {React.Ref<HTMLButtonElement>} [props.reference] - Ref for the search button element.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} [props.changeInputEvent] - Callback for input field change events.
 * @param {(event: React.KeyboardEvent<HTMLInputElement>) => void} [props.keyPressed] - Callback for key down events in the input field.
 * @param {string} [props.placeHolder] - Placeholder text for the input field.
 * @returns {JSX.Element} The rendered search form component.
 */
const SearchForm = ({
	children,
	containerClasses,
	filterChangeable = true,
	clickEvent,
	reference,
	changeInputEvent,
	keyPressed,
	placeHolder,
}: SearchFormType): JSX.Element => {
	return (
		<div className={`join w-full ${containerClasses}`}>
			<div className="w-auto md:flex-grow">
				<InputField
					onKeyDown={keyPressed}
					name="search_input"
					type="text"
					placeholder={placeHolder}
					withLabel={false}
					containerClasses="w-full join-item"
					onChange={changeInputEvent}
				/>
			</div>
			<select
				className="select join-item w-2/5 md:w-1/5 lg:w-2/7 xl:w-1/5 bg-base-300"
				disabled={filterChangeable}
			>
				{children}
			</select>
			<div className="indicator">
				<button
					ref={reference}
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
