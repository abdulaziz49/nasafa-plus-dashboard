import type {MouseEventHandler, PropsWithChildren} from "react";

interface ButtonType extends PropsWithChildren {
    classes?: string,
    type?: string,
    clickEvent: MouseEventHandler<HTMLButtonElement>
}

const Button = ({children, classes = "", type = "button", clickEvent}: ButtonType) => {
    return (
        <button typeof={type} className={"btn " + classes} onClick={clickEvent}>{children}
        </button>
    )
}

export default Button