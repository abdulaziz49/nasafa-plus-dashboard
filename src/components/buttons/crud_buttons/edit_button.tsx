import Button from "../button.tsx";
import EditIcon from "../../icons/crud_icons/edit_icon.tsx";
import type {CrudButtonType} from "../../../controllers/types/button_types.ts";

export default function EditButton({clickEvent, classes}: CrudButtonType) {
    return (
        <Button classes={classes} clickEvent={clickEvent}>
            Edit <EditIcon/>
        </Button>
    )
}