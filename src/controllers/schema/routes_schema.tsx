import {
	CONTAINER_GROUP_MANAGEMENT_ROUTE,
	CONTAINER_MANAGEMENT_ROUT,
	DASHBOARD_ROUTE,
	USERS_GROUPS_MANAGEMENT_ROUTE,
	USERS_MANAGEMENT_ROUTE,
} from '../../routes/routes.ts';
import {
	CONTAINER_GROUP_MANAGEMENT_NAME,
	CONTAINER_GROUP_NAME,
	CONTAINER_MANAGEMENT_NAME,
	DASHBOARD_NAME,
	PERMISSION_MANAGEMENT_NAME,
	USER_GROUP_MANAGEMENT_NAME,
	USER_MANAGEMENT_NAME,
	USER_PREMISSION_NAME,
} from '../../routes/routes_names.ts';
import DashboardIcon from '../../components/icons/drawer/dashboard_icon.tsx';
import UserAccordionIcon from '../../components/icons/drawer/user/user_accordion_icon.tsx';
import UserGroupIcon from '../../components/icons/drawer/user/user_group_icon.tsx';
import UserIcon from '../../components/icons/drawer/user/user_icon.tsx';
import UserPermissionIcon from '../../components/icons/drawer/user/user_permission_icon.tsx';
import {
	ContainerGroupIcon,
	ContainerGroupManagementIcon,
	ContainerManagementIcon,
} from '../../components/icons/drawer/container_icons.tsx';

const RoutesSchema = [
	{
		routeName: DASHBOARD_NAME,
		routeIcon: <DashboardIcon />,
		routeURL: DASHBOARD_ROUTE,
	},
	{
		accordionName: USER_PREMISSION_NAME,
		accordionIcon: <UserAccordionIcon classes="m-0 me-2" />,
		childs: [
			{
				routeName: USER_GROUP_MANAGEMENT_NAME,
				routeURL: USERS_GROUPS_MANAGEMENT_ROUTE,
				routeIcon: <UserGroupIcon />,
			},
			{
				routeName: USER_MANAGEMENT_NAME,
				routeIcon: <UserIcon />,
				routeURL: USERS_MANAGEMENT_ROUTE,
			},
			{
				routeName: PERMISSION_MANAGEMENT_NAME,
				routeIcon: <UserPermissionIcon />,
				routeURL: USERS_MANAGEMENT_ROUTE,
			},
		],
	},
	{
		accordionName: CONTAINER_GROUP_NAME,
		accordionIcon: <ContainerGroupIcon classes="m-0 me-2" />,
		childs: [
			{
				routeName: CONTAINER_GROUP_MANAGEMENT_NAME,
				routeURL: CONTAINER_GROUP_MANAGEMENT_ROUTE,
				routeIcon: <ContainerGroupManagementIcon />,
			},
			{
				routeName: CONTAINER_MANAGEMENT_NAME,
				routeIcon: <ContainerManagementIcon />,
				routeURL: CONTAINER_MANAGEMENT_ROUT,
			},
		],
	},
];

export default RoutesSchema;
