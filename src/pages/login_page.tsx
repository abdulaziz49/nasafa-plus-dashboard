// import LoginView from "./views/login_view.tsx";
// import LoginView from "./views/login_view.tsx";

import LoginView from "../views/login_view.tsx";

export default class LoginPage {
    static routePathString:string ='/'
    static pageView = ()=> {
        return <LoginView />;
    }
}