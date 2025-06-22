import type {IconsType} from "../icons_type.ts";
import {MdDashboard} from "react-icons/md";

const DashboardIcon = ({classes}: IconsType) => {
    return <MdDashboard className={` ${classes}`}/>
}

export default DashboardIcon