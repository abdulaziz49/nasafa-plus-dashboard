// src/routes/auth/ProtectedRoute.tsx
import {type FC} from 'react';
import {Navigate, type RouteProps, useLocation} from 'react-router-dom';
// import {useAppSelector} from '../../hooks/state_hooks.ts';
import {useAuthStore} from "../../states/stores/auth_store.ts";
import {useShallow} from "zustand/shallow"; // Use our typed useSelector

const ProtectedRoute: FC<RouteProps> = ({children}) => {
    // const {isAuthenticated, isLoading} = useAppSelector(({auth}) => auth);
    const {isAuthenticated, isLoading} = useAuthStore(useShallow(state => ({
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading
    })));
    const location = useLocation();

    if (useAuthStore.getState().isLoading) {
        console.warn(`isloading: ${isLoading}`)
        return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <p>Loading application...</p>
        </div>;
    }

    if (useAuthStore.getState().isAuthenticated) {
        return <>{children}</>; // Render children if authenticated
    }

    console.warn(`is_auth: ${isAuthenticated}`)
    return <Navigate to="/" state={{from: location}} replace/>;
};

export default ProtectedRoute;