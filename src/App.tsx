// import {Route, Routes} from 'react-router-dom';
// import {lazy, Suspense} from 'react';
// import CircleLoading from './components/loaders/circle_loading.tsx';
// import {
//     CLIENT_GROUP_MANAGEMENT_ROUTE,
//     CLIENT_MANAGEMENT_ROUTE, CLIENT_TYPE_MANAGEMENT_ROUTE,
//     CONTAINER_GROUP_MANAGEMENT_ROUTE,
//     CONTAINER_MANAGEMENT_ROUT, CONTAINER_TYPE_MANAGEMENT_ROUTE,
//     CONTRACT_GROUP_MANAGEMENT_ROUTE,
//     CONTRACT_MANAGEMENT_ROUTE, CONTRACT_TYPE_MANAGEMENT_ROUTE,
//     DASHBOARD_ROUTE,
//     LOGIN_ROUTE,
//     MAINTENANCE_GROUP_MANAGEMENT_ROUTE,
//     MAINTENANCE_MANAGEMENT_ROUTE, MAINTENANCE_TYPE_MANAGEMENT_ROUTE, NOTIFICATIONS_ROUTE,
//     SYSTEM_SETTINGS_MANAGEMENT_ROUTE,
//     TRUCK_GROUP_MANAGEMENT_ROUTE,
//     TRUCK_MANAGEMENT_ROUTE, TRUCK_TYPE_MANAGEMENT_ROUTE,
//     USER_SETTINGS_MANAGEMENT_ROUTE,
//     USERS_GROUPS_MANAGEMENT_ROUTE,
//     USERS_MANAGEMENT_ROUTE, USERS_PERMISSION_MANAGEMENT_ROUTE,
// } from './routes/routes_paths.ts';
// import useLocalizeDocumentAttributes from './i18n/use_localize_document_attributes.ts';
//
// import ViewTemplate from './components/templates/view_template.tsx';
// import ProtectedRoute from "./routes/auth/protected_route.tsx";
// // import ProtectedRoute from "./routes/auth/protected_route.tsx";
// // import {useDispatch, useSelector} from "react-redux";
// // import {fetchUser} from "./states/auth/auth_slice.ts";
//
// // Load General Views
// const DashboardView = lazy(() => import('./views/dashboard_view.tsx'));
// const LoginView = lazy(() => import('./views/login_view.tsx'));
//
// // Load User Management Views
// const UserGroupManagementView = lazy(
//     () => import('./views/users/user_role_management_view.tsx'),
// );
// const UserManagementView = lazy(
//     () => import('./views/users/user_management_view.tsx'),
// );
// const UserPermissionManagementView = lazy(() => import( "./views/users/user_permission_management_view.tsx"));
//
// // Load Container Management Views
// const ContainerGroupManagementView = lazy(
//     () => import('./views/containers/container_group_management_view.tsx'),
// );
// const ContainerTypeManagementView = lazy(
//     () => import('./views/containers/container_type_management_view.tsx'),
// );
// const ContainerManagementView = lazy(
//     () => import('./views/containers/container_management_view.tsx'),
// );
//
// // Load Truck Management Views
// const TruckGroupManagementView = lazy(() => import( "./views/trucks/truck_group_management_view.tsx"))
// const TruckTypeManagementView = lazy(() => import( "./views/trucks/truck_type_management_view.tsx"))
// const TruckManagementView = lazy(() => import('./views/trucks/truck_management_view.tsx'))
//
// // Load Contract Management Views
// const ContractGroupManagementView = lazy(() => import("./views/contracts/contract_group_management_view.tsx"))
// const ContractTypeManagementView = lazy(() => import("./views/contracts/contract_type_management_view.tsx"))
// const ContractManagementView = lazy(() => import("./views/contracts/contract_management_view.tsx"))
//
// // Load Client Management Views
// const ClientGroupManagementView = lazy(() => import("./views/clients/client_group_management_view.tsx"))
// const ClientTypeManagementView = lazy(() => import("./views/clients/client_type_management_view.tsx"))
// const ClientManagementView = lazy(() => import("./views/clients/client_management_view.tsx"))
//
// // Load Maintenance Management Views
// const MaintenanceGroupManagementView = lazy(() => import("./views/maintenance/maintenance_group_management_view.tsx"))
// const MaintenanceTypeManagementView = lazy(() => import("./views/maintenance/maintenance_type_management_view.tsx"))
// const MaintenanceManagementView = lazy(() => import("./views/maintenance/maintenance_management_view.tsx"))
//
// // Load System Management Views
// const SystemSettingsView = lazy(() => import('./views/system/system_settings_view.tsx'));
// const UserSettingsView = lazy(() => import('./views/system/user_settings_view.tsx'));
//
// // Load Notificatoins Views
// const NotificationsView = lazy(() => import('./views/notifications_view.tsx'));
//
// // Load Error Views
// const View404 = lazy(() => import('./views/errors/view_404.tsx'));
//
// function App() {
//     useLocalizeDocumentAttributes();
//
//     // const dispatch = useDispatch();
//     // const {isAuthenticated, isLoading} = useSelector((state) => state.auth);
//
//     // Attempt to fetch user on initial app load to check existing session
//     // useEffect(() => {
//     //     // dispatch(fetchUser());
//     // }, [dispatch]);
//
//     // Simple PrivateRoute component
//     // const PrivateRoute = ({children}) => {
//     //     if (isLoading) {
//     //         return <div>Loading...</div>; // Or a spinner
//     //     }
//     //     return isAuthenticated ? children : <Navigate to="/login"/>;
//     // };
//
//     return (
//         <ViewTemplate>
//             <Suspense fallback={<CircleLoading/>}>
//                 <Routes>
//                     {/* General Routes*/}
//                     <Route path={LOGIN_ROUTE} index element={<LoginView/>}/>
//                     {/*<ProtectedRoute>*/}
//                     {/*<Route element={<ProtectedRoute><ProtectedRoute>}>*/}
//                     <Route path={DASHBOARD_ROUTE} element={<ProtectedRoute><DashboardView/></ProtectedRoute>}/>
//
//                     {/* User Routes*/}
//                     <Route
//                         path={USERS_GROUPS_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><UserGroupManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={USERS_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><UserManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={USERS_PERMISSION_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><UserPermissionManagementView/></ProtectedRoute>}
//                     />
//
//                     {/* Container Routes*/}
//                     <Route
//                         path={CONTAINER_GROUP_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><ContainerGroupManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={CONTAINER_TYPE_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><ContainerTypeManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={CONTAINER_MANAGEMENT_ROUT}
//                         element={<ProtectedRoute><ContainerManagementView/></ProtectedRoute>}
//                     />
//
//                     {/* Truck Routes*/}
//                     <Route
//                         path={TRUCK_GROUP_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><TruckGroupManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={TRUCK_TYPE_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><TruckTypeManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={TRUCK_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><TruckManagementView/></ProtectedRoute>}
//                     />
//
//                     {/* Client Routes*/}
//                     <Route
//                         path={CLIENT_GROUP_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><ClientGroupManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={CLIENT_TYPE_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><ClientTypeManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={CLIENT_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><ClientManagementView/></ProtectedRoute>}
//                     />
//
//                     {/* Contract Routes*/}
//                     <Route
//                         path={CONTRACT_GROUP_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><ContractGroupManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={CONTRACT_TYPE_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><ContractTypeManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={CONTRACT_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><ContractManagementView/></ProtectedRoute>}
//                     />
//
//                     {/* Maintenance Routes*/}
//                     <Route
//                         path={MAINTENANCE_GROUP_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><MaintenanceGroupManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={MAINTENANCE_TYPE_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><MaintenanceTypeManagementView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={MAINTENANCE_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><MaintenanceManagementView/></ProtectedRoute>}
//                     />
//
//                     {/* System Management*/}
//                     <Route
//                         path={SYSTEM_SETTINGS_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><SystemSettingsView/></ProtectedRoute>}
//                     />
//                     <Route
//                         path={USER_SETTINGS_MANAGEMENT_ROUTE}
//                         element={<ProtectedRoute><UserSettingsView/></ProtectedRoute>}
//                     />
//
//                     {/* Notifications */}
//                     <Route
//                         path={NOTIFICATIONS_ROUTE}
//                         element={<ProtectedRoute><NotificationsView/></ProtectedRoute>}
//                     />
//
//                     {/* Error Routes*/}
//                     <Route path="*" element={<ProtectedRoute><View404/></ProtectedRoute>}/>
//                     {/*</Route>*/}
//                 </Routes>
//             </Suspense>
//         </ViewTemplate>
//     );
// }
//
// export default App;

// src/App.tsx
import {Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import CircleLoading from './components/loaders/circle_loading.tsx';
import useLocalizeDocumentAttributes from './i18n/use_localize_document_attributes.ts';

import ViewTemplate from './components/templates/view_template.tsx';
import ProtectedRoute from "./routes/auth/protected_route.tsx";
// import { useAuthStore } from "./states/auth/auth_store.ts";
// import { emptyUser } from "./models/users/users_models.ts"; // Import emptyUser

// Import your centralized route configuration
import {appRoutes} from './routes/app_routes.ts';

// Import the 404 View (since it's a special case, keep it here or handle in config)
import View404 from './views/errors/view_404.tsx'; // Keep 404 import here if not in centralized config

function App() {
    useLocalizeDocumentAttributes();

    // Get the initial token and fetchUser action from the store
    // const { fetchUser, token } = useAuthStore.getState();

    // useEffect(() => {
    //     // This effect runs only once after the initial render to perform auth check
    //     if (token) {
    //         fetchUser(); // Attempt to fetch user to validate token
    //     } else {
    //         // If no token, then there's no session to check.
    //         // Set isLoading to false immediately as there's nothing to load for auth.
    //         useAuthStore.setState({ isLoading: false, isAuthenticated: false, user: emptyUser });
    //     }
    // }, [fetchUser, token]);

    // Filter routes based on protection status
    const publicRoutes = appRoutes.filter(route => !route.isProtected);
    const protectedRoutes = appRoutes.filter(route => route.isProtected);

    return (
        <ViewTemplate>
            <Suspense fallback={<CircleLoading/>}>
                <Routes>
                    {/* Protected Routes (nested under ProtectedRoute) */}
                    {/*<Route element={<ProtectedRoute/>}>*/}
                    {protectedRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<ProtectedRoute>
                                <route.component/>
                            </ProtectedRoute>} // Render the component from the config
                        />
                    ))}
                    {/*</Route>*/}

                    {/* Public Routes */}
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component/>} // Render the component from the config
                        />
                    ))}
                </Routes>
            </Suspense>
        </ViewTemplate>
    );
}

export default App;