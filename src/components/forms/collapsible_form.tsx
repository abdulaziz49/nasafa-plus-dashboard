import { type ComponentPropsWithoutRef } from 'react';
import FormContainer from '../form_container';
import Accordion from '../accordion';

interface CollapsibleFormPropsType extends ComponentPropsWithoutRef<'div'> {
	title: string;
}
/**
 * Renders a collapsible form section using an accordion UI.
 *
 * @component
 * @param {CollapsibleFormPropsType} props - The props for the CollapsibleForm component.
 * @param {string} props.title - The title displayed on the collapsible accordion header.
 * @param {React.ReactNode} props.children - The form content to be rendered inside the collapsible section.
 * @returns {JSX.Element} The rendered collapsible form container.
 */
export default function CollapsibleForm({
	title,
	children,
}: CollapsibleFormPropsType) {
	return (
		<FormContainer classes="w-full h-auto bg-base-100">
			<Accordion
				title={title}
				titleClasses={'text-lg ms-7 lg:text-2xl lg:ms-0 m-0'}
				classes="collapse-arrow h-auto"
			>
				{children}
			</Accordion>
		</FormContainer>
	);
}
