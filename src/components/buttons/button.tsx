import type {ButtonType} from "../../controllers/types/button_types.ts";

const Button = ({children, classes = "", type = "button", clickEvent}: ButtonType) => {
    return (
        <button typeof={type} className={"btn " + classes} onClick={clickEvent}>{children}
        </button>
    )
}

export default Button