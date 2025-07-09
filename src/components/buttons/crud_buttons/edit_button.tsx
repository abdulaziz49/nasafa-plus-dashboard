import Button from "../button.tsx";
import type {CrudButtonType} from "../../../types/button_types.ts";
import {EditIcon} from "../../icons/crud_icons.tsx";

export default function EditButton({clickEvent, classes, text}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <EditIcon/>
        </Button>
    )
}
