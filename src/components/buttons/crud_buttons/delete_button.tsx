import Button from "../button.tsx";
import type {CrudButtonType} from "../../../controllers/types/button_types.ts";
import DeleteIcon from "../../icons/crud_icons/delete_icon.tsx";

export default function DeleteButton({clickEvent, classes, text}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <DeleteIcon/>
        </Button>
    )
}
