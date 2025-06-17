import {Route, Routes} from "react-router-dom";
// import {LOGIN_ROUTE_PATH} from "./views/login_view.tsx";
// import {DASHBOARD_ROUTE_PATH} from "./views/dashboard_view.tsx";
import {lazy, Suspense} from "react";
import CircleLoading from "./components/loaders/circle_loading.tsx";

const DashboardView = lazy(() => import("./views/dashboard_view.tsx"))
const LoginView = lazy(() => import('./views/login_view.tsx'))

function App() {
    return (
        <>
            <Suspense fallback={<CircleLoading/>}>
                <Routes>
                    {/*<Route path={LOGIN_ROUTE_PATH} element={<LoginView/>}/>*/}
                    {/*<Route path={DASHBOARD_ROUTE_PATH} element={<DashboardView/>}/>*/}
                    <Route path='/' element={<LoginView/>}/>
                    <Route path='/dashboard' element={<DashboardView/>}/>
                </Routes>
            </Suspense>
        </>
    )
}

export default App
