import {type PropsWithChildren, Suspense} from "react";
import Accordion from "../accordion.tsx";
import DrawerSkeleton from "../skeletons/drawer_skeleton.tsx";
// import RoutesSchema from "../../controllers/schema/routes_schema.ts";

const DrawerContainer = ({children}: PropsWithChildren) => {
    return (
        <>
            {/*<Suspense>*/}

            <div className="drawer-side lg:p-4 z-3">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className='bg-base-100 text-base-content h-full w-80 p-4 lg:rounded-xl overflow-y-auto'>
                    <div className="divider"></div>
                    <Suspense fallback={<DrawerSkeleton classes={''}/>}>
                    {/* {RoutesSchema.map((route, index) => (
                        if (route.key === 'childs') return null; // Skip if 'childs' key is present
                        <Accordion key={index} title={route.routeName}>
                            <ul className="menu">
                                {route.childs?.map((child, childIndex) => (
                                    <li key={childIndex}>
                                        <a href={child.routeURL}>{child.routeName}</a>
                                    </li>
                                ))}
                            </ul>
                            ))

                    } */}
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
