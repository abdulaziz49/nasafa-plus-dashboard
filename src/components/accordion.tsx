import { type ComponentPropsWithoutRef, type JSX, type ReactNode, useRef } from 'react';

// @ts-expect-error
interface AccordionPropsType extends ComponentPropsWithoutRef<'div'> {
	title: string | undefined;
	collapsed: boolean; // This is a controlled prop, true if open, false if closed
	classes?: string;
	icon?: ReactNode;
	index?: number;
	titleClasses?: string;
	onToggle?: (index?: number) => void; // Callback to notify parent of a toggle
}

/**
 * Accordion component for displaying collapsible content sections.
 *
 * @param {AccordionPropsType} props - The props for the Accordion component.
 * @param {React.ReactNode} props.children - The content to display inside the accordion when expanded.
 * @param {React.ReactNode} props.title - The title displayed in the accordion header.
 * @param {boolean} props.collapsed - Controls whether the accordion is expanded (`true`) or collapsed (`false`).
 * @param {string} [props.classes] - Additional CSS classes for the root accordion container.
 * @param {React.ReactNode} [props.icon] - Optional icon to display next to the title.
 * @param {string} [props.titleClasses] - Additional CSS classes for the title section.
 * @param {string} props.accordionName - The name attribute for the radio input, used to group accordions.
 * @param {number} props.index - The index of this accordion in a list, passed to the `onToggle` callback.
 * @param {(index: number) => void} props.onToggle - Callback invoked when the accordion header is clicked.
 * @param {object} [rest] - Additional props spread onto the root container.
 *
 * @returns {JSX.Element} The rendered Accordion component.
 *
 * @example
 * <Accordion
 *   title="Section 1"
 *   collapsed={isOpen}
 *   accordionName="example"
 *   index={0}
 *   onToggle={handleToggle}
 * >
 *   Content goes here.
 * </Accordion>
 */
const Accordion = ({
	children,
	title,
	collapsed,
	classes,
	icon,
	titleClasses,
	accordionName,
	index,
	onToggle, // This prop is called when the accordion is clicked
	...rest
}: AccordionPropsType): JSX.Element => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<div className={`collapse w-full bg-base-100 ${classes}`} {...rest}>
			{/* The input is now completely controlled by the 'collapsed' prop.
                It's readOnly because its state is managed by the parent.
                The onClick here is to prevent default browser behavior that might interfere
                with our controlled state, and ensures 'onToggle' is the single source of truth.
            */}
			<input
				ref={inputRef}
				type="radio"
				name={accordionName}
				checked={collapsed} // Directly controlled by the 'collapsed' prop from parent
				readOnly
				onClick={() => onToggle!(index!)}
			/>
			<div
				className={`collapse-title flex flex-row items-center space-x-2 w-auto justify-start ${titleClasses}`}
				// IMPORTANT: Place the onToggle directly on the clickable div
				// This is the primary trigger for changing the accordion's state
				onClick={() => inputRef.current!.click()}
			>
				{icon}
				{title}
			</div>
			<div className="collapse-content text-sm">{children}</div>
		</div>
	);
};

export default Accordion;
