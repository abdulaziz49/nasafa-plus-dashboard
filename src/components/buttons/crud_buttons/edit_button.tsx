import Button from "../button.tsx";
import type { CrudButtonType } from "./crud_button_type.ts";
import { EditIcon } from "../../icons/crud_icons.tsx";

export default function EditButton({
    clickEvent,
    classes,
    text,
    isDisabled = false,
}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent} disabled={isDisabled}>
            {text} <EditIcon />
        </Button>
    );
}
