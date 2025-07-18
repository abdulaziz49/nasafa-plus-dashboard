import {lazy, type PropsWithChildren, Suspense} from 'react';

// import getBrowserPageRoute from '../../utils/get_browser_page_route.ts';
import DrawerButtonSkeleton from '../skeletons/drawer_button_skeleton.tsx';
// import {useNavigate} from "react-router-dom";
// import {useAppDispatch, useAppSelector} from "../../hooks/state_hooks.ts";
// import {clearAuth} from "../../states/auth/auth_slice.ts";

const DrawerButton = lazy(() => import('../menu/drawer_button.tsx')); // Import useLocation

// Lazily load DrawerContainer
// const DrawerSkeleton = lazy(() => import('../skeletons/drawer_skeleton.tsx'));
// const LazyDrawerContainer = lazy(
//     () => import('../drawer/drawer_container.tsx'),
// );

import DrawerContainer from "../drawer/drawer_container.tsx";
import {useAuthStore} from "../../states/stores/auth_store.ts";
// import {useNavigate} from "react-router-dom";
// import CircleLoading from "../loaders/circle_loading.tsx";

const ViewTemplate = ({children}: PropsWithChildren) => {
    // const isRootRoute = getBrowserPageRoute('/');
    // const navigate = useNavigate()
    const {isAuthenticated, isAuthLoading} = useAuthStore()
    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         navigate('/', {replace: true})
    //     }
    // }, [isAuthenticated])

    return (
        <div className="drawer lg:drawer-open bg-base-200">
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className="drawer-content flex flex-col items-center justify-center w-auto h-dvh m-0 p-0">
                {/* Conditionally render DrawerContainer */}
                {(isAuthenticated && !isAuthLoading) && (
                    <Suspense fallback={<DrawerButtonSkeleton/>}>
                        <DrawerButton/>
                    </Suspense>
                )}

                {/* Page content here */}
                <div
                    className="h-dvh w-full flex flex-col items-center justify-center overflow-none p-2.5 lg:py-4 space-y-2">
                    {/*<Suspense fallback={<CircleLoading/>}>*/}
                    {children}
                    {/*</Suspense>*/}
                </div>
                {/*<div className="fixed bottom-2 text-black ">Nasafa Plus</div>*/}
            </div>
            {/* Conditionally render and lazy-load DrawerContainer */}
            {(isAuthenticated && !isAuthLoading) && (
                // <Suspense
                //     fallback={
                //         <DrawerSkeleton classes={'w-full h-screen'}/>
                //     }
                // >
                //     {' '}
                //      Provide a fallback UI
                //     <LazyDrawerContainer/>
                <DrawerContainer/>
                // </Suspense>
            )}
        </div>
    );
};

export default ViewTemplate;