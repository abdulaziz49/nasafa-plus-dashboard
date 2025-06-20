import {MdDelete} from "react-icons/md";
import type {IconsType} from "../icons_type.ts";

const DeleteIcon = ({classes}: IconsType) => {
    return (
        <MdDelete className={classes}/>
    )
}

export default DeleteIcon