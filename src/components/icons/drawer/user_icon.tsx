import { FaCircleUser } from "react-icons/fa6";
import type {IconsType} from "../icons_type.ts";

const UserIcon = ({classes}: IconsType) => {
    return <FaCircleUser className={`${classes}`}/>
}

export default UserIcon