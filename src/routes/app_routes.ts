// src/routes/app_routes_config.ts
import { lazy, type LazyExoticComponent, type JSX } from "react";

// Import all your route path constants
import {
    // CLIENT_GROUP_MANAGEMENT_ROUTE,
    CLIENT_MANAGEMENT_ROUTE,
    // CLIENT_TYPE_MANAGEMENT_ROUTE,
    CONTAINER_GROUP_MANAGEMENT_ROUTE,
    CONTAINER_MANAGEMENT_ROUT,
    CONTAINER_TYPE_MANAGEMENT_ROUTE,
    // CONTRACT_GROUP_MANAGEMENT_ROUTE,
    CONTRACT_MANAGEMENT_ROUTE,
    // CONTRACT_TYPE_MANAGEMENT_ROUTE,
    DASHBOARD_ROUTE,
    LOGIN_ROUTE,
    // MAINTENANCE_GROUP_MANAGEMENT_ROUTE,
    // MAINTENANCE_MANAGEMENT_ROUTE,
    // MAINTENANCE_TYPE_MANAGEMENT_ROUTE,
    NOTIFICATIONS_ROUTE,
    SYSTEM_SETTINGS_MANAGEMENT_ROUTE,
    TRUCK_GROUP_MANAGEMENT_ROUTE,
    TRUCK_MANAGEMENT_ROUTE,
    TRUCK_TYPE_MANAGEMENT_ROUTE,
    USER_SETTINGS_MANAGEMENT_ROUTE,
    USER_ROLE_MANAGEMENT_ROUTE,
    USER_MANAGEMENT_ROUTE,
    USER_PERMISSION_MANAGEMENT_ROUTE,
    CONCURRENCIES_MANAGEMENT_ROUTE,
    TRUCK_LICENSING_MANAGEMENT_ROUTE,
    TRUCK_INSURANCE_MANAGEMENT_ROUTE,
    TRUCK_CHECK_MANAGEMENT_ROUTE,
    TRUCK_MAINTENANCE_MANAGEMENT_ROUTE,
    TRUCK_STATE_REPORT_ROUTE,
    TRUCK_MOVEMENT_REPORT_ROUTE,
    TRUCK_CHECK_REPORT_ROUTE,
    TRUCK_MAINTENANCE_REPORT_ROUTE,
    USERS_REPORT_ROUTE,
    MAP_ROUTE,
    DRIVER_MANAGEMENT_ROUTE,
    SUPERVISOR_MANAGEMENT_ROUTE,
    CONTAINER_SEND_ROUTE,
    CONTAINER_EMPTY_ROUTE,
    CONTAINER_REPLACE_ROUTE,
    CONTAINER_WITHDRAW_ROUTE,
    CONTAINER_CHECK_MANAGEMENT_ROUTE,
    CONTAINER_MAINTENANCE_MANAGEMENT_ROUTE,
    CONTAINER_STATE_REPORT_ROUTE,
    CONTAINER_MOVEMENT_REPORT_ROUTE,
    CONTAINER_CHECK_REPORT_ROUTE,
    CONTAINER_MAINTENANCE_REPORT_ROUTE,
    CLIENT_ACCOUNT_REPORT_ROUTE,
    CONTRACT_RENEW_MANAGEMENT_ROUTE,
    CONTRACT_PAYMENT_MANAGEMENT_ROUTE,
    CONTRACT_REFUND_MANAGEMENT_ROUTE,
    CONTRACT_END_MANAGEMENT_ROUTE,
    CONTRACT_REPORT_ROUTE,
    CONTRACT_PAYMENTS_REPORT_ROUTE,
    CONTRACT_ACCOUNT_REPORT_ROUTE,
} from "./routes_paths.ts";

// Define a type for a single route configuration
export interface AppRouteConfig {
    path: string;
    // Use componentType<any> for lazily loaded components
    // as their exact prop types are not known at this point.
    // Or you can define a more specific type if all views share common props.
    Component: LazyExoticComponent<() => JSX.Element>;
    isProtected: boolean;
    // Add other properties like 'requiredRole' or 'permissions' if you implement RBAC/PBAC
    // requiredRole?: 'admin' | 'user' | 'editor';
}

// -----------------------------------------------------------
// Lazily loaded components (moved from App.tsx)
// -----------------------------------------------------------

// General Views
const DashboardView = lazy(() => import("../views/dashboard_view.tsx"));
const LoginView = lazy(() => import("../views/login_view.tsx"));
const SupervisorManagmentView = lazy(
    () => import("../views/supervisor_management_view.tsx")
);
const DriverManagementView = lazy(
    () => import("../views/driver_management_view.tsx")
);
const MapView = lazy(() => import("../views/map_view.tsx"));
const UsersReportView = lazy(() => import("../views/users_report_view.tsx"));
const NotificationsView = lazy(() => import("../views/notifications_view.tsx"));

// User and Settings Management Views
const UserRoleManagementView = lazy(
    () => import("../views/users_system/user_role_management_view.tsx")
);
const UserManagementView = lazy(
    () => import("../views/users_system/user_management_view.tsx")
);
const UserPermissionManagementView = lazy(
    () => import("../views/users_system/user_permission_management_view.tsx")
);
const ConcurrenciesManagementView = lazy(
    () => import("../views/users_system/concurrencies_view.tsx")
);
const SystemSettingsView = lazy(
    () => import("../views/users_system/system_settings_view.tsx")
);
const UserSettingsView = lazy(
    () => import("../views/users_system/user_settings_view.tsx")
);

// Truck Management Views
const TruckTypeManagementView = lazy(
    () => import("../views/trucks/truck_type_management_view.tsx")
);
const TruckGroupManagementView = lazy(
    () => import("../views/trucks/truck_group_management_view.tsx")
);
const TruckManagementView = lazy(
    () => import("../views/trucks/truck_management_view.tsx")
);
const TruckLicenseManagementView = lazy(
    () => import("../views/trucks/truck_license_management_view.tsx")
);
const TruckInsuranceManagementView = lazy(
    () => import("../views/trucks/truck_insurance_management_view.tsx")
);
const TruckCheckManagementView = lazy(
    () => import("../views/trucks/trcuk_check_management_view.tsx")
);
const TruckMaintenanceManagementView = lazy(
    () => import("../views/trucks/truck_maintenance_management_view.tsx")
);
const TruckStateReportView = lazy(
    () => import("../views/trucks/truck_state_report_view.tsx")
);
const TruckMovementReportView = lazy(
    () => import("../views/trucks/truck_movement_report_view.tsx")
);
const TruckCheckReportView = lazy(
    () => import("../views/trucks/truck_check_report_view.tsx")
);
const TruckMaintenanceReportView = lazy(
    () => import("../views/trucks/truck_maintenance_report_view.tsx")
);

// Container Management Views
const ContainerTypeManagementView = lazy(
    () => import("../views/containers/container_type_management_view.tsx")
);
const ContainerGroupManagementView = lazy(
    () => import("../views/containers/container_group_management_view.tsx")
);
const ContainerManagementView = lazy(
    () => import("../views/containers/container_management_view.tsx")
);
const ContainerSendView = lazy(
    () => import("../views/containers/contianer_send_view.tsx")
);
const ContainerEmptyView = lazy(
    () => import("../views/containers/container_empty_view.tsx")
);
const ContainerReplaceView = lazy(
    () => import("../views/containers/container_replace_view.tsx")
);
const ContainerWithdrawView = lazy(
    () => import("../views/containers/container_withdraw_view.tsx")
);
const ContainerCheckView = lazy(
    () => import("../views/containers/container_check_view.tsx")
);
const ContainerMaintenanceView = lazy(
    () => import("../views/containers/container_maintenance_view.tsx")
);
const ContainerStateReportView = lazy(
    () => import("../views/containers/container_state_report_view.tsx")
);
const ContainerMovementReportView = lazy(
    () => import("../views/containers/container_movement_report_view.tsx")
);
const ContainerCheckReportView = lazy(
    () => import("../views/containers/container_check_report_view.tsx")
);
const ContainerMaintenanceReportView = lazy(
    () => import("../views/containers/container_maintenance_report_view.tsx")
);

// Client Management Views
// const ClientGroupManagementView = lazy(
//     () => import("../views/clients/client_group_management_view.tsx")
// );
// const ClientTypeManagementView = lazy(
//     () => import("../views/clients/client_type_management_view.tsx")
// );
const ClientManagementView = lazy(
    () => import("../views/clients/client_management_view.tsx")
);
const ClientAccountReportView = lazy(
    () => import("../views/clients/client_account_report_view.tsx")
);

// Contract Management Views
// const ContractGroupManagementView = lazy(
//     () => import("../views/contracts/_contract_group_management_view.tsx")
// );
// const ContractTypeManagementView = lazy(
//     () => import("../views/contracts/_contract_type_management_view.tsx")
// );
const ContractManagementView = lazy(
    () => import("../views/contracts/contract_management_view.tsx")
);
const ContractRenewManagementView = lazy(
    () => import("../views/contracts/contract_renew_management_view.tsx")
);
const ContractPaymentManagementView = lazy(
    () => import("../views/contracts/contract_payment_management_view.tsx")
);
const ContractRefundManagementView = lazy(
    () => import("../views/contracts/contract_refund_management_view.tsx")
);
const ContainerEndManagementView = lazy(
    () => import("../views/contracts/contract_end_management_view.tsx")
);
const ContractReportView = lazy(
    () => import("../views/contracts/contract_report_view.tsx")
);
const ContractPaymentsReportView = lazy(
    () => import("../views/contracts/contract_payments_report_view.tsx")
);
const ContainerAccountReportView = lazy(
    () => import("../views/contracts/contract_account_report_view.tsx")
);

// // Maintenance Management Views
// const MaintenanceGroupManagementView = lazy(
//     () => import("../views/maintenance/maintenance_group_management_view.tsx")
// );
// const MaintenanceTypeManagementView = lazy(
//     () => import("../views/maintenance/maintenance_type_management_view.tsx")
// );
// const MaintenanceManagementView = lazy(
//     () => import("../views/maintenance/maintenance_management_view.tsx")
// );

// Error Views (note: the 404 for protected routes will be handled within the ProtectedRoute section in App.tsx)
const View404 = lazy(() => import("../views/errors/view_404.tsx"));

// -----------------------------------------------------------
// Array of all route configurations
// -----------------------------------------------------------
export const appRoutes: AppRouteConfig[] = [
    // Public Routes
    { path: LOGIN_ROUTE, Component: LoginView, isProtected: false },

    // Protected Routes
    { path: DASHBOARD_ROUTE, Component: DashboardView, isProtected: true },
    {
        path: USERS_REPORT_ROUTE,
        Component: UsersReportView,
        isProtected: true,
    },
    {
        path: MAP_ROUTE,
        Component: MapView,
        isProtected: true,
    },
    {
        path: SUPERVISOR_MANAGEMENT_ROUTE,
        Component: SupervisorManagmentView,
        isProtected: true,
    },
    {
        path: DRIVER_MANAGEMENT_ROUTE,
        Component: DriverManagementView,
        isProtected: true,
    },
    {
        path: NOTIFICATIONS_ROUTE,
        Component: NotificationsView,
        isProtected: true,
    },

    // User and Settings Management
    {
        path: USER_ROLE_MANAGEMENT_ROUTE,
        Component: UserRoleManagementView,
        isProtected: true,
    },
    {
        path: USER_MANAGEMENT_ROUTE,
        Component: UserManagementView,
        isProtected: true,
    },
    {
        path: USER_PERMISSION_MANAGEMENT_ROUTE,
        Component: UserPermissionManagementView,
        isProtected: true,
    },
    {
        path: CONCURRENCIES_MANAGEMENT_ROUTE,
        Component: ConcurrenciesManagementView,
        isProtected: true,
    },
    {
        path: USER_SETTINGS_MANAGEMENT_ROUTE,
        Component: UserSettingsView,
        isProtected: true,
    },
    {
        path: SYSTEM_SETTINGS_MANAGEMENT_ROUTE,
        Component: SystemSettingsView,
        isProtected: true,
    },

    // Truck Management
    {
        path: TRUCK_GROUP_MANAGEMENT_ROUTE,
        Component: TruckGroupManagementView,
        isProtected: true,
    },
    {
        path: TRUCK_TYPE_MANAGEMENT_ROUTE,
        Component: TruckTypeManagementView,
        isProtected: true,
    },
    {
        path: TRUCK_MANAGEMENT_ROUTE,
        Component: TruckManagementView,
        isProtected: true,
    },
    {
        path: TRUCK_LICENSING_MANAGEMENT_ROUTE,
        Component: TruckLicenseManagementView,
        isProtected: true,
    },
    {
        path: TRUCK_INSURANCE_MANAGEMENT_ROUTE,
        Component: TruckInsuranceManagementView,
        isProtected: true,
    },
    {
        path: TRUCK_CHECK_MANAGEMENT_ROUTE,
        Component: TruckCheckManagementView,
        isProtected: true,
    },
    {
        path: TRUCK_MAINTENANCE_MANAGEMENT_ROUTE,
        Component: TruckMaintenanceManagementView,
        isProtected: true,
    },
    {
        path: TRUCK_STATE_REPORT_ROUTE,
        Component: TruckStateReportView,
        isProtected: true,
    },
    {
        path: TRUCK_MOVEMENT_REPORT_ROUTE,
        Component: TruckMovementReportView,
        isProtected: true,
    },
    {
        path: TRUCK_CHECK_REPORT_ROUTE,
        Component: TruckCheckReportView,
        isProtected: true,
    },
    {
        path: TRUCK_MAINTENANCE_REPORT_ROUTE,
        Component: TruckMaintenanceReportView,
        isProtected: true,
    },

    // Container Management
    {
        path: CONTAINER_GROUP_MANAGEMENT_ROUTE,
        Component: ContainerGroupManagementView,
        isProtected: true,
    },
    {
        path: CONTAINER_TYPE_MANAGEMENT_ROUTE,
        Component: ContainerTypeManagementView,
        isProtected: true,
    },
    {
        path: CONTAINER_MANAGEMENT_ROUT,
        Component: ContainerManagementView,
        isProtected: true,
    },
    {
        path: CONTAINER_SEND_ROUTE,
        Component: ContainerSendView,
        isProtected: true,
    },
    {
        path: CONTAINER_EMPTY_ROUTE,
        Component: ContainerEmptyView,
        isProtected: true,
    },
    {
        path: CONTAINER_REPLACE_ROUTE,
        Component: ContainerReplaceView,
        isProtected: true,
    },
    {
        path: CONTAINER_WITHDRAW_ROUTE,
        Component: ContainerWithdrawView,
        isProtected: true,
    },
    {
        path: CONTAINER_CHECK_MANAGEMENT_ROUTE,
        Component: ContainerCheckView,
        isProtected: true,
    },
    {
        path: CONTAINER_MAINTENANCE_MANAGEMENT_ROUTE,
        Component: ContainerMaintenanceView,
        isProtected: true,
    },
    {
        path: CONTAINER_MAINTENANCE_MANAGEMENT_ROUTE,
        Component: ContainerMaintenanceView,
        isProtected: true,
    },
    {
        path: CONTAINER_STATE_REPORT_ROUTE,
        Component: ContainerStateReportView,
        isProtected: true,
    },
    {
        path: CONTAINER_MOVEMENT_REPORT_ROUTE,
        Component: ContainerMovementReportView,
        isProtected: true,
    },
    {
        path: CONTAINER_CHECK_REPORT_ROUTE,
        Component: ContainerCheckReportView,
        isProtected: true,
    },
    {
        path: CONTAINER_MAINTENANCE_REPORT_ROUTE,
        Component: ContainerMaintenanceReportView,
        isProtected: true,
    },

    // Client Management
    // {
    //     path: CLIENT_GROUP_MANAGEMENT_ROUTE,
    //     Component: ClientGroupManagementView,
    //     isProtected: true,
    // },
    // {
    //     path: CLIENT_TYPE_MANAGEMENT_ROUTE,
    //     Component: ClientTypeManagementView,
    //     isProtected: true,
    // },
    {
        path: CLIENT_MANAGEMENT_ROUTE,
        Component: ClientManagementView,
        isProtected: true,
    },
    {
        path: CLIENT_ACCOUNT_REPORT_ROUTE,
        Component: ClientAccountReportView,
        isProtected: true,
    },

    // Contract Management
    // {
    //     path: CONTRACT_GROUP_MANAGEMENT_ROUTE,
    //     Component: ContractGroupManagementView,
    //     isProtected: true,
    // },
    // {
    //     path: CONTRACT_TYPE_MANAGEMENT_ROUTE,
    //     Component: ContractTypeManagementView,
    //     isProtected: true,
    // },
    {
        path: CONTRACT_MANAGEMENT_ROUTE,
        Component: ContractManagementView,
        isProtected: true,
    },
    {
        path: CONTRACT_RENEW_MANAGEMENT_ROUTE,
        Component: ContractRenewManagementView,
        isProtected: true,
    },
    {
        path: CONTRACT_PAYMENT_MANAGEMENT_ROUTE,
        Component: ContractPaymentManagementView,
        isProtected: true,
    },
    {
        path: CONTRACT_REFUND_MANAGEMENT_ROUTE,
        Component: ContractRefundManagementView,
        isProtected: true,
    },
    {
        path: CONTRACT_END_MANAGEMENT_ROUTE,
        Component: ContainerEndManagementView,
        isProtected: true,
    },
    {
        path: CONTRACT_REPORT_ROUTE,
        Component: ContractReportView,
        isProtected: true,
    },
    {
        path: CONTRACT_PAYMENTS_REPORT_ROUTE,
        Component: ContractPaymentsReportView,
        isProtected: true,
    },
    {
        path: CONTRACT_ACCOUNT_REPORT_ROUTE,
        Component: ContainerAccountReportView,
        isProtected: true,
    },

    // Maintenance Management
    // {
    //     path: MAINTENANCE_GROUP_MANAGEMENT_ROUTE,
    //     Component: MaintenanceGroupManagementView,
    //     isProtected: true,
    // },
    // {
    //     path: MAINTENANCE_TYPE_MANAGEMENT_ROUTE,
    //     Component: MaintenanceTypeManagementView,
    //     isProtected: true,
    // },
    // {
    //     path: MAINTENANCE_MANAGEMENT_ROUTE,
    //     Component: MaintenanceManagementView,
    //     isProtected: true,
    // },

    // Fallback 404 route - this is typically handled as a catch-all route at the end.
    { path: "*", Component: View404, isProtected: false }, // Can be protected or not based on context
];
