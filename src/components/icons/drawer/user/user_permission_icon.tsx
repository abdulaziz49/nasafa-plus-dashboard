import { FaUserShield } from 'react-icons/fa6';
import type { IconsType } from '../../icons_type.ts';

const UserPermissionIcon = ({ classes }: IconsType) => {
	return <FaUserShield className={`${classes}`} />;
};

export default UserPermissionIcon;
