import { FaPeopleGroup } from "react-icons/fa6";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import type { IconsType } from '../icons_type.ts';

export const ClientAccordionIcon = ({ classes }: IconsType) => {
	return <FaPeopleGroup className={`${classes}`} />;
};

export const ClientGroupManagementIcon = ({ classes }: IconsType) => {
	return <IoPeopleCircleSharp className={`${classes}`} />;
};

export const ClientManagementIcon = ({ classes }: IconsType) => {
	return <MdPeople className={`${classes}`} />;
};
