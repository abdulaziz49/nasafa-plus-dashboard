import {lazy, type PropsWithChildren, Suspense} from 'react';

import getBrowserPageRoute from '../../controllers/utils/get_browser_page_route.ts';
import DrawerButtonSkeleton from '../skeletons/drawer_button_skeleton.tsx';

const DrawerButton = lazy(() => import('../menu/drawer_button.tsx')); // Import useLocation

// Lazily load DrawerContainer
const DrawerSkeleton = lazy(() => import('../skeletons/drawer_skeleton.tsx'));
const LazyDrawerContainer = lazy(
    () => import('../drawer/drawer_container.tsx'),
);

const ViewTemplate = ({children}: PropsWithChildren) => {
    const isRootRoute = getBrowserPageRoute('/');

    return (
        <>
            <div className="drawer lg:drawer-open bg-base-200">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center w-auto h-dvh m-0 p-0">
                    {/* Conditionally render DrawerContainer */}
                    {!isRootRoute && (
                        <Suspense fallback={<DrawerButtonSkeleton/>}>
                            <DrawerButton/>
                        </Suspense>
                    )}

                    {/* Page content here */}
                    <div
                        className="h-dvh w-full flex flex-col items-center justify-center overflow-none p-2.5 lg:py-4 space-y-2">
                        {children}
                    </div>
                    <div className="fixed bottom-2 text-black ">Nasafa Plus</div>
                </div>
                {/* Conditionally render and lazy-load DrawerContainer */}
                {!isRootRoute && (
                    <Suspense
                        fallback={
                            <DrawerSkeleton classes={'w-full h-screen'}/>
                        }
                    >
                        {' '}
                        {/* Provide a fallback UI */}
                        <LazyDrawerContainer/>
                    </Suspense>
                )}
            </div>
        </>
    );
};

export default ViewTemplate;