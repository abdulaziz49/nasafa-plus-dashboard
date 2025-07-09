import Button from '../button.tsx';
import type {CrudButtonType} from '../../../types/button_types.ts';
import {RefreshIcon} from "../../icons/crud_icons.tsx";

export default function RefreshButton({clickEvent, classes, text}: CrudButtonType) {
    return (
        <Button classes={classes} onClick={clickEvent}>
            {text} <RefreshIcon/>
        </Button>
    );
}
