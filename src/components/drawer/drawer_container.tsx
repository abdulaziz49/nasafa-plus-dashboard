import Accordion from "../accordion.tsx";
import DrawerSkeleton from "../skeletons/drawer_skeleton.tsx";
import RoutesSchema from "../../controllers/schema/routes_schema.tsx";
import {Link} from "react-router-dom";
import {Suspense} from "react";
import {useTranslation} from "react-i18next";

const DrawerContainer = () => {
    const {t} = useTranslation('drawer')
    return (
        <>
            {/*<Suspense>*/}

            <div className="drawer-side lg:p-4 z-3">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className='bg-base-100 text-base-content h-full w-80 p-4 lg:rounded-xl overflow-y-auto'>
                    <div className="divider"></div>
                    <ul className="menu w-full"><Suspense fallback={<DrawerSkeleton classes={''}/>}>
                        {
                            RoutesSchema.map((route, index) => {
                                if (!route.hasOwnProperty!('childs')) return (
                                    <li key={index}>
                                        <Link to={route.routeURL!}>{route.routeIcon} {t(route.routeName!)}</Link>
                                    </li>
                                ); // Skip if 'childs' key is present
                                return (
                                    <Accordion key={index} classes="collapse-arrow" title={t(route.accordionName!)}
                                               icon={route.accordionIcon}>
                                        <ul className="menu w-full">
                                            {route.childs?.map((child, childIndex) => (
                                                <li key={childIndex}>
                                                    <Link to={child.routeURL}>{child.routeIcon} {t(child.routeName)}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion>
                                )
                            })
                        }
                    </Suspense>
                    </ul>
                    {/*<Accordion title={'group 1'}>*/}
                    {/*    <ul className="menu">*/}
                    {/*        /!* Sidebar content here *!/*/}
                    {/*        {children}*/}
                    {/*    </ul>*/}
                    {/*</Accordion>*/}
                    {/*<Accordion title={'group 1'}>*/}
                    {/*    <ul className="menu">*/}
                    {/*        /!* Sidebar content here *!/*/}
                    {/*        {children}*/}
                    {/*    </ul>*/}
                    {/*</Accordion>*/}
                    {/*<Accordion title={'group 1'}>*/}
                    {/*    <ul className="menu">*/}
                    {/*        /!* Sidebar content here *!/*/}
                    {/*        {children}*/}
                    {/*    </ul>*/}
                    {/*</Accordion>*/}
                    {/*<Accordion title={'group 1'}>*/}
                    {/*    <ul className="menu">*/}
                    {/*        /!* Sidebar content here *!/*/}
                    {/*        {children}*/}
                    {/*    </ul>*/}
                    {/*</Accordion>*/}
                    {/*<Accordion title={'group 1'}>*/}
                    {/*    <ul className="menu">*/}
                    {/*        /!* Sidebar content here *!/*/}
                    {/*        {children}*/}
                    {/*    </ul>*/}
                    {/*</Accordion>*/}
                    {/*<Accordion title={'group 1'}>*/}
                    {/*    <ul className="menu">*/}
                    {/*        /!* Sidebar content here *!/*/}
                    {/*        {children}*/}
                    {/*    </ul>*/}
                    {/*</Accordion>*/}
                    {/*<Accordion title={'group 1'}>*/
                    }
                    {/*<ul className="menu">*/
                    }
                    {/*    /!* Sidebar content here *!/*/
                    }
                    {/*    {children}*/
                    }
                    {/*</ul>*/
                    }
                    {/*</Accordion><Accordion title={'group 1'}>*/
                    }
                    {/*    <ul className="menu">*/
                    }
                    {/*        /!* Sidebar content here *!/*/
                    }
                    {/*        {children}*/
                    }
                    {/*    </ul>*/
                    }
                    {/*</Accordion><Accordion title={'group 1'}>*/
                    }
                    {/*    <ul className="menu">*/
                    }
                    {/*        /!* Sidebar content here *!/*/
                    }
                    {/*        {children}*/
                    }
                    {/*    </ul>*/
                    }
                    {/*</Accordion>*/
                    }
                    {/*    <Accordion title={'group 1'}>*/
                    }
                    {/*        <ul className="menu">*/
                    }
                    {/*            /!* Sidebar content here *!/*/
                    }
                    {/*            {children}*/
                    }
                    {/*        </ul>*/
                    }
                    {/*    </Accordion>*/
                    }
                </div>
            </div>
        </>
    )
}

export default DrawerContainer
