import type {ComponentPropsWithoutRef, ReactElement} from "react";

interface DropdownType extends ComponentPropsWithoutRef<"div"> {
    text: string
    classes?: string,
    bgColor?: string,
    uniqueKey: string
}

export default function Dropdown({text, classes, bgColor, uniqueKey, children}: DropdownType): ReactElement {
    // @ts-expect-error anchorName and positionAnchor errors
    const anchor: Properties<string | number, string & {}> = {anchorName: uniqueKey}

    // @ts-expect-error anchorName and positionAnchor errors
    const position: Properties<string | number, string & {}> = {positionAnchor: uniqueKey}

    return (
        <>
            <button className={`btn bg-${bgColor} ${classes}`} popoverTarget={uniqueKey}
                    style={anchor}>
                {text}
            </button>

            <ul className={`dropdown menu w-52 p-0 rounded-box bg-${bgColor}`}
                popover="auto" id={uniqueKey} style={position}>
                {children}
            </ul>
        </>
    )
}