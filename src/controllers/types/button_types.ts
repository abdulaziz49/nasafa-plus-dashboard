import type {MouseEventHandler, PropsWithChildren} from "react";

export interface CrudButtonType {
    clickEvent: MouseEventHandler<HTMLButtonElement>
    classes?: string
}

export interface ButtonType extends PropsWithChildren {
    classes?: string,
    type?: string,
    clickEvent: MouseEventHandler<HTMLButtonElement>
}