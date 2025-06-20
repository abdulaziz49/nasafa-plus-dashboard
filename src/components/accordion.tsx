// import {type PropsWithChildren, useRef, useState} from "react";
//
// interface AccordionPropsType extends PropsWithChildren {
//     title: string,
//     collapsed?: boolean
//     styles?: string
// }
//
// const Accordion = ({children, title, collapsed = false, styles = ""}: AccordionPropsType) => {
//     const [collapse, setCollapse] = useState(collapsed)
//     const inputRef = useRef<HTMLInputElement>()
//     return (
//         <div className={"collapse bg-natural" + styles}
//              onClick={() => inputRef.current.click()}>
//             <input ref={inputRef} type="radio" name="my-accordion-1" checked={collapse}
//                    onChange={() => setCollapse(!collapse)}/>
//             <div className="collapse-title font-semibold">{title}</div>
//             <div className="collapse-content text-sm">{children}</div>
//         </div>
//     )
// }
//
// export default Accordion

import {type PropsWithChildren, useRef, useState} from "react";

interface AccordionPropsType extends PropsWithChildren {
    title: string,
    collapsed?: boolean, // Initial collapse state
    classes?: string, // Additional CSS classes
    name?: string // Optional: for grouping accordions
}

const Accordion = ({children, title, collapsed = false, classes, name = "my-accordion"}: AccordionPropsType) => {
    // State to manage the collapse status of this specific accordion item
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    // Ref to directly control the input element
    const inputRef = useRef<HTMLInputElement>(null);

    // Effect to update the internal state if the 'collapsed' prop changes externally
    // This makes the component more reactive to prop updates
    // useEffect(() => {
    //     setIsCollapsed(collapsed);
    // }, [collapsed]);

    // Handler for when the input (radio button) changes
    // const handleInputChange = () => {
    //     setIsCollapsed(inputRef.current?.checked || false);
    // };

    return (
        <div className={`collapse bg-base-100 ${classes}`}>
            <input
                ref={inputRef}
                type="radio"
                name={name} // Use the provided name prop, default to "my-accordion"
                checked={isCollapsed} // Controlled component: input's checked state is tied to isCollapsed
                // onChange={handleInputChange} // Update state when radio button changes
                // Add an onClick for the input itself to ensure state matches direct interaction
                onClick={() => setIsCollapsed(prev => !prev)}
            />
            {/* The label or div that triggers the input.
                Using htmlFor is more semantically correct for labels.
                However, since it's a radio input within a styled 'collapse' container,
                the div's onClick targeting the inputRef.current.click() is common for UI libraries like DaisyUI.
                Let's stick with your current click method on the parent div for consistency with DaisyUI's pattern,
                but ensure the internal state logic is sound.
            */}
            <div className="collapse-title font-semibold" onClick={() => inputRef.current?.click()}>
                {title}
            </div>
            <div className="collapse-content text-sm">
                {children}
            </div>
        </div>
    );
}

export default Accordion;