import Button from '../button.tsx';
import type {CrudButtonType} from '../../../controllers/types/button_types.ts';
import {PrintIcon} from "../../icons/crud_icons.tsx";

export default function PrintButton({clickEvent, classes, text}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <PrintIcon/>
        </Button>
    );
}
