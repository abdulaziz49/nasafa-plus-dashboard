import type { ComponentPropsWithoutRef, JSX } from 'react';

interface FormContainerPropsTypes extends ComponentPropsWithoutRef<'fieldset'> {
	formTitle?: string;
	classes?: string;
}

/**
 * A reusable container component for forms, rendering its children inside a styled <fieldset>.
 *
 * @param {object} props - The props for the FormContainer component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the form container.
 * @param {string} [props.formTitle] - Optional title for the form, displayed as a legend. If not provided or empty, the legend is not rendered.
 * @param {string} [props.classes] - Additional CSS classes to apply to the fieldset element.
 * @returns {JSX.Element} The rendered form container component.
 */
const FormContainer = ({
	children,
	formTitle = '',
	classes = '',
}: FormContainerPropsTypes): JSX.Element => {
	return (
		<fieldset
			className={`fieldset border-base-300 rounded border ${classes}`}
		>
			{/* Conditionally render the legend only if formTitle is provided and not an empty string */}
			{formTitle && (
				<legend className="fieldset-legend">{formTitle}</legend>
			)}

			{/* Content of form placed here */}
			{children}
		</fieldset>
	);
};

export default FormContainer;
