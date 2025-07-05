import type {ComponentPropsWithoutRef, ReactElement} from "react";

interface DropdownType extends ComponentPropsWithoutRef<"div"> {
    text: string
    classes?: string,
    bgColor?: string,
    uniqueKey:string
}

export default function Dropdown({text, classes, bgColor, uniqueKey,children}: DropdownType): ReactElement {
    return (
        <>
            <button className={`btn bg-${bgColor} ${classes}`} popoverTarget={uniqueKey}
                    style={{anchorName: uniqueKey} /* as React.CSSProperties */}>
                {text}
            </button>

            <ul className={`dropdown menu w-52 p-0 rounded-box bg-${bgColor} shadow-sm`}
                popover="auto" id={uniqueKey} style={{positionAnchor: uniqueKey} /* as React.CSSProperties */}>
                {children}
            </ul>
        </>
    )
}