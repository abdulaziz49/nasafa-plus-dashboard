import Button from "../button.tsx";
import type { CrudButtonType } from "./crud_button_type.ts";
import { AddIcon } from "../../icons/crud_icons.tsx";

export default function SearchButton({
    clickEvent,
    classes,
    text,
}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <AddIcon />
        </Button>
    );
}
