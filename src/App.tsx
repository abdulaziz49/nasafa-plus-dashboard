import {Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import CircleLoading from './components/loaders/circle_loading.tsx';
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
    USERS_GROUPS_MANAGEMENT_ROUTE,
    USERS_MANAGEMENT_ROUTE, USERS_PERMISSION_MANAGEMENT_ROUTE,
} from './routes/routes.ts';
import useLocalizeDocumentAttributes from './i18n/use_localize_document_attributes.ts';

import ViewTemplate from './components/templates/view_template.tsx';
import {ToastContainer} from "react-toastify/unstyled";
import ProtectedRouting from "./controllers/auth/protected_routing.ts";

// Load General Views
const DashboardView = lazy(() => import('./views/dashboard_view.tsx'));
const LoginView = lazy(() => import('./views/login_view.tsx'));

// Load User Management Views
const UserGroupManagementView = lazy(
    () => import('./views/users/user_group_management_view.tsx'),
);
const UserManagementView = lazy(
    () => import('./views/users/user_management_view.tsx'),
);
const UserPermissionManagementView = lazy(() => import( "./views/users/user_permssion_management_view.tsx"));

// Load Container Management Views
const ContainerGroupManagementView = lazy(
    () => import('./views/containers/container_group_management_view.tsx'),
);
const ContainerTypeManagementView = lazy(
    () => import('./views/containers/container_type_management_view.tsx'),
);
const ContainerManagementView = lazy(
    () => import('./views/containers/container_management_view.tsx'),
);

// Load Truck Management Views
const TruckGroupManagementView = lazy(() => import( "./views/trucks/truck_group_management_view.tsx"))
const TruckTypeManagementView = lazy(() => import( "./views/trucks/truck_type_management_view.tsx"))
const TruckManagementView = lazy(() => import('./views/trucks/truck_management_view.tsx'))

// Load Contract Management Views
const ContractGroupManagementView = lazy(() => import("./views/contracts/contract_group_management_view.tsx"))
const ContractTypeManagementView = lazy(() => import("./views/contracts/contract_type_management_view.tsx"))
const ContractManagementView = lazy(() => import("./views/contracts/contract_management_view.tsx"))

// Load Client Management Views
const ClientGroupManagementView = lazy(() => import("./views/clients/client_group_management_view.tsx"))
const ClientTypeManagementView = lazy(() => import("./views/clients/client_type_management_view.tsx"))
const ClientManagementView = lazy(() => import("./views/clients/client_management_view.tsx"))

// Load Maintenance Management Views
const MaintenanceGroupManagementView = lazy(() => import("./views/maintenance/maintenance_group_management_view.tsx"))
const MaintenanceTypeManagementView = lazy(() => import("./views/maintenance/maintenance_type_management_view.tsx"))
const MaintenanceManagementView = lazy(() => import("./views/maintenance/maintenance_management_view.tsx"))

// Load System Management Views
const SystemSettingsView = lazy(() => import('./views/system/system_settings_view.tsx'));
const UserSettingsView = lazy(() => import('./views/system/user_settings_view.tsx'));

// Load Notificatoins Views
const NotificationsView = lazy(() => import('./views/notifications_view.tsx'));

// Load Error Views
const View404 = lazy(() => import('./views/errors/view_404.tsx'));

function App() {
    useLocalizeDocumentAttributes();

    return (
        <ViewTemplate>
            <Suspense fallback={<CircleLoading/>}>
                <Routes>
                    {/* General Routes*/}
                    <Route path={LOGIN_ROUTE} index element={<LoginView/>}/>
                    <Route element={<ProtectedRouting/>}>

                        <Route path={DASHBOARD_ROUTE} element={<DashboardView/>}/>

                        {/* User Routes*/}
                        <Route
                            path={USERS_GROUPS_MANAGEMENT_ROUTE}
                            element={<UserGroupManagementView/>}
                        />
                        <Route
                            path={USERS_MANAGEMENT_ROUTE}
                            element={<UserManagementView/>}
                        />
                        <Route
                            path={USERS_PERMISSION_MANAGEMENT_ROUTE}
                            element={<UserPermissionManagementView/>}
                        />

                        {/* Container Routes*/}
                        <Route
                            path={CONTAINER_GROUP_MANAGEMENT_ROUTE}
                            element={<ContainerGroupManagementView/>}
                        />
                        <Route
                            path={CONTAINER_TYPE_MANAGEMENT_ROUTE}
                            element={<ContainerTypeManagementView/>}
                        />
                        <Route
                            path={CONTAINER_MANAGEMENT_ROUT}
                            element={<ContainerManagementView/>}
                        />

                        {/* Truck Routes*/}
                        <Route
                            path={TRUCK_GROUP_MANAGEMENT_ROUTE}
                            element={<TruckGroupManagementView/>}
                        />
                        <Route
                            path={TRUCK_TYPE_MANAGEMENT_ROUTE}
                            element={<TruckTypeManagementView/>}
                        />
                        <Route
                            path={TRUCK_MANAGEMENT_ROUTE}
                            element={<TruckManagementView/>}
                        />

                        {/* Client Routes*/}
                        <Route
                            path={CLIENT_GROUP_MANAGEMENT_ROUTE}
                            element={<ClientGroupManagementView/>}
                        />
                        <Route
                            path={CLIENT_TYPE_MANAGEMENT_ROUTE}
                            element={<ClientTypeManagementView/>}
                        />
                        <Route
                            path={CLIENT_MANAGEMENT_ROUTE}
                            element={<ClientManagementView/>}
                        />

                        {/* Contract Routes*/}
                        <Route
                            path={CONTRACT_GROUP_MANAGEMENT_ROUTE}
                            element={<ContractGroupManagementView/>}
                        />
                        <Route
                            path={CONTRACT_TYPE_MANAGEMENT_ROUTE}
                            element={<ContractTypeManagementView/>}
                        />
                        <Route
                            path={CONTRACT_MANAGEMENT_ROUTE}
                            element={<ContractManagementView/>}
                        />

                        {/* Maintenance Routes*/}
                        <Route
                            path={MAINTENANCE_GROUP_MANAGEMENT_ROUTE}
                            element={<MaintenanceGroupManagementView/>}
                        />
                        <Route
                            path={MAINTENANCE_TYPE_MANAGEMENT_ROUTE}
                            element={<MaintenanceTypeManagementView/>}
                        />
                        <Route
                            path={MAINTENANCE_MANAGEMENT_ROUTE}
                            element={<MaintenanceManagementView/>}
                        />

                        {/* System Management*/}
                        <Route
                            path={SYSTEM_SETTINGS_MANAGEMENT_ROUTE}
                            element={<SystemSettingsView/>}
                        />
                        <Route
                            path={USER_SETTINGS_MANAGEMENT_ROUTE}
                            element={<UserSettingsView/>}
                        />

                        {/* Notifications */}
                        <Route
                            path={NOTIFICATIONS_ROUTE}
                            element={<NotificationsView/>}
                        />

                        {/* Error Routes*/}
                        <Route path="*" element={<View404/>}/>
                    </Route>
                </Routes>
            </Suspense>
            <ToastContainer/>
        </ViewTemplate>
    );
}

export default App;
