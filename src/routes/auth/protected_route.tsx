// src/components/ProtectedRoute.tsx
import React, {type ReactNode} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useAppSelector} from '../hooks/state_hooks.ts'; // Use our typed useSelector

interface ProtectedRouteProps {
    children: ReactNode;
    adminOnly?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children, adminOnly = false}) => {
    const {isAuthenticated, isLoading, user} = useAppSelector((state) => state.auth);
    const location = useLocation();

    if (isLoading) {
        return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <p>Loading application...</p>
        </div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    // Optional: Admin-only check
    // Ensure your User type in authSlice.ts has 'isAdmin'
    if (adminOnly && (!user || !user.isAdmin)) {
        return <Navigate to="/dashboard" replace/>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;