import {useOutlet} from 'react-router-dom';
import type {ReactNode} from "react";

// import { useAuth } from './hooks/use_auth'; // Assuming you have an auth hook

// export default function ProtectedRouting({allowedRoles}) {
export default function ProtectedRouting(): ReactNode {
    // const { isAuthenticated, userRoles } = useAuth(); // Get auth status and roles
    // const navigate = useNavigate()
    const outlet = useOutlet()

    // if (!isAuthenticated) {
    // if (!true) {
    //     // return < to= "/login"
    //     // replace / >;
    //     navigate('/login', {
    //         replace: true,
    //     })
    // }

    // if (allowedRoles && !allowedRoles.some(role => userRoles.includes(role))) {
    // if (!true) {
    //     return navigate("/unauthorized", {
    //         replace: true
    //     }) // Or render an UnauthorizedView
    // }

    console.log("protected")
    return outlet;
}