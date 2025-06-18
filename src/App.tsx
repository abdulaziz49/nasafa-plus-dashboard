import {Route, Routes} from "react-router-dom";
// import {LOGIN_ROUTE_PATH} from "./views/login_view.tsx";
// import {DASHBOARD_ROUTE_PATH} from "./views/dashboard_view.tsx";
import {lazy, Suspense} from "react";
import CircleLoading from "./components/loaders/circle_loading.tsx";
import {DASHBOARD_ROUTE, USERS_MANAGEMENT_ROUTE} from "./routes/routes.ts";
import ViewTemplate from "./components/view_template.tsx";
// import ViewTemplate from "./components/view_template.tsx";

const DashboardView = lazy(() => import("./views/dashboard_view.tsx"))
const LoginView = lazy(() => import('./views/login_view.tsx'))
const UserManagementView = lazy(() => import('./views/users/users_management_view.tsx'))

// const ViewTemplate = lazy(() => import('./components/view_template.tsx'))

function App() {
    return (
        <>
            <Suspense fallback={<CircleLoading/>}>
                <ViewTemplate>
                    <Routes>
                        {/*<Route path={LOGIN_ROUTE_PATH} element={<LoginView/>}/>*/}
                        {/*<Route path={DASHBOARD_ROUTE_PATH} element={<DashboardView/>}/>*/}
                        <Route index element={<LoginView/>}/>
                        <Route path={DASHBOARD_ROUTE} element={<DashboardView/>}/>
                        {/*<Route path={DASHBOARD_ROUTE} element={<ViewTemplate/>}>*/}
                        {/*</Route>*/}
                        <Route path={USERS_MANAGEMENT_ROUTE} element={<UserManagementView/>}/>
                    </Routes>
                </ViewTemplate>
            </Suspense>
        </>
    )
}

export default App
