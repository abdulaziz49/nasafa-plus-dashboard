import {MdLogin} from "react-icons/md";
import {MdLogout} from "react-icons/md";
import type {IconsType} from "./icons_type.ts";

export const LoginIcon = ({classes}: IconsType) => <MdLogin className={`${classes}`}/>

export const LogoutIcon = ({classes}: IconsType) => <MdLogout className={` ${classes}`}/>