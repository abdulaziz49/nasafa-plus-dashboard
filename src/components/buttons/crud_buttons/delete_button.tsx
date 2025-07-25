import Button from "../button.tsx";
import type { CrudButtonType } from "./crud_button_type.ts";
import { DeleteIcon } from "../../icons/crud_icons.tsx";

export default function DeleteButton({
    clickEvent,
    classes,
    text,
}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <DeleteIcon />
        </Button>
    );
}
