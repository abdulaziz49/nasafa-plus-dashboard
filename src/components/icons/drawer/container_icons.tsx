import { SiLinuxcontainers } from 'react-icons/si';
import { SiOpencontainersinitiative } from 'react-icons/si';
import { PiShippingContainerFill } from 'react-icons/pi';
import type { IconsType } from '../icons_type.ts';

export const ContainerGroupIcon = ({ classes }: IconsType) => {
	return <SiLinuxcontainers className={`${classes}`} />;
};

export const ContainerGroupManagementIcon = ({ classes }: IconsType) => {
	return <SiOpencontainersinitiative className={`${classes}`} />;
};

export const ContainerManagementIcon = ({ classes }: IconsType) => {
	return <PiShippingContainerFill className={`${classes}`} />;
};
