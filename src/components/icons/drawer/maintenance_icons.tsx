import { GrHostMaintenance } from "react-icons/gr";
import { GrVmMaintenance } from "react-icons/gr";
import type { IconsType } from '../icons_type.ts';

export const MaintenanceAccordionIcon = ({ classes }: IconsType) => {
	return <GrHostMaintenance className={`${classes}`} />;
};

export const MaintenanceGroupManagementIcon = ({ classes }: IconsType) => {
	return <GrVmMaintenance className={`${classes}`} />;
};

export const MaintenanceManagementIcon = ({ classes }: IconsType) => {
	return <GrHostMaintenance className={`${classes}`} />;
};
