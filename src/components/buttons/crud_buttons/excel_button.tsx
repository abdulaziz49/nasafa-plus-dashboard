import Button from "../button.tsx";
import type { CrudButtonType } from "./crud_button_type.ts";
import { ExcelIcon } from "../../icons/crud_icons.tsx";

export default function ExcelButton({
    clickEvent,
    classes,
    text,
}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <ExcelIcon />
        </Button>
    );
}
