import Button from "../button.tsx";
import type { CrudButtonType } from "./crud_button_type.ts";
import { PDFIcon } from "../../icons/crud_icons.tsx";

export default function PDFButton({
    clickEvent,
    classes,
    text,
}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <PDFIcon />
        </Button>
    );
}
