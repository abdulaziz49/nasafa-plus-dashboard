// src/App.tsx

import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import { type AppRouteConfig, appRoutes } from "./routes/app_routes.ts";
import useUserSettingsStore from "./states/stores/user_settings_store.ts";
import ProtectedRoute from "./routes/auth/protected_route.tsx";
import CircleLoading from "./components/loaders/circle_loading.tsx";
import DrawerButtonSkeleton from "./components/skeletons/drawer_button_skeleton.tsx";
import DrawerContainer from "./components/drawer/drawer_container.tsx";
import { useAuthStore } from "./states/stores/auth_store.ts";
import DrawerButton from "./components/menu/drawer_button.tsx";

/**
 * App is the root component of the application.
 *
 * - Handles route rendering using a centralized route configuration.
 * - Separates protected and public routes for cleaner access control.
 * - Integrates global UI elements such as the navigation drawer and toast notifications.
 * - Applies user settings (RTL, dark mode) to the UI.
 * - Uses Suspense for lazy-loaded components and skeletons for improved UX.
 */
function App() {
    // Get user settings and authentication state from stores
    const { isRTL, isDark } = useUserSettingsStore();
    const { isAuthenticated, isAuthLoading } = useAuthStore();

    // Split routes into protected and public for rendering
    const publicRoutes = appRoutes.filter((route) => !route.isProtected);
    const protectedRoutes = appRoutes.filter((route) => route.isProtected);

    return (
        <div className="drawer lg:drawer-open bg-base-200 w-dvw h-dvh">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center w-auto h-dvh m-0 p-0">
                {/* Show drawer button only when authenticated and not loading */}
                {isAuthenticated && !isAuthLoading && (
                    <Suspense fallback={<DrawerButtonSkeleton />}>
                        <DrawerButton />
                    </Suspense>
                )}

                {/* Main page content and routes */}
                <div className="h-dvh w-dvw flex flex-col items-center justify-center overflow-none p-2.5 lg:py-4 space-y-2">
                    <Suspense fallback={<CircleLoading />}>
                        <Routes>
                            {/* Protected routes require authentication */}
                            {protectedRoutes.map(
                                ({ path, Component }: AppRouteConfig) => (
                                    <Route
                                        key={path}
                                        path={path}
                                        element={
                                            <ProtectedRoute>
                                                <Component />
                                            </ProtectedRoute>
                                        }
                                    />
                                )
                            )}

                            {/* Public routes accessible without authentication */}
                            {publicRoutes.map(({ path, Component }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<Component />}
                                />
                            ))}
                        </Routes>
                    </Suspense>
                    <ToastContainer
                        rtl={isRTL}
                        theme={isDark ? "dark" : "light"}
                        position={isRTL ? "top-left" : "top-right"}
                        newestOnTop={true}
                    />
                </div>
            </div>
            {/* Show navigation drawer only when authenticated and not loading */}
            {isAuthenticated && !isAuthLoading && <DrawerContainer />}
        </div>
    );
}

export default App;
