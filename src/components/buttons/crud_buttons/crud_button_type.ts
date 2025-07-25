import type { MouseEventHandler } from "react";

export interface CrudButtonType {
    clickEvent: MouseEventHandler<HTMLButtonElement>;
    text?: string;
    classes?: string;
    isDisabled?: boolean;
    iconClasses?: string;
}
