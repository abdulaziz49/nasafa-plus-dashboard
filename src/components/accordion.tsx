import {type PropsWithChildren, useRef, useState} from "react";

interface AccordionPropsType extends PropsWithChildren {
    title: string,
    collapsed?: boolean
    styles?: string
}

const Accordion = ({children, title, collapsed = false, styles = ""}: AccordionPropsType) => {
    const [collapse, setCollapse] = useState(collapsed)
    const inputRef = useRef<HTMLInputElement>()
    return (
        <div className={"collapse bg-base-100 border border-base-300" + styles}
             onClick={() => inputRef.current.click()}>
            <input ref={inputRef} type="radio" name="my-accordion-1" checked={collapse}
                   onChange={(e) => setCollapse(!collapse)}/>
            <div className="collapse-title font-semibold">{title}</div>
            <div className="collapse-content text-sm">{children}</div>
        </div>
    )
}

export default Accordion