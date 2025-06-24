import {
	CLIENT_GROUP_MANAGEMENT_ROUTE, CLIENT_MANAGEMENT_ROUTE,
	CONTAINER_GROUP_MANAGEMENT_ROUTE,
	CONTAINER_MANAGEMENT_ROUT, CONTRACT_GROUP_MANAGEMENT_ROUTE, CONTRACT_MANAGEMENT_ROUTE,
	DASHBOARD_ROUTE,
	MAINTENANCE_GROUP_MANAGEMENT_ROUTE,
	MAINTENANCE_MANAGEMENT_ROUTE,
	TRUCK_GROUP_MANAGEMENT_ROUTE,
	TRUCK_MANAGEMENT_ROUTE,
	USERS_GROUPS_MANAGEMENT_ROUTE,
	USERS_MANAGEMENT_ROUTE,
} from '../../routes/routes.ts';
import {
	CONTAINER_GROUP_MANAGEMENT_NAME,
	CONTAINER_ACCORDION_NAME,
	DASHBOARD_NAME,
	PERMISSION_MANAGEMENT_NAME,
	USER_GROUP_MANAGEMENT_NAME,
	USER_MANAGEMENT_NAME,
	USER_ACCORDION_NAME,
	CONTAINER_MANAGEMENT_NAME,
	TRUCK_ACCORDION_NAME,
	TRUCK_GROUP_MANAGEMENT_NAME,
	TRUCK_MANAGEMENT_NAME,
	MAINTENANCE_ACCORDION_NAME,
	MAINTENANCE_GROUP_MANAGEMENT_NAME,
	MAINTENANCE_MANAGEMENT_NAME,
	CONTRACT_ACCORDION_NAME,
	CONTRACT_GROUP_MANAGEMENT_NAME,
	CONTRACT_MANAGEMENT_NAME,
	CLIENT_ACCORDION_NAME,
	CLIENT_GROUP_MANAGEMENT_NAME, CLIENT_MANAGEMENT_NAME,
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
import {
	TruckAccordionIcon,
	TruckGroupManagementIcon,
	TruckManagementIcon
} from "../../components/icons/drawer/truck_icons.tsx";
import {
	MaintenanceAccordionIcon,
	MaintenanceGroupManagementIcon, MaintenanceManagementIcon
} from "../../components/icons/drawer/maintenance_icons.tsx";
import {
	ContractAccordionIcon,
	ContractGroupManagementIcon,
	ContractManagementIcon
} from "../../components/icons/drawer/contract_icons.tsx";
import {
	ClientAccordionIcon,
	ClientGroupManagementIcon,
	ClientManagementIcon
} from "../../components/icons/drawer/client_icons.tsx";

const RoutesSchema = [
	{
		routeName: DASHBOARD_NAME,
		routeIcon: <DashboardIcon classes="ms-1" />,
		routeURL: DASHBOARD_ROUTE,
	},
	
	// User Management Routing Schema
	{
		accordionName: USER_ACCORDION_NAME,
		accordionIcon: <UserAccordionIcon classes="m-0 me-2" />,
		childs: [
			{
				routeName: USER_GROUP_MANAGEMENT_NAME,
				routeURL: USERS_GROUPS_MANAGEMENT_ROUTE,
				routeIcon: <UserGroupIcon />,
			},
			{
				routeName: USER_MANAGEMENT_NAME,
				routeURL: USERS_MANAGEMENT_ROUTE,
				routeIcon: <UserIcon />,
			},
			{
				routeName: PERMISSION_MANAGEMENT_NAME,
				routeURL: USERS_MANAGEMENT_ROUTE,
				routeIcon: <UserPermissionIcon />,
			},
		],
	},

	// Container Management Routing Schema
	{
		accordionName: CONTAINER_ACCORDION_NAME,
		accordionIcon: <ContainerGroupIcon classes="m-0 me-2" />,
		childs: [
			{
				routeName: CONTAINER_GROUP_MANAGEMENT_NAME,
				routeURL: CONTAINER_GROUP_MANAGEMENT_ROUTE,
				routeIcon: <ContainerGroupManagementIcon />,
			},
			{
				routeName: CONTAINER_MANAGEMENT_NAME,
				routeURL: CONTAINER_MANAGEMENT_ROUT,
				routeIcon: <ContainerManagementIcon />,
			},
		],
	},

	// Truck Management Routing Schema
	{
		accordionName: TRUCK_ACCORDION_NAME,
		accordionIcon: <TruckAccordionIcon classes="m-0 me-2" />,
		childs: [
			{
				routeName: TRUCK_GROUP_MANAGEMENT_NAME,
				routeURL: TRUCK_GROUP_MANAGEMENT_ROUTE,
				routeIcon: <TruckGroupManagementIcon />,
			},
			{
				routeName: TRUCK_MANAGEMENT_NAME,
				routeURL: TRUCK_MANAGEMENT_ROUTE,
				routeIcon: <TruckManagementIcon />,
			},
		],
	},

	// Maintenance Management Routing Schema
	{
		accordionName: MAINTENANCE_ACCORDION_NAME,
		accordionIcon: <MaintenanceAccordionIcon classes="m-0 me-2" />,
		childs: [
			{
				routeName: MAINTENANCE_GROUP_MANAGEMENT_NAME,
				routeURL: MAINTENANCE_GROUP_MANAGEMENT_ROUTE,
				routeIcon: <MaintenanceGroupManagementIcon />,
			},
			{
				routeName: MAINTENANCE_MANAGEMENT_NAME,
				routeURL: MAINTENANCE_MANAGEMENT_ROUTE,
				routeIcon: <MaintenanceManagementIcon />,
			},
		],
	},

	// Contract Management Routing Schema
	{
		accordionName: CONTRACT_ACCORDION_NAME,
		accordionIcon: <ContractAccordionIcon classes="m-0 me-2" />,
		childs: [
			{
				routeName: CONTRACT_GROUP_MANAGEMENT_NAME,
				routeURL: CONTRACT_GROUP_MANAGEMENT_ROUTE,
				routeIcon: <ContractGroupManagementIcon />,
			},
			{
				routeName: CONTRACT_MANAGEMENT_NAME,
				routeURL: CONTRACT_MANAGEMENT_ROUTE,
				routeIcon: <ContractManagementIcon />,
			},
		],
	},

	// Client Management Routing Schema
	{
		accordionName: CLIENT_ACCORDION_NAME,
		accordionIcon: <ClientAccordionIcon classes="m-0 me-2" />,
		childs: [
			{
				routeName: CLIENT_GROUP_MANAGEMENT_NAME,
				routeURL: CLIENT_GROUP_MANAGEMENT_ROUTE,
				routeIcon: <ClientGroupManagementIcon />,
			},
			{
				routeName: CLIENT_MANAGEMENT_NAME,
				routeURL: CLIENT_MANAGEMENT_ROUTE,
				routeIcon: <ClientManagementIcon />,
			},
		],
	},
];

export default RoutesSchema;
