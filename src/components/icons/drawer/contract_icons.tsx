import { IoDocumentsSharp } from "react-icons/io5";
import { GiPapers } from "react-icons/gi";
import { FaFileContract } from "react-icons/fa6";
import type { IconsType } from '../icons_type.ts';

export const ContractAccordionIcon = ({ classes }: IconsType) => {
	return <IoDocumentsSharp className={`${classes}`} />;
};

export const ContractGroupManagementIcon = ({ classes }: IconsType) => {
	return <GiPapers className={`${classes}`} />;
};

export const ContractManagementIcon = ({ classes }: IconsType) => {
	return <FaFileContract className={`${classes}`} />;
};
