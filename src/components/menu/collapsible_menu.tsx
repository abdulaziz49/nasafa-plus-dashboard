import type {PropsWithChildren} from "react";

interface CollapsibleMenuTypes extends PropsWithChildren {
    title: string,
}

const CollapsibleMenu = ({children, title}:CollapsibleMenuTypes) => {
    return (
        <details open>
            <summary>{title}</summary>
            <ul>
                {children}
            </ul>
        </details>
    )
}

export default CollapsibleMenu