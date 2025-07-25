import Button from "../button.tsx";
import type { CrudButtonType } from "./crud_button_type.ts";
import { RefreshIcon } from "../../icons/crud_icons.tsx";

export default function RefreshButton({
    clickEvent,
    classes,
    text,
    isDisabled,
}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent} disabled={isDisabled}>
            {text} <RefreshIcon />
        </Button>
    );
}
