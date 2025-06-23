import type {IconsType} from "../icons_type.ts";
import {MdLogout} from "react-icons/md";

const LogoutIcon = ({classes}: IconsType) => {
    return <MdLogout className={` ${classes}`}/>
}

export default LogoutIcon