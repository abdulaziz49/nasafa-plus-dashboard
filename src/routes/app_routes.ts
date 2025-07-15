// src/routes/app_routes_config.ts
import {lazy, type LazyExoticComponent, type JSX, type ComponentType} from 'react';

// Import all your route path constants
import {
    CLIENT_GROUP_MANAGEMENT_ROUTE,
    CLIENT_MANAGEMENT_ROUTE, CLIENT_TYPE_MANAGEMENT_ROUTE,
    CONTAINER_GROUP_MANAGEMENT_ROUTE,
    CONTAINER_MANAGEMENT_ROUT, CONTAINER_TYPE_MANAGEMENT_ROUTE,
    CONTRACT_GROUP_MANAGEMENT_ROUTE,
    CONTRACT_MANAGEMENT_ROUTE, CONTRACT_TYPE_MANAGEMENT_ROUTE,
    DASHBOARD_ROUTE,
    LOGIN_ROUTE,
    MAINTENANCE_GROUP_MANAGEMENT_ROUTE,
    MAINTENANCE_MANAGEMENT_ROUTE, MAINTENANCE_TYPE_MANAGEMENT_ROUTE, NOTIFICATIONS_ROUTE,
    SYSTEM_SETTINGS_MANAGEMENT_ROUTE,
    TRUCK_GROUP_MANAGEMENT_ROUTE,
    TRUCK_MANAGEMENT_ROUTE, TRUCK_TYPE_MANAGEMENT_ROUTE,
    USER_SETTINGS_MANAGEMENT_ROUTE,
    USER_ROLE_MANAGEMENT_ROUTE,
    USER_MANAGEMENT_ROUTE, USER_PERMISSION_MANAGEMENT_ROUTE,
} from './routes_paths.ts';

// Define a type for a single route configuration
interface AppRouteConfig {
    path: string;
    // Use ComponentType<any> for lazily loaded components
    // as their exact prop types are not known at this point.
    // Or you can define a more specific type if all views share common props.
    component: ComponentType<LazyExoticComponent<() => JSX.Element>>;
    isProtected: boolean;
    // Add other properties like 'requiredRole' or 'permissions' if you implement RBAC/PBAC
    // requiredRole?: 'admin' | 'user' | 'editor';
}

// -----------------------------------------------------------
// Lazily loaded components (moved from App.tsx)
// -----------------------------------------------------------

// General Views
const DashboardView = lazy(() => import('../views/dashboard_view.tsx'));
const LoginView = lazy(() => import('../views/login_view.tsx'));

// User Management Views
const UserRoleManagementView = lazy(() => import('../views/users/user_role_management_view.tsx'));
const UserManagementView = lazy(() => import('../views/users/user_management_view.tsx'));
const UserPermissionManagementView = lazy(() => import("../views/users/user_permission_management_view.tsx"));

// Container Management Views
const ContainerGroupManagementView = lazy(() => import('../views/containers/container_group_management_view.tsx'));
const ContainerTypeManagementView = lazy(() => import('../views/containers/container_type_management_view.tsx'));
const ContainerManagementView = lazy(() => import('../views/containers/container_management_view.tsx'));

// Truck Management Views
const TruckGroupManagementView = lazy(() => import("../views/trucks/truck_group_management_view.tsx"));
const TruckTypeManagementView = lazy(() => import("../views/trucks/truck_type_management_view.tsx"));
const TruckManagementView = lazy(() => import('../views/trucks/truck_management_view.tsx'));

// Contract Management Views
const ContractGroupManagementView = lazy(() => import("../views/contracts/contract_group_management_view.tsx"));
const ContractTypeManagementView = lazy(() => import("../views/contracts/contract_type_management_view.tsx"));
const ContractManagementView = lazy(() => import("../views/contracts/contract_management_view.tsx"));

// Client Management Views
const ClientGroupManagementView = lazy(() => import("../views/clients/client_group_management_view.tsx"));
const ClientTypeManagementView = lazy(() => import("../views/clients/client_type_management_view.tsx"));
const ClientManagementView = lazy(() => import("../views/clients/client_management_view.tsx"));

// Maintenance Management Views
const MaintenanceGroupManagementView = lazy(() => import("../views/maintenance/maintenance_group_management_view.tsx"));
const MaintenanceTypeManagementView = lazy(() => import("../views/maintenance/maintenance_type_management_view.tsx"));
const MaintenanceManagementView = lazy(() => import("../views/maintenance/maintenance_management_view.tsx"));

// System Management Views
const SystemSettingsView = lazy(() => import('../views/system/system_settings_view.tsx'));
const UserSettingsView = lazy(() => import('../views/system/user_settings_view.tsx'));

// Notifications Views
const NotificationsView = lazy(() => import('../views/notifications_view.tsx'));

// Error Views (note: the 404 for protected routes will be handled within the ProtectedRoute section in App.tsx)
const View404 = lazy(() => import('../views/errors/view_404.tsx'));


// -----------------------------------------------------------
// Array of all route configurations
// -----------------------------------------------------------
export const appRoutes: AppRouteConfig[] = [
    // Public Routes
    {path: LOGIN_ROUTE, component: LoginView, isProtected: false},

    // Protected Routes
    {path: DASHBOARD_ROUTE, component: DashboardView, isProtected: true},

    // User Management
    {path: USER_ROLE_MANAGEMENT_ROUTE, component: UserRoleManagementView, isProtected: true},
    {path: USER_MANAGEMENT_ROUTE, component: UserManagementView, isProtected: true},
    {path: USER_PERMISSION_MANAGEMENT_ROUTE, component: UserPermissionManagementView, isProtected: true},

    // Container Management
    {path: CONTAINER_GROUP_MANAGEMENT_ROUTE, component: ContainerGroupManagementView, isProtected: true},
    {path: CONTAINER_TYPE_MANAGEMENT_ROUTE, component: ContainerTypeManagementView, isProtected: true},
    {path: CONTAINER_MANAGEMENT_ROUT, component: ContainerManagementView, isProtected: true},

    // Truck Management
    {path: TRUCK_GROUP_MANAGEMENT_ROUTE, component: TruckGroupManagementView, isProtected: true},
    {path: TRUCK_TYPE_MANAGEMENT_ROUTE, component: TruckTypeManagementView, isProtected: true},
    {path: TRUCK_MANAGEMENT_ROUTE, component: TruckManagementView, isProtected: true},

    // Client Management
    {path: CLIENT_GROUP_MANAGEMENT_ROUTE, component: ClientGroupManagementView, isProtected: true},
    {path: CLIENT_TYPE_MANAGEMENT_ROUTE, component: ClientTypeManagementView, isProtected: true},
    {path: CLIENT_MANAGEMENT_ROUTE, component: ClientManagementView, isProtected: true},

    // Contract Management
    {path: CONTRACT_GROUP_MANAGEMENT_ROUTE, component: ContractGroupManagementView, isProtected: true},
    {path: CONTRACT_TYPE_MANAGEMENT_ROUTE, component: ContractTypeManagementView, isProtected: true},
    {path: CONTRACT_MANAGEMENT_ROUTE, component: ContractManagementView, isProtected: true},

    // Maintenance Management
    {path: MAINTENANCE_GROUP_MANAGEMENT_ROUTE, component: MaintenanceGroupManagementView, isProtected: true},
    {path: MAINTENANCE_TYPE_MANAGEMENT_ROUTE, component: MaintenanceTypeManagementView, isProtected: true},
    {path: MAINTENANCE_MANAGEMENT_ROUTE, component: MaintenanceManagementView, isProtected: true},

    // System Management
    {path: SYSTEM_SETTINGS_MANAGEMENT_ROUTE, component: SystemSettingsView, isProtected: true},
    {path: USER_SETTINGS_MANAGEMENT_ROUTE, component: UserSettingsView, isProtected: true},

    // Notifications
    {path: NOTIFICATIONS_ROUTE, component: NotificationsView, isProtected: true},

    // Fallback 404 route - this is typically handled as a catch-all route at the end.
    {path: '*', component: View404, isProtected: false}, // Can be protected or not based on context
];