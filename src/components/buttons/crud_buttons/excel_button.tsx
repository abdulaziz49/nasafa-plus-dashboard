import Button from '../button.tsx';
import type {CrudButtonType} from '../../../types/button_types.ts';
import {ExcelIcon} from "../../icons/crud_icons.tsx";

export default function ExcelButton({clickEvent, classes, text}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <ExcelIcon/>
        </Button>
    );
}
