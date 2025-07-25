import Button from "../button.tsx";
import type { CrudButtonType } from "../crud_buttons/crud_button_type.ts";
import { DeleteIcon } from "../../icons/crud_icons.tsx";

export default function DeleteIconButton({
    clickEvent,
    classes,
    iconClasses,
}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            <DeleteIcon classes={iconClasses} />
        </Button>
    );
}
