import Button from "../button.tsx";
import { AddIcon } from "../../icons/crud_icons.tsx";
import type { CrudButtonType } from "./crud_button_type.ts";

export default function AddButton({
    clickEvent,
    classes,
    text,
}: CrudButtonType) {
    return (
        <Button type="button" classes={classes} onClick={clickEvent}>
            {text} <AddIcon />
        </Button>
    );
}
