import Button from "../button.tsx";
import EditIcon from "../../icons/crud_icons/edit_icon.tsx";
import type {CrudButtonType} from "../../../controllers/types/button_types.ts";

export default function EditButton({clickEvent, classes, text}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <EditIcon/>
        </Button>
    )
}
