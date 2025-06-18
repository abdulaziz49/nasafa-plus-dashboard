// import LoginView from "./views/login_view.tsx";
// import LoginView from "./views/login_view.tsx";

import DashboardView from "../views/login_view.tsx";

export default class DashboardPage {
    static routePathString:string ='/dashboard'
    static pageView = ()=> {
        return <DashboardView />;
    }
}