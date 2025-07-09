import Button from "../button.tsx";
import type {CrudButtonType} from "../../../types/button_types.ts";
import {DeleteIcon} from "../../icons/crud_icons.tsx";

export default function DeleteButton({clickEvent, classes, text}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <DeleteIcon/>
        </Button>
    )
}
