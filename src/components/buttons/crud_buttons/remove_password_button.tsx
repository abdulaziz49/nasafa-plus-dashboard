import Button from "../button.tsx";
import type { CrudButtonType } from "./crud_button_type.ts";
import { RemovePasswordIcon } from "../../icons/crud_icons.tsx";

export default function RemovePasswordButton({
    clickEvent,
    classes,
    text,
}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <RemovePasswordIcon />
        </Button>
    );
}
