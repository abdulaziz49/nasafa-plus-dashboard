import {
    CLIENT_MANAGEMENT_ROUTE,
    // CLIENT_GROUP_MANAGEMENT_ROUTE,
    // CLIENT_MANAGEMENT_ROUTE,
    // CLIENT_TYPE_MANAGEMENT_ROUTE,
    CONTAINER_GROUP_MANAGEMENT_ROUTE,
    CONTAINER_MANAGEMENT_ROUT,
    CONTAINER_TYPE_MANAGEMENT_ROUTE,
    CONTRACT_GROUP_MANAGEMENT_ROUTE,
    CONTRACT_MANAGEMENT_ROUTE, CONTRACT_TYPE_MANAGEMENT_ROUTE,
    DASHBOARD_ROUTE,
    MAINTENANCE_GROUP_MANAGEMENT_ROUTE,
    MAINTENANCE_MANAGEMENT_ROUTE, MAINTENANCE_TYPE_MANAGEMENT_ROUTE,
    SYSTEM_SETTINGS_MANAGEMENT_ROUTE,
    TRUCK_GROUP_MANAGEMENT_ROUTE,
    TRUCK_MANAGEMENT_ROUTE, TRUCK_TYPE_MANAGEMENT_ROUTE,
    USER_SETTINGS_MANAGEMENT_ROUTE,
    USERS_GROUPS_MANAGEMENT_ROUTE,
    USERS_MANAGEMENT_ROUTE, USERS_PERMISSION_MANAGEMENT_ROUTE,
} from './routes_paths.ts';
import {
    CONTAINER_GROUP_MANAGEMENT_NAME,
    CONTAINER_ACCORDION_NAME,
    DASHBOARD_NAME,
    USER_PERMISSION_MANAGEMENT_NAME,
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
    // CLIENT_ACCORDION_NAME,
    // CLIENT_GROUP_MANAGEMENT_NAME,
    CLIENT_MANAGEMENT_NAME,
    SYSTEM_ACCORDION_NAME,
    SYSTEM_SETTINGS_MANAGEMENT_NAME,
    USER_SETTINGS_MANAGEMENT_NAME,
    CONTAINER_TYPE_MANAGEMENT_NAME,
    TRUCK_TYPE_MANAGEMENT_NAME,
    // CLIENT_TYPE_MANAGEMENT_NAME,
    CONTRACT_TYPE_MANAGEMENT_NAME,
    MAINTENANCE_TYPE_MANAGEMENT_NAME,

} from './routes_names.ts';
import {
    ClientIcon,
    // ClientIcon,
    ContainerIcon, ContractIcon,
    DashboardIcon,
    MaintenanceIcon, SettingsIcon,
    TruckIcon,
    UserIcon
} from "../components/icons/drawer_icons.tsx";

const RoutesSchema = [
    {
        routeName: DASHBOARD_NAME,
        routeIcon: <DashboardIcon classes="-ms-1"/>,
        routeURL: DASHBOARD_ROUTE,
    },

    // User Management Routing Schema
    {
        accordionName: USER_ACCORDION_NAME,
        accordionIcon: <UserIcon classes="m-0 -ms-2 me-2"/>,
        childs: [
            {
                routeName: USER_GROUP_MANAGEMENT_NAME,
                routeURL: USERS_GROUPS_MANAGEMENT_ROUTE,
            },
            {
                routeName: USER_MANAGEMENT_NAME,
                routeURL: USERS_MANAGEMENT_ROUTE,
            },
            {
                routeName: USER_PERMISSION_MANAGEMENT_NAME,
                routeURL: USERS_PERMISSION_MANAGEMENT_ROUTE,
            },
        ],
    },

    // Container Management Routing Schema
    {
        accordionName: CONTAINER_ACCORDION_NAME,
        accordionIcon: <ContainerIcon classes="m-0 -ms-2 me-2"/>,
        childs: [
            {
                routeName: CONTAINER_GROUP_MANAGEMENT_NAME,
                routeURL: CONTAINER_GROUP_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONTAINER_TYPE_MANAGEMENT_NAME,
                routeURL: CONTAINER_TYPE_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONTAINER_MANAGEMENT_NAME,
                routeURL: CONTAINER_MANAGEMENT_ROUT,
            },
        ],
    },

    // Truck Management Routing Schema
    {
        accordionName: TRUCK_ACCORDION_NAME,
        accordionIcon: <TruckIcon classes="m-0 -ms-2 me-2"/>,
        childs: [
            {
                routeName: TRUCK_GROUP_MANAGEMENT_NAME,
                routeURL: TRUCK_GROUP_MANAGEMENT_ROUTE,
            },
            {
                routeName: TRUCK_TYPE_MANAGEMENT_NAME,
                routeURL: TRUCK_TYPE_MANAGEMENT_ROUTE,
            },
            {
                routeName: TRUCK_MANAGEMENT_NAME,
                routeURL: TRUCK_MANAGEMENT_ROUTE,
            },
        ],
    },

    // Client Management Routing Schema

    // {
    //     accordionName: CLIENT_ACCORDION_NAME,
    //     accordionIcon: <ClientIcon classes="m-0 -ms-2 me-2"/>,
    //     childs: [
    //         {
    //             routeName: CLIENT_GROUP_MANAGEMENT_NAME,
    //             routeURL: CLIENT_GROUP_MANAGEMENT_ROUTE,
    //         },
    //         {
    //             routeName: CLIENT_TYPE_MANAGEMENT_NAME,
    //             routeURL: CLIENT_TYPE_MANAGEMENT_ROUTE,
    //         },
    //         {
    //             routeName: CLIENT_MANAGEMENT_NAME,
    //             routeURL: CLIENT_MANAGEMENT_ROUTE,
    //         },
    //     ],
    // },

    // ---------------------
    {
        routeName: CLIENT_MANAGEMENT_NAME,
        routeIcon: <ClientIcon classes="-ms-1"/>,
        routeURL: CLIENT_MANAGEMENT_ROUTE,
    },


    // Contract Management Routing Schema
    {
        accordionName: CONTRACT_ACCORDION_NAME,
        accordionIcon: <ContractIcon classes="m-0 -ms-2 me-2"/>,
        childs: [
            {
                routeName: CONTRACT_GROUP_MANAGEMENT_NAME,
                routeURL: CONTRACT_GROUP_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONTRACT_TYPE_MANAGEMENT_NAME,
                routeURL: CONTRACT_TYPE_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONTRACT_MANAGEMENT_NAME,
                routeURL: CONTRACT_MANAGEMENT_ROUTE,
            },
        ],
    },

    // Maintenance Management Routing Schema
    {
        accordionName: MAINTENANCE_ACCORDION_NAME,
        accordionIcon: <MaintenanceIcon classes="m-0 -ms-2 me-2"/>,
        childs: [
            {
                routeName: MAINTENANCE_GROUP_MANAGEMENT_NAME,
                routeURL: MAINTENANCE_GROUP_MANAGEMENT_ROUTE,
            },
            {
                routeName: MAINTENANCE_TYPE_MANAGEMENT_NAME,
                routeURL: MAINTENANCE_TYPE_MANAGEMENT_ROUTE,
            },
            {
                routeName: MAINTENANCE_MANAGEMENT_NAME,
                routeURL: MAINTENANCE_MANAGEMENT_ROUTE,
            },
        ],
    },

    // System Management Routing Schema
    {
        accordionName: SYSTEM_ACCORDION_NAME,
        accordionIcon: <SettingsIcon classes="m-0 -ms-2 me-2"/>,
        childs: [
            {
                routeName: SYSTEM_SETTINGS_MANAGEMENT_NAME,
                routeURL: SYSTEM_SETTINGS_MANAGEMENT_ROUTE,
            },
            {
                routeName: USER_SETTINGS_MANAGEMENT_NAME,
                routeURL: USER_SETTINGS_MANAGEMENT_ROUTE,
            },
        ],
    },
];

export default RoutesSchema;
