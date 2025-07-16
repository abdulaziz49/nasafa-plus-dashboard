import type {ComponentPropsWithoutRef, MouseEventHandler} from "react";

export interface CrudButtonType {
    clickEvent: MouseEventHandler<HTMLButtonElement>,
    text?: string
    classes?: string
    isDisabled?: boolean
}

export interface ButtonType extends ComponentPropsWithoutRef<"button"> {
    classes?: string,
    text?: string
}
