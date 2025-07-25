import Button from "../button.tsx";
import type { CrudButtonType } from "./crud_button_type.ts";
import { PrintIcon } from "../../icons/crud_icons.tsx";

export default function PrintButton({
    clickEvent,
    classes,
    text,
}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <PrintIcon />
        </Button>
    );
}
