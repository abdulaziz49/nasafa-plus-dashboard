import {type ComponentPropsWithoutRef, type ReactNode, useRef,} from 'react';

// @ts-ignore
interface AccordionPropsType extends ComponentPropsWithoutRef<'div'> {
    title: string | undefined;
    collapsed?: boolean; // This is a controlled prop, true if open, false if closed
    classes?: string;
    icon?: ReactNode;
    index?: number;
    titleClasses?: string;
    accordionName?: string; // The radio group name (important for DaisyUI's radio behavior)
    onToggle?: (index: number) => void; // Callback to notify parent of a toggle
}

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
                   }: AccordionPropsType) => {
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
                onClick={() => onToggle(index)}
            />
            <div
                className={`collapse-title flex flex-row items-center space-x-2 w-auto justify-start ${titleClasses}`}
                // IMPORTANT: Place the onToggle directly on the clickable div
                // This is the primary trigger for changing the accordion's state
                onClick={() => inputRef.current!.click()}
            >
                {icon}{title}
            </div>
            <div className="collapse-content text-sm">{children}</div>
        </div>
    );
};

export default Accordion;