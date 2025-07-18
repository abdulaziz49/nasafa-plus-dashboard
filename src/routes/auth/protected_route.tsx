// src/routes/auth/ProtectedRoute.tsx
import {type FC} from 'react';
import {Navigate, type RouteProps} from 'react-router-dom';
// import {useAppSelector} from '../../hooks/state_hooks.ts';
import {useAuthStore} from "../../states/stores/auth_store.ts";
import {useShallow} from "zustand/shallow";
import CircleLoading from "../../components/loaders/circle_loading.tsx"; // Use our typed useSelector

const ProtectedRoute: FC<RouteProps> = ({children}) => {
    // const {isAuthenticated, isLoading} = useAppSelector(({auth}) => auth);
    const {isAuthenticated, isAuthLoading} = useAuthStore(useShallow(state => ({
        isAuthenticated: state.isAuthenticated,
        isAuthLoading: state.isAuthLoading
    })));

    if (isAuthLoading)
        return <CircleLoading/>;

    if (!isAuthenticated)
        return <Navigate to="/" replace/>;

    return children // Render children if authenticated
};

export default ProtectedRoute;