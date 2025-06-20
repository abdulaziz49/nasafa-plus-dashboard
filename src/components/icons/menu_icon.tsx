import {MdMenu} from "react-icons/md";
import type {IconsType} from "./icons_type.ts";

const MenuIcon = ({classes}: IconsType) => {
    return (
        <MdMenu className={classes}/>
    )
}

export default MenuIcon