import type {IconsType} from "../icons_type.ts";
import {MdSettings} from "react-icons/md";

const SettingsIcon = ({classes}: IconsType) => {
    return <MdSettings className={` ${classes}`}/>
}

export default SettingsIcon