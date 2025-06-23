import {
	DASHBOARD_ROUTE,
	USERS_GROUPS_MANAGEMENT_ROUTE,
	USERS_MANAGEMENT_ROUTE,
} from '../../routes/routes.ts';
import {
	DASHBOARD_NAME,
	PERMISSION_MANAGEMENT_NAME,
	USER_GROUP_MANAGEMENT_NAME,
	USER_MANAGEMENT_NAME,
	USER_PREMISSION_NAME,
} from '../../routes/routes_names.ts';
import DashboardIcon from '../../components/icons/drawer/dashboard_icon.tsx';
import UserAccordionIcon from '../../components/icons/drawer/user_accordion_icon.tsx';
import UserGroupIcon from '../../components/icons/drawer/user_group_icon.tsx';
import UserIcon from '../../components/icons/drawer/user_icon.tsx';
import UserPermissionIcon from '../../components/icons/drawer/user_permission_icon.tsx';

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
];

export default RoutesSchema;
