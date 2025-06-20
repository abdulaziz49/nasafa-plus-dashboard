import Button from "../button.tsx";
import type {CrudButtonType} from "../../../controllers/types/button_types.ts";
import PDFIcon from "../../icons/crud_icons/pdf_icon.tsx";

export default function PDFButton({clickEvent, classes}: CrudButtonType) {
    return (
        <Button classes={classes} clickEvent={clickEvent}>
            Export to PDF <PDFIcon/>
        </Button>
    )
}