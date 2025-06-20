import Button from "../button.tsx";
import AddIcon from "../../icons/crud_icons/add_icon.tsx";
import type {CrudButtonType} from "../../../controllers/types/button_types.ts";

export default function AddButton({clickEvent, classes}: CrudButtonType) {
    return (
        <Button classes={classes} clickEvent={clickEvent}>
            Add <AddIcon/>
        </Button>
    )
}