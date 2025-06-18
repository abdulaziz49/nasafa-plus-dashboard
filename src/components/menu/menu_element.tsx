import type {PropsWithChildren} from "react";

const MenuElement = ({children}: PropsWithChildren) => {
    return (
        <li>
            <a>{children}</a>
        </li>
    )
}

export default MenuElement