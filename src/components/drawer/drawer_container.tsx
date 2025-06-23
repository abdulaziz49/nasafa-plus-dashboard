// import Accordion from '../accordion.tsx';
// import DrawerSkeleton from '../skeletons/drawer_skeleton.tsx';
// import RoutesSchema from '../../controllers/schema/routes_schema.tsx';
// import {Link} from 'react-router-dom';
// import {Suspense} from 'react';
// import {useTranslation} from 'react-i18next';
// import LogoutButton from "../buttons/drawer_buttons/logout_button.tsx";
// import SettingsButton from "../buttons/drawer_buttons/settings_button.tsx";
// import LazyImage from "../lazy_image.tsx";
// import Nasafa from '../../assets/img/nasafa_plus_logo.png'
//
// const DrawerContainer = () => {
//     const {t} = useTranslation('drawer');
//
//     return (
//         <>
//             <div className="drawer lg:drawer-open bg-base-200">
//                 <div className="drawer-side lg:p-4 z-3 lg:z-1 h-screen">
//                     <label
//                         htmlFor="my-drawer-2"
//                         aria-label="close sidebar"
//                         className="drawer-overlay"
//                     ></label>
//                     <div className="bg-primary text-base-content w-80 p-4 flex flex-col justify-between lg:rounded-xl h-full">
//                         {/* Added flex-col for better layout control */}
//                         {/*<div className="divider"></div>*/}
//                         <LazyImage classes="mb-4" alt={'Nasafa plus logo'} src={Nasafa}/>
//                         {/* The scrollable area for menu items is now within Suspense */}
//                         <div className="w-full flex-grow overflow-y-auto">
//                             <ul className="menu w-full flex flex-col">
//                                 {/* Use flex-grow and overflow-y-auto */}
//                                 <Suspense fallback={<DrawerSkeleton classes={''}/>}>
//                                     {RoutesSchema.map((route, index) => {
//                                         // Check for 'childs' property to determine if it's a direct link or an accordion
//                                         if (!route.hasOwnProperty!('childs')) {
//                                             return (
//                                                 <li
//                                                     key={index}
//                                                     className="text-primary"
//                                                 >
//                                                     <Link
//                                                         // className="text-primay"
//                                                         to={route.routeURL!}
//                                                     >
//                                                         {route.routeIcon}{' '}
//                                                         {t(route.routeName!)}
//                                                     </Link>
//                                                 </li>
//                                             );
//                                         }
//                                         return (
//                                             <Accordion
//                                                 key={index}
//                                                 classes="collapse-arrow text-primary"
//                                                 title={t(route.accordionName!)}
//                                                 icon={route.accordionIcon}
//                                             >
//                                                 <ul className="menu w-full">
//                                                     {route.childs?.map(
//                                                         (child, childIndex) => (
//                                                             <li key={childIndex}>
//                                                                 <Link
//                                                                     to={child.routeURL}
//                                                                 >
//                                                                     {child.routeIcon}{' '}
//                                                                     {t(child.routeName)}
//                                                                 </Link>
//                                                             </li>
//                                                         ),
//                                                     )}
//                                                 </ul>
//                                             </Accordion>
//                                         );
//                                     })}
//                                 </Suspense>
//                             </ul>
//                         </div>
//                         <div className="w-full flex flex-row items-center justify-between">
//                             <SettingsButton/>
//                             <LogoutButton/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export default DrawerContainer;

import Accordion from '../accordion.tsx';
import DrawerSkeleton from '../skeletons/drawer_skeleton.tsx';
import RoutesSchema from '../../controllers/schema/routes_schema.tsx';
import {Link} from 'react-router-dom';
// import {Suspense} from 'react';
import {useTranslation} from 'react-i18next';
import LogoutButton from "../buttons/drawer_buttons/logout_button.tsx";
import SettingsButton from "../buttons/drawer_buttons/settings_button.tsx";
import LazyImage from "../lazy_image.tsx";
import Nasafa from '../../assets/img/nasafa_plus_logo.png'
import {Suspense} from "react";

const DrawerContainer = () => {
    const {t} = useTranslation('drawer');

    return (
        <div className="drawer-side lg:p-4 z-3 lg:z-1 h-screen">
            <Suspense fallback={<DrawerSkeleton classes="h-screen"/>}>
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div
                    className="bg-primary text-base-content w-80 p-4 flex flex-col justify-between lg:rounded-xl h-full">
                    <LazyImage classes="mb-4" alt={'Nasafa plus logo'} src={Nasafa}/>
                    <div className="w-full flex-grow overflow-y-auto">
                        <ul className="menu w-full flex flex-col">
                            {/*<Suspense fallback={<DrawerSkeleton classes={'w-full h-full'}/>}>*/}
                            {RoutesSchema.map((route, index) => {
                                // Check for 'childs' property to determine if it's a direct link or an accordion
                                if (!route.hasOwnProperty!('childs') || !route.childs) { // Added !route.childs check for robustness
                                    return (
                                        <li
                                            key={index}
                                        >
                                            <Link
                                                className='text-primary-content'
                                                to={route.routeURL!}
                                            >
                                                {route.routeIcon}{' '}
                                                {t(route.routeName!)}
                                            </Link>
                                        </li>
                                    );
                                }
                                return (
                                    <Accordion
                                        key={index}
                                        classes="collapse-arrow bg-primary text-primary-content"
                                        title={t(route.accordionName!)}
                                        icon={route.accordionIcon}
                                        // IMPORTANT: Pass a unique name for the radio group behavior
                                        // Using accordionName as a base, ensure it's unique if possible,
                                        // or use a more robust unique ID generation.
                                        // If you want ONLY ONE accordion open at a time across ALL accordions in the drawer,
                                        // then all accordions should share the SAME name, e.g., name="drawer-menu-group".
                                        // If you want them to be independent (but still using radio),
                                        // then each needs a unique name as shown above.
                                    >
                                        <ul className="menu w-full">
                                            {route.childs?.map(
                                                (child, childIndex) => (
                                                    <li key={childIndex}>
                                                        <Link
                                                            to={child.routeURL}
                                                        >
                                                            {child.routeIcon}{' '}
                                                            {t(child.routeName)}
                                                        </Link>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </Accordion>
                                );
                            })}
                            {/*</Suspense>*/}
                        </ul>
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                        <SettingsButton/>
                        <LogoutButton/>
                    </div>
                </div>
            </Suspense>
        </div>
    )
}

export default DrawerContainer;