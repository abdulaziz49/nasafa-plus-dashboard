import {Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import CircleLoading from './components/loaders/circle_loading.tsx';
import {
    CLIENT_GROUP_MANAGEMENT_ROUTE, CLIENT_MANAGEMENT_ROUTE,
    CONTAINER_GROUP_MANAGEMENT_ROUTE,
    CONTAINER_MANAGEMENT_ROUT, CONTRACT_GROUP_MANAGEMENT_ROUTE, CONTRACT_MANAGEMENT_ROUTE,
    DASHBOARD_ROUTE, LOGIN_ROUTE, MAINTENANCE_GROUP_MANAGEMENT_ROUTE, MAINTENANCE_MANAGEMENT_ROUTE,
    SETTINGS_MANAGEMENT_ROUTE, TRUCK_GROUP_MANAGEMENT_ROUTE, TRUCK_MANAGEMENT_ROUTE,
    USERS_GROUPS_MANAGEMENT_ROUTE,
    USERS_MANAGEMENT_ROUTE,
} from './routes/routes.ts';
import useLocalizeDocumentAttributes from './i18n/use_localize_document_attributes.ts';

const DashboardView = lazy(() => import('./views/dashboard_view.tsx'));
const LoginView = lazy(() => import('./views/login_view.tsx'));
const UserManagementView = lazy(
    () => import('./views/users/user_management_view.tsx'),
);
// const ViewTemplate = lazy(() => import('./components/templates/view_template.tsx'))
const UserGroupManagementView = lazy(
    () => import('./views/users/user_group_management_view.tsx'),
);
const ContainerManagementView = lazy(
    () => import('./views/containers/container_management_view.tsx'),
);

const ContainerGroupManagementView = lazy(
    () => import('./views/containers/container_group_management_view.tsx'),
);
const View404 = lazy(() => import('./views/errors/view_404.tsx'));
const SettingsView = lazy(() => import('./views/settings_view.tsx'));
import ViewTemplate from './components/templates/view_template.tsx';

// Load Truck Management Views
const TruckGroupManagementView = lazy(() => import( "./views/trucks/truck_group_management_view.tsx"))
const TruckManagementView = lazy(()=>import('./views/trucks/truck_management_view.tsx'))

// Load Maintenance Management Views
const MaintenanceGroupManagementView = lazy(()=>import("./views/maintenance/maintenance_group_management_view.tsx"))
const MaintenanceManagementView = lazy(()=>import("./views/maintenance/maintenance_management_view.tsx"))

// Load Contract Management Views
const ContractGroupManagementView = lazy(()=>import("./views/contracts/contract_group_management_view.tsx"))
const ContractManagementView = lazy(()=>import("./views/contracts/contract_management_view.tsx"))

// Load Client Management Views
const ClientGroupManagementView = lazy(()=>import("./views/clients/client_group_management_view.tsx"))
const ClientManagementView = lazy(()=>import("./views/clients/client_management_view.tsx"))

function App() {
    useLocalizeDocumentAttributes();

    return (
        <ViewTemplate>
            <Suspense fallback={<CircleLoading/>}>
                <Routes>
                    {/* General Routes*/}
                    <Route path={LOGIN_ROUTE} index element={<LoginView/>}/>
                    <Route path={DASHBOARD_ROUTE} element={<DashboardView/>}/>
                    <Route
                        path={SETTINGS_MANAGEMENT_ROUTE}
                        element={<SettingsView/>}
                    />

                    {/* User Routes*/}
                    <Route
                        path={USERS_MANAGEMENT_ROUTE}
                        element={<UserManagementView/>}
                    />
                    <Route
                        path={USERS_GROUPS_MANAGEMENT_ROUTE}
                        element={<UserGroupManagementView/>}
                    />

                    {/* Container Routes*/}
                    <Route
                        path={CONTAINER_GROUP_MANAGEMENT_ROUTE}
                        element={<ContainerGroupManagementView/>}
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
                        path={TRUCK_MANAGEMENT_ROUTE}
                        element={<TruckManagementView/>}
                    />


                    {/* Maintenance Routes*/}
                    <Route
                        path={MAINTENANCE_GROUP_MANAGEMENT_ROUTE}
                        element={<MaintenanceGroupManagementView/>}
                    />
                    <Route
                        path={MAINTENANCE_MANAGEMENT_ROUTE}
                        element={<MaintenanceManagementView/>}
                    />


                    {/* Contract Routes*/}
                    <Route
                        path={CONTRACT_GROUP_MANAGEMENT_ROUTE}
                        element={<ContractGroupManagementView/>}
                    />
                    <Route
                        path={CONTRACT_MANAGEMENT_ROUTE}
                        element={<ContractManagementView/>}
                    />


                    {/* Client Routes*/}
                    <Route
                        path={CLIENT_GROUP_MANAGEMENT_ROUTE}
                        element={<ClientGroupManagementView/>}
                    />
                    <Route
                        path={CLIENT_MANAGEMENT_ROUTE}
                        element={<ClientManagementView/>}
                    />

                    {/* Error Routes*/}
                    <Route path="*" element={<View404/>}/>
                </Routes>
            </Suspense>
        </ViewTemplate>
    );
}

export default App;
