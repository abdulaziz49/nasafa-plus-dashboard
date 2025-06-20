import {type PropsWithChildren, Suspense} from "react";
import Accordion from "../accordion.tsx";
import DrawerSkeleton from "../skeletons/drawer_skeleton.tsx";

const DrawerContainer = ({children}: PropsWithChildren) => {
    return (
        <>
            {/*<Suspense>*/}

            <div className="drawer-side lg:p-4 z-3">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className='bg-base-100 text-base-content h-full w-80 p-4 lg:rounded-xl overflow-y-auto'>
                    <div className="divider"></div>
                    <Suspense fallback={<DrawerSkeleton classes={''}/>}>
                        <Accordion title={'group 1'}>
                            <ul className="menu">
                                {/* Sidebar content here */}
                                {children}
                            </ul>
                        </Accordion><Accordion title={'group 1'}>
                        <ul className="menu">
                            {/* Sidebar content here */}
                            {children}
                        </ul>
                    </Accordion><Accordion title={'group 1'}>
                        <ul className="menu">
                            {/* Sidebar content here */}
                            {children}
                        </ul>
                    </Accordion><Accordion title={'group 1'}>
                        <ul className="menu">
                            {/* Sidebar content here */}
                            {children}
                        </ul>
                    </Accordion><Accordion title={'group 1'}>
                        <ul className="menu">
                            {/* Sidebar content here */}
                            {children}
                        </ul>
                    </Accordion><Accordion title={'group 1'}>
                        <ul className="menu">
                            {/* Sidebar content here */}
                            {children}
                        </ul>
                    </Accordion><Accordion title={'group 1'}>
                        <ul className="menu">
                            {/* Sidebar content here */}
                            {children}
                        </ul>
                    </Accordion><Accordion title={'group 1'}>
                        <ul className="menu">
                            {/* Sidebar content here */}
                            {children}
                        </ul>
                    </Accordion><Accordion title={'group 1'}>
                        <ul className="menu">
                            {/* Sidebar content here */}
                            {children}
                        </ul>
                    </Accordion>
                        <Accordion title={'group 1'}>
                            <ul className="menu">
                                {/* Sidebar content here */}
                                {children}
                            </ul>
                        </Accordion>
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default DrawerContainer