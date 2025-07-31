import {
    CLIENT_MANAGEMENT_ROUTE,
    // CLIENT_GROUP_MANAGEMENT_ROUTE,
    // CLIENT_MANAGEMENT_ROUTE,
    // CLIENT_TYPE_MANAGEMENT_ROUTE,
    CONTAINER_GROUP_MANAGEMENT_ROUTE,
    CONTAINER_MANAGEMENT_ROUT,
    CONTAINER_TYPE_MANAGEMENT_ROUTE,
    // CONTRACT_GROUP_MANAGEMENT_ROUTE,
    CONTRACT_MANAGEMENT_ROUTE,
    // CONTRACT_TYPE_MANAGEMENT_ROUTE,
    DASHBOARD_ROUTE,
    // MAINTENANCE_GROUP_MANAGEMENT_ROUTE,
    // MAINTENANCE_MANAGEMENT_ROUTE,
    // MAINTENANCE_TYPE_MANAGEMENT_ROUTE,
    SYSTEM_SETTINGS_MANAGEMENT_ROUTE,
    TRUCK_GROUP_MANAGEMENT_ROUTE,
    TRUCK_MANAGEMENT_ROUTE,
    TRUCK_TYPE_MANAGEMENT_ROUTE,
    USER_SETTINGS_MANAGEMENT_ROUTE,
    USER_ROLE_MANAGEMENT_ROUTE,
    USER_MANAGEMENT_ROUTE,
    USER_PERMISSION_MANAGEMENT_ROUTE,
    CONCURRENCIES_MANAGEMENT_ROUTE,
    TRUCK_CHECK_MANAGEMENT_ROUTE,
    TRUCK_MAINTENANCE_MANAGEMENT_ROUTE,
    TRUCK_STATE_REPORT_ROUTE,
    TRUCK_CHECK_REPORT_ROUTE,
    TRUCK_MAINTENANCE_REPORT_ROUTE,
    CONTAINER_CHECK_MANAGEMENT_ROUTE,
    CONTAINER_MAINTENANCE_MANAGEMENT_ROUTE,
    CONTAINER_STATE_REPORT_ROUTE,
    CONTAINER_CHECK_REPORT_ROUTE,
    CONTAINER_MAINTENANCE_REPORT_ROUTE,
    CONTAINER_MOVEMENT_REPORT_ROUTE,
    TRUCK_MOVEMENT_REPORT_ROUTE,
    CLIENT_ACCOUNT_REPORT_ROUTE,
    CONTRACT_RENEW_MANAGEMENT_ROUTE,
    CONTRACT_PAYMENT_MANAGEMENT_ROUTE,
    CONTRACT_REFUND_MANAGEMENT_ROUTE,
    CONTRACT_END_MANAGEMENT_ROUTE,
    CONTRACT_REPORT_ROUTE,
    CONTRACT_ACCOUNT_REPORT_ROUTE,
    TRUCK_LICENSING_MANAGEMENT_ROUTE,
    TRUCK_INSURANCE_MANAGEMENT_ROUTE,
    USERS_REPORT_ROUTE,
    DRIVER_MANAGEMENT_ROUTE,
    SUPERVISOR_MANAGEMENT_ROUTE,
    CONTAINER_SEND_ROUTE,
    CONTAINER_EMPTY_ROUTE,
    CONTAINER_REPLACE_ROUTE,
    CONTAINER_WITHDRAW_ROUTE,
    CONTRACT_PAYMENTS_REPORT_ROUTE,
} from "./routes_paths.ts";
import {
    CONTAINER_GROUP_MANAGEMENT_NAME,
    CONTAINER_ACCORDION_NAME,
    DASHBOARD_NAME,
    USER_PERMISSION_MANAGEMENT_NAME,
    USER_ROLE_MANAGEMENT_NAME,
    USER_MANAGEMENT_NAME,
    USER_ACCORDION_NAME,
    CONTAINER_MANAGEMENT_NAME,
    TRUCK_ACCORDION_NAME,
    TRUCK_GROUP_MANAGEMENT_NAME,
    TRUCK_MANAGEMENT_NAME,
    // MAINTENANCE_ACCORDION_NAME,
    // MAINTENANCE_GROUP_MANAGEMENT_NAME,
    // MAINTENANCE_MANAGEMENT_NAME,
    CONTRACT_ACCORDION_NAME,
    // CONTRACT_GROUP_MANAGEMENT_NAME,
    CONTRACT_MANAGEMENT_NAME,
    // CLIENT_ACCORDION_NAME,
    // CLIENT_GROUP_MANAGEMENT_NAME,
    CLIENT_MANAGEMENT_NAME,
    // SYSTEM_ACCORDION_NAME,
    SYSTEM_SETTINGS_MANAGEMENT_NAME,
    USER_SETTINGS_MANAGEMENT_NAME,
    CONTAINER_TYPE_MANAGEMENT_NAME,
    TRUCK_TYPE_MANAGEMENT_NAME,
    // CLIENT_TYPE_MANAGEMENT_NAME,
    // CONTRACT_TYPE_MANAGEMENT_NAME,
    // MAINTENANCE_TYPE_MANAGEMENT_NAME,
    CONCURRENCIES_MANAGEMENT_NAME,
    CLIENT_ACCORDION_NAME,
    TRUCK_CHECK_MANAGEMENT_NAME,
    TRUCK_MAINTENANCE_MANAGEMENT_NAME,
    TRUCK_STATE_REPORT_NAME,
    TRUCK_CHECK_REPORT_NAME,
    TRUCK_MAINTENANCE_REPORT_NAME,
    CONTAINER_CHECK_MANAGEMENT_NAME,
    CONTAINER_MAINTENANCE_MANAGEMENT_NAME,
    CONTAINER_STATE_REPORT_NAME,
    CONTAINER_CHECK_REPORT_NAME,
    CONTAINER_MAINTENANCE_REPORT_NAME,
    CONTAINER_MOVEMENT_REPORT_NAME,
    TRUCK_MOVEMENT_REPORT_NAME,
    CLIENT_ACCOUNT_REPORT_NAME,
    CONTRACT_RENEW_MANAGEMENT_NAME,
    CONTRACT_PAYMENT_MANAGEMENT_NAME,
    CONTRACT_REFUND_MANAGEMENT_NAME,
    CONTRACT_END_MANAGEMENT_NAME,
    CONTRACT_REPORT_NAME,
    CONTRACT_PAYMENTS_REPORT_NAME,
    CONTRACT_ACCOUNT_REPORT_NAME,
    TRUCK_LICENSING_MANAGEMENT_NAME,
    TRUCK_INSURANCE_MANAGEMENT_NAME,
    USERS_REPORT_NAME,
    DRIVER_MANAGEMENT_NAME,
    SUPERVISOR_MANAGEMENT_NAME,
    CONTAINER_SEND_NAME,
    CONTAINER_EMPTY_NAME,
    CONTAINER_REPLACE_NAME,
    CONTAINER_WITHDRAW_NAME,
} from "./routes_names.ts";
import {
    ClientIcon,
    // ClientIcon,
    ContainerIcon,
    ContractIcon,
    DashboardIcon,
    DriverIcon,
    SupervisorIcon,
    // MaintenanceIcon,
    // SettingsIcon,
    TruckIcon,
    SystemIcon,
    UserReportIcon,
} from "../components/icons/drawer_icons.tsx";

const RoutesSchema = [
    {
        routeName: DASHBOARD_NAME,
        routeIcon: <DashboardIcon classes="-ms-1" />,
        routeURL: DASHBOARD_ROUTE,
    },

    // User & Settings Management Routing Schema
    {
        accordionName: USER_ACCORDION_NAME,
        accordionIcon: <SystemIcon classes="m-0 -ms-2 me-2" />,
        routes: [
            {
                routeName: USER_ROLE_MANAGEMENT_NAME,
                routeURL: USER_ROLE_MANAGEMENT_ROUTE,
            },
            {
                routeName: USER_MANAGEMENT_NAME,
                routeURL: USER_MANAGEMENT_ROUTE,
            },
            {
                routeName: USER_PERMISSION_MANAGEMENT_NAME,
                routeURL: USER_PERMISSION_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONCURRENCIES_MANAGEMENT_NAME,
                routeURL: CONCURRENCIES_MANAGEMENT_ROUTE,
            },
            {
                routeName: USER_SETTINGS_MANAGEMENT_NAME,
                routeURL: USER_SETTINGS_MANAGEMENT_ROUTE,
            },
            {
                routeName: SYSTEM_SETTINGS_MANAGEMENT_NAME,
                routeURL: SYSTEM_SETTINGS_MANAGEMENT_ROUTE,
            },
        ],
    },

    // Supervisor Management Routing Scheme
    {
        routeName: SUPERVISOR_MANAGEMENT_NAME,
        routeIcon: <SupervisorIcon classes="-ms-1" />,
        routeURL: SUPERVISOR_MANAGEMENT_ROUTE,
    },

    // Driver Management Routing Scheme
    {
        routeName: DRIVER_MANAGEMENT_NAME,
        routeIcon: <DriverIcon classes="-ms-1" />,
        routeURL: DRIVER_MANAGEMENT_ROUTE,
    },

    // Truck Management Routing Schema
    {
        accordionName: TRUCK_ACCORDION_NAME,
        accordionIcon: <TruckIcon classes="m-0 -ms-2 me-2" />,
        routes: [
            {
                routeName: TRUCK_TYPE_MANAGEMENT_NAME,
                routeURL: TRUCK_TYPE_MANAGEMENT_ROUTE,
            },
            {
                routeName: TRUCK_GROUP_MANAGEMENT_NAME,
                routeURL: TRUCK_GROUP_MANAGEMENT_ROUTE,
            },
            {
                routeName: TRUCK_MANAGEMENT_NAME,
                routeURL: TRUCK_MANAGEMENT_ROUTE,
            },
            {
                routeName: TRUCK_LICENSING_MANAGEMENT_NAME,
                routeURL: TRUCK_LICENSING_MANAGEMENT_ROUTE,
            },
            {
                routeName: TRUCK_INSURANCE_MANAGEMENT_NAME,
                routeURL: TRUCK_INSURANCE_MANAGEMENT_ROUTE,
            },
            {
                routeName: TRUCK_CHECK_MANAGEMENT_NAME,
                routeURL: TRUCK_CHECK_MANAGEMENT_ROUTE,
            },
            {
                routeName: TRUCK_MAINTENANCE_MANAGEMENT_NAME,
                routeURL: TRUCK_MAINTENANCE_MANAGEMENT_ROUTE,
            },
            {
                routeName: TRUCK_STATE_REPORT_NAME,
                routeURL: TRUCK_STATE_REPORT_ROUTE,
            },
            {
                routeName: TRUCK_MOVEMENT_REPORT_NAME,
                routeURL: TRUCK_MOVEMENT_REPORT_ROUTE,
            },
            {
                routeName: TRUCK_CHECK_REPORT_NAME,
                routeURL: TRUCK_CHECK_REPORT_ROUTE,
            },
            {
                routeName: TRUCK_MAINTENANCE_REPORT_NAME,
                routeURL: TRUCK_MAINTENANCE_REPORT_ROUTE,
            },
        ],
    },

    // Container Management Routing Schema
    {
        accordionName: CONTAINER_ACCORDION_NAME,
        accordionIcon: <ContainerIcon classes="m-0 -ms-2 me-2" />,
        routes: [
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
            {
                routeName: CONTAINER_SEND_NAME,
                routeURL: CONTAINER_SEND_ROUTE,
            },
            {
                routeName: CONTAINER_EMPTY_NAME,
                routeURL: CONTAINER_EMPTY_ROUTE,
            },
            {
                routeName: CONTAINER_REPLACE_NAME,
                routeURL: CONTAINER_REPLACE_ROUTE,
            },
            {
                routeName: CONTAINER_WITHDRAW_NAME,
                routeURL: CONTAINER_WITHDRAW_ROUTE,
            },
            {
                routeName: CONTAINER_CHECK_MANAGEMENT_NAME,
                routeURL: CONTAINER_CHECK_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONTAINER_MAINTENANCE_MANAGEMENT_NAME,
                routeURL: CONTAINER_MAINTENANCE_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONTAINER_STATE_REPORT_NAME,
                routeURL: CONTAINER_STATE_REPORT_ROUTE,
            },
            {
                routeName: CONTAINER_MOVEMENT_REPORT_NAME,
                routeURL: CONTAINER_MOVEMENT_REPORT_ROUTE,
            },
            {
                routeName: CONTAINER_CHECK_REPORT_NAME,
                routeURL: CONTAINER_CHECK_REPORT_ROUTE,
            },
            {
                routeName: CONTAINER_MAINTENANCE_REPORT_NAME,
                routeURL: CONTAINER_MAINTENANCE_REPORT_ROUTE,
            },
        ],
    },

    // Client Management Routing Schema
    {
        accordionName: CLIENT_ACCORDION_NAME,
        accordionIcon: <ClientIcon classes="m-0 -ms-2 me-2" />,
        routes: [
            // {
            //     routeName: CLIENT_GROUP_MANAGEMENT_NAME,
            //     routeURL: CLIENT_GROUP_MANAGEMENT_ROUTE,
            // },
            // {
            //     routeName: CLIENT_TYPE_MANAGEMENT_NAME,
            //     routeURL: CLIENT_TYPE_MANAGEMENT_ROUTE,
            // },
            {
                routeName: CLIENT_MANAGEMENT_NAME,
                routeURL: CLIENT_MANAGEMENT_ROUTE,
            },
            {
                routeName: CLIENT_ACCOUNT_REPORT_NAME,
                routeURL: CLIENT_ACCOUNT_REPORT_ROUTE,
            },
        ],
    },

    // ---------------------
    // {
    //     routeName: CLIENT_MANAGEMENT_NAME,
    //     routeIcon: <ClientIcon classes="-ms-1" />,
    //     routeURL: CLIENT_MANAGEMENT_ROUTE,
    // },

    // Contract Management Routing Schema
    {
        accordionName: CONTRACT_ACCORDION_NAME,
        accordionIcon: <ContractIcon classes="m-0 -ms-2 me-2" />,
        routes: [
            // {
            //     routeName: CONTRACT_GROUP_MANAGEMENT_NAME,
            //     routeURL: CONTRACT_GROUP_MANAGEMENT_ROUTE,
            // },
            // {
            //     routeName: CONTRACT_TYPE_MANAGEMENT_NAME,
            //     routeURL: CONTRACT_TYPE_MANAGEMENT_ROUTE,
            // },
            {
                routeName: CONTRACT_MANAGEMENT_NAME,
                routeURL: CONTRACT_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONTRACT_RENEW_MANAGEMENT_NAME,
                routeURL: CONTRACT_RENEW_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONTRACT_PAYMENT_MANAGEMENT_NAME,
                routeURL: CONTRACT_PAYMENT_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONTRACT_REFUND_MANAGEMENT_NAME,
                routeURL: CONTRACT_REFUND_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONTRACT_END_MANAGEMENT_NAME,
                routeURL: CONTRACT_END_MANAGEMENT_ROUTE,
            },
            {
                routeName: CONTRACT_REPORT_NAME,
                routeURL: CONTRACT_REPORT_ROUTE,
            },
            {
                routeName: CONTRACT_PAYMENTS_REPORT_NAME,
                routeURL: CONTRACT_PAYMENTS_REPORT_ROUTE,
            },
            {
                routeName: CONTRACT_ACCOUNT_REPORT_NAME,
                routeURL: CONTRACT_ACCOUNT_REPORT_ROUTE,
            },
        ],
    },
    {
        routeName: USERS_REPORT_NAME,
        routeIcon: <UserReportIcon classes="-ms-1" />,
        routeURL: USERS_REPORT_ROUTE,
    },

    // Maintenance Management Routing Schema
    // {
    //     accordionName: MAINTENANCE_ACCORDION_NAME,
    //     accordionIcon: <MaintenanceIcon classes="m-0 -ms-2 me-2" />,
    //     routes: [
    //         {
    //             routeName: MAINTENANCE_GROUP_MANAGEMENT_NAME,
    //             routeURL: MAINTENANCE_GROUP_MANAGEMENT_ROUTE,
    //         },
    //         {
    //             routeName: MAINTENANCE_TYPE_MANAGEMENT_NAME,
    //             routeURL: MAINTENANCE_TYPE_MANAGEMENT_ROUTE,
    //         },
    //         {
    //             routeName: MAINTENANCE_MANAGEMENT_NAME,
    //             routeURL: MAINTENANCE_MANAGEMENT_ROUTE,
    //         },
    //     ],
    // },

    // System Management Routing Schema
    // {
    //     accordionName: SYSTEM_ACCORDION_NAME,
    //     accordionIcon: <SettingsIcon classes="m-0 -ms-2 me-2" />,
    //     routes: [
    //         {
    //             routeName: SYSTEM_SETTINGS_MANAGEMENT_NAME,
    //             routeURL: SYSTEM_SETTINGS_MANAGEMENT_ROUTE,
    //         },
    //         {
    //             routeName: USER_SETTINGS_MANAGEMENT_NAME,
    //             routeURL: USER_SETTINGS_MANAGEMENT_ROUTE,
    //         },
    //     ],
    // },
];

export default RoutesSchema;
