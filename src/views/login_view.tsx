import {type NavigateFunction, useNavigate} from "react-router-dom";
// import {DASHBOARD_ROUTE_PATH} from "./dashboard_view.tsx";
// import DashboardPage from "../pages/dashboard_page.tsx";
// import DashboardPage from "../pages/dashboard_page.tsx";
// import loginImage from '../assets/img/login-background.jpg'
import loginImage from '../assets/svg/login-2.svg'
export const LOGIN_ROUTE_PATH: string = '/'
const LoginView = () => {

    const navigate: NavigateFunction = useNavigate();
    return (
        <div className="herobg-base-200 h-screen w-screen stack">
            <div className="hero-content flex-col lg:flex-row">
                {/*<div className="text-center lg:text-left">*/}
                {/*    <p className="py-6">*/}
                {/*        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem*/}
                {/*        quasi. In deleniti eaque aut repudiandae et a id nisi.*/}
                {/*    </p>*/}
                {/*</div>*/}
                <div className="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className='card-title flex justify-center'>
                            {/*Login now!*/}
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="divider"></div>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input lg:w-auto" placeholder="Email"/>
                            <label className="label">Password</label>
                            <input type="password" className="input lg:w-auto" placeholder="Password"/>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            {/*<button className="btn btn-neutral mt-4" onClick={()=>{navigate(DASHBOARD_ROUTE_PATH)}}>Login</button>*/}
                            <button className="btn btn-neutral mt-4" onClick={() => {
                                navigate('/dashboard')
                            }}>Login
                            </button>
                        </fieldset>
                    </div>
                </div>
            </div>
            {/*<img src={loginImage} className='max-h-full w-screen object-cover'/>*/}
            <img src={loginImage} className='max-h-full w-screen object-cover object-right lg:object-none blur'/>
        </div>
    )
}

export default LoginView