// // // import Accordion from '../accordion.tsx';
// // // import DrawerSkeleton from '../skeletons/drawer_skeleton.tsx';
// // // import RoutesSchema from '../../controllers/schema/routes_schema.tsx';
// // // import {Link} from 'react-router-dom';
// // // import {Suspense} from 'react';
// // // import {useTranslation} from 'react-i18next';
// // // import LogoutButton from "../buttons/drawer_buttons/logout_button.tsx";
// // // import SettingsButton from "../buttons/drawer_buttons/settings_button.tsx";
// // // import LazyImage from "../lazy_image.tsx";
// // // import Nasafa from '../../assets/img/nasafa_plus_logo.png'
// // //
// // // const DrawerContainer = () => {
// // //     const {t} = useTranslation('drawer');
// // //
// // //     return (
// // //         <>
// // //             <div className="drawer lg:drawer-open bg-base-200">
// // //                 <div className="drawer-side lg:p-4 z-3 lg:z-1 h-screen">
// // //                     <label
// // //                         htmlFor="my-drawer-2"
// // //                         aria-label="close sidebar"
// // //                         className="drawer-overlay"
// // //                     ></label>
// // //                     <div className="bg-primary text-base-content w-80 p-4 flex flex-col justify-between lg:rounded-xl h-full">
// // //                         {/* Added flex-col for better layout control */}
// // //                         {/*<div className="divider"></div>*/}
// // //                         <LazyImage classes="mb-4" alt={'Nasafa plus logo'} src={Nasafa}/>
// // //                         {/* The scrollable area for menu items is now within Suspense */}
// // //                         <div className="w-full flex-grow overflow-y-auto">
// // //                             <ul className="menu w-full flex flex-col">
// // //                                 {/* Use flex-grow and overflow-y-auto */}
// // //                                 <Suspense fallback={<DrawerSkeleton classes={''}/>}>
// // //                                     {RoutesSchema.map((route, index) => {
// // //                                         // Check for 'routes' property to determine if it's a direct link or an accordion
// // //                                         if (!route.hasOwnProperty!('routes')) {
// // //                                             return (
// // //                                                 <li
// // //                                                     key={index}
// // //                                                     className="text-primary"
// // //                                                 >
// // //                                                     <Link
// // //                                                         // className="text-primay"
// // //                                                         to={route.routeURL!}
// // //                                                     >
// // //                                                         {route.routeIcon}{' '}
// // //                                                         {t(route.routeName!)}
// // //                                                     </Link>
// // //                                                 </li>
// // //                                             );
// // //                                         }
// // //                                         return (
// // //                                             <Accordion
// // //                                                 key={index}
// // //                                                 classes="collapse-arrow text-primary"
// // //                                                 title={t(route.accordionName!)}
// // //                                                 icon={route.accordionIcon}
// // //                                             >
// // //                                                 <ul className="menu w-full">
// // //                                                     {route.routes?.map(
// // //                                                         (child, childIndex) => (
// // //                                                             <li key={childIndex}>
// // //                                                                 <Link
// // //                                                                     to={child.routeURL}
// // //                                                                 >
// // //                                                                     {child.routeIcon}{' '}
// // //                                                                     {t(child.routeName)}
// // //                                                                 </Link>
// // //                                                             </li>
// // //                                                         ),
// // //                                                     )}
// // //                                                 </ul>
// // //                                             </Accordion>
// // //                                         );
// // //                                     })}
// // //                                 </Suspense>
// // //                             </ul>
// // //                         </div>
// // //                         <div className="w-full flex flex-row items-center justify-between">
// // //                             <SettingsButton/>
// // //                             <LogoutButton/>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };
// // //
// // // export default DrawerContainer;
// //
// // import Accordion from '../accordion.tsx';
// // import DrawerSkeleton from '../skeletons/drawer_skeleton.tsx';
// // import RoutesSchema from '../../routes/routes_schema.tsx';
// // import {Link} from 'react-router-dom';
// // // import {Suspense} from 'react';
// // import {useTranslation} from 'react-i18next';
// // import LogoutButton from "../buttons/drawer_buttons/logout_button.tsx";
// // import NotificationsButton from "../buttons/drawer_buttons/settings_button.tsx";
// // import LazyImage from "../lazy_image.tsx";
// // import Nasafa from '../../assets/img/nasafa_plus_logo.png'
// // import {Suspense} from "react";
// //
// // const DrawerContainer = () => {
// //     const {t} = useTranslation('drawer');
// //     // const [drawerAccordionCollapseState, setDrawerAccordionCollapseState] = useState({})
// //
// //     return (
// //         <div className="drawer-side lg:p-4 z-3 lg:z-1 h-screen">
// //             <Suspense fallback={<DrawerSkeleton classes="h-screen"/>}>
// //                 <label
// //                     htmlFor="my-drawer-2"
// //                     aria-label="close sidebar"
// //                     className="drawer-overlay"
// //                 ></label>
// //                 <div
// //                     className="bg-primary text-base-content w-80 p-4 flex flex-col justify-between lg:rounded-md h-full">
// //                     <LazyImage classes="mb-4" alt={'Nasafa plus logo'} src={Nasafa}/>
// //                     <div className="w-full flex-grow overflow-y-auto">
// //                         <ul className="menu w-full flex flex-col">
// //                             {/*<Suspense fallback={<DrawerSkeleton classes={'w-full h-full'}/>}>*/}
// //                             {RoutesSchema.map((route, index) => {
// //                                 // Check for 'routes' property to determine if it's a direct link or an accordion
// //                                 if (!route.hasOwnProperty!('routes') || !route.routes) { // Added !route.routes check for robustness
// //                                     return (
// //                                         <li
// //                                             key={index}
// //                                         >
// //                                             <Link
// //                                                 className='text-primary-content'
// //                                                 to={route.routeURL!}
// //                                             >
// //                                                 {route.routeIcon}{' '}
// //                                                 {t(route.routeName!)}
// //                                             </Link>
// //                                         </li>
// //                                     );
// //                                 }
// //                                 return (
// //                                     <Accordion
// //                                         key={index}
// //                                         classes="collapse-arrow bg-primary text-primary-content -mb-1"
// //                                         title={t(route.accordionName!)}
// //                                         icon={route.accordionIcon}
// //                                         // IMPORTANT: Pass a unique name for the radio group behavior
// //                                         // Using accordionName as a base, ensure it's unique if possible,
// //                                         // or use a more robust unique ID generation.
// //                                         // If you want ONLY ONE accordion open at a time across ALL accordions in the drawer,
// //                                         // then all accordions should share the SAME name, e.g., name="drawer-menu-group".
// //                                         // If you want them to be independent (but still using radio),
// //                                         // then each needs a unique name as shown above.
// //                                     >
// //                                         <ul className="menu w-full p-0">
// //                                             {route.routes?.map(
// //                                                 (childRoute, childRouteIndex) => (
// //                                                     <li key={childRouteIndex}>
// //                                                         <Link
// //                                                             to={childRoute.routeURL}
// //                                                         >{t(childRoute.routeName)}
// //                                                         </Link>
// //                                                     </li>
// //                                                 ),
// //                                             )}
// //                                         </ul>
// //                                     </Accordion>
// //                                 );
// //                             })}
// //                             {/*</Suspense>*/}
// //                         </ul>
// //                     </div>
// //                     <div className="w-full flex flex-row items-center justify-between">
// //                         <NotificationsButton/>
// //                         <LogoutButton/>
// //                     </div>
// //                 </div>
// //             </Suspense>
// //         </div>
// //     )
// // }
// //
// // export default DrawerContainer;
//
// // Importing necessary React components and utilities.
// // استيراد مكونات React والأدوات اللازمة.
// import Accordion from '../accordion.tsx'; // Custom component for collapsible menu sections.
// import DrawerSkeleton from '../skeletons/drawer_skeleton.tsx'; // Loading fallback for the drawer content.
// import RoutesSchema from '../../routes/routes_schema.tsx'; // Configuration for navigation routes/menu items.
// import {Link} from 'react-router-dom'; // For client-side navigation.
// import {type JSX, Suspense, useState} from 'react'; // To display a fallback while content loads.
// import {useTranslation} from 'react-i18next'; // For internationalization.
// import LogoutButton from "../buttons/drawer_buttons/logout_button.tsx"; // Button for user logout.
// import NotificationsButton from "../buttons/drawer_buttons/settings_button.tsx"; // Button for notifications/settings.
// import LazyImage from "../lazy_image.tsx"; // For lazy-loading images.
// import Nasafa from '../../assets/img/nasafa_plus_logo.png' // Application logo.
//
// /**
//  * DrawerContainer Component
//  *
//  * Renders the main navigation drawer of the application.
//  * It dynamically constructs the menu based on `RoutesSchema`,
//  * supporting direct links and expandable accordions for nested routes.
//  * Integrates internationalization and includes essential action buttons.
//  *
//  * @returns {JSX.Element} The rendered navigation drawer.
//  */
// /**
//  * مكون DrawerContainer
//  *
//  * يقوم بعرض درج التنقل الرئيسي للتطبيق.
//  * يقوم بإنشاء القائمة ديناميكيًا بناءً على `RoutesSchema`،
//  * ويدعم الروابط المباشرة والأكورديونات القابلة للتوسيع للمسارات المتداخلة.
//  * يتكامل مع التدويل ويحتوي على أزرار الإجراءات الأساسية.
//  *
//  * @returns {JSX.Element} درج التنقل المعروض.
//  */
// const DrawerContainer = (): JSX.Element => {
//     // Hook to access translation function for the 'drawer' namespace.
//     // خطاف للوصول إلى دالة الترجمة لمساحة الاسم 'drawer'.
//     const {t} = useTranslation('drawer');
//
//     const [drawerCollapse, setDrawerCollapse] = useState<object[]>([])
//
//     return (
//         // Main container for the drawer's sidebar content.
//         // الحاوية الرئيسية لمحتوى الشريط الجانبي للدرج.
//         <div className="drawer-side lg:p-4 z-3 lg:z-1 h-screen">
//             {/* Suspense boundary to show a skeleton loader during async operations. */}
//             {/* حدود Suspense لعرض هيكل تحميل أثناء العمليات غير المتزامنة. */}
//             <Suspense fallback={<DrawerSkeleton classes="h-screen"/>}>
//                 {/* Overlay label typically used to close the drawer on click outside on smaller screens. */}
//                 {/* تسمية الطبقة الشفافة المستخدمة عادةً لإغلاق الدرج عند النقر خارجها على الشاشات الأصغر. */}
//                 <label
//                     htmlFor="my-drawer-2"
//                     aria-label="close sidebar"
//                     className="drawer-overlay"
//                 ></label>
//
//                 {/* Drawer's inner content area, structured with flexbox. */}
//                 {/* منطقة المحتوى الداخلية للدرج، منظمة باستخدام flexbox. */}
//                 <div
//                     className="bg-primary text-base-content w-80 p-4 flex flex-col justify-between lg:rounded-md h-full">
//
//                     {/* Application logo at the top of the drawer. */}
//                     {/* شعار التطبيق في الجزء العلوي من الدرج. */}
//                     <LazyImage classes="mb-4" alt={'Nasafa plus logo'} src={Nasafa}/>
//
//                     {/* Scrollable area for the navigation menu items. */}
//                     {/* منطقة قابلة للتمرير لعناصر قائمة التنقل. */}
//                     <div className="w-full flex-grow overflow-y-auto">
//                         {/* Main menu list. */}
//                         {/* قائمة التنقل الرئيسية. */}
//                         <ul className="menu w-full flex flex-col">
//                             {/*
//                              * Dynamically renders menu items from `RoutesSchema`.
//                              * Each item is either a direct navigation link or a collapsible Accordion.
//                              */}
//                             {/*
//                              * يعرض عناصر القائمة ديناميكيًا من `RoutesSchema`.
//                              * كل عنصر إما رابط تنقل مباشر أو أكورديون قابل للطي.
//                              */}
//                             {RoutesSchema.map((route, index) => {
//                                 // Renders as a direct link if no `routes` property or it's empty.
//                                 // يتم عرضه كرابط مباشر إذا لم توجد خاصية `routes` أو كانت فارغة.
//                                 if (!route.hasOwnProperty!('routes') || !route.routes) {
//                                     return (
//                                         <li key={index}>
//                                             <Link className='text-primary-content' to={route.routeURL!}>
//                                                 {route.routeIcon}{' '}
//                                                 {t(route.routeName!)}
//                                             </Link>
//                                         </li>
//                                     );
//                                 }
//                                 // Renders as an Accordion for nested routes.
//                                 // يتم عرضه كأكورديون للمسارات المتداخلة.
//                                 return (
//                                     <Accordion
//                                         key={index}
//                                         classes="collapse-arrow bg-primary text-primary-content -mb-1"
//                                         title={t(route.accordionName!)}
//                                         accordionName="accordion"
//                                         icon={route.accordionIcon}
//                                     >
//                                         {/* Nested menu list inside the accordion. */}
//                                         {/* قائمة متداخلة داخل الأكورديون. */}
//                                         <ul className="menu w-full p-0">
//                                             {route.routes?.map(
//                                                 (childRoute, childRouteIndex) => (
//                                                     <li key={childRouteIndex}>
//                                                         <Link to={childRoute.routeURL}>
//                                                             {t(childRoute.routeName)}
//                                                         </Link>
//                                                     </li>
//                                                 ),
//                                             )}
//                                         </ul>
//                                     </Accordion>
//                                 );
//                             })}
//                         </ul>
//                     </div>
//
//                     {/* Container for action buttons at the bottom of the drawer. */}
//                     {/* حاوية لأزرار الإجراءات في الجزء السفلي من الدرج. */}
//                     <div className="w-full flex flex-row items-center justify-between">
//                         <NotificationsButton/> {/* Button for notifications. */}
//                         <LogoutButton/> {/* Button to log out the user. */}
//                     </div>
//                 </div>
//             </Suspense>
//         </div>
//     );
// };
//
// export default DrawerContainer;

import DrawerSkeleton from "../skeletons/drawer_skeleton.tsx";
import RoutesSchema from "../../routes/routes_schema.tsx";
import { Link } from "react-router-dom";
import { type JSX, Suspense, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LogoutButton from "../buttons/drawer_buttons/logout_button.tsx";
import NotificationsButton from "../buttons/drawer_buttons/settings_button.tsx";
import LazyImage from "../lazy_image.tsx";
import Nasafa from "../../assets/img/nasafa_plus_logo.png";
import DrawerAccordion from "./drawer_accordion.tsx";

const DrawerContainer = (): JSX.Element => {
    const { t } = useTranslation("drawer");

    // State to keep track of the currently open accordion's index.
    // -1 means no accordion is open.
    const [openAccordionIndex, setOpenAccordionIndex] = useState<number>(-1);

    useEffect(() => {}, [openAccordionIndex]);

    // Function to handle accordion toggles.
    // If the clicked accordion is already open, close it. Otherwise, open it.
    // const handleAccordionToggle = (e: MouseEventHandler<HTMLButtonElement>, index: number) => {
    const handleAccordionToggle = useCallback((index: number) => {
        setOpenAccordionIndex((prevIndex) => {
            return prevIndex === index ? -1 : index;
        });
    }, []);

    return (
        <div className="drawer-side lg:py-4 lg:ps-4 z-3 lg:z-1 h-screen">
            <Suspense fallback={<DrawerSkeleton classes="h-screen" />}>
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>

                <div className="bg-primary text-base-content w-80 flex flex-col justify-between lg:rounded-md h-full">
                    <LazyImage
                        classes="m-4 mt-6"
                        alt={"Nasafa plus logo"}
                        src={Nasafa}
                    />

                    <div className="w-full flex-grow overflow-y-auto">
                        <ul className="menu w-full flex flex-col">
                            {RoutesSchema.map((route, index) => {
                                if (
                                    !route.hasOwnProperty!("routes") ||
                                    !route.routes
                                ) {
                                    return (
                                        <li key={index}>
                                            <Link
                                                className="text-primary-content"
                                                to={route.routeURL!}
                                                onClick={() =>
                                                    setOpenAccordionIndex(-1)
                                                }
                                            >
                                                {route.routeIcon}{" "}
                                                {t(route.routeName!)}
                                            </Link>
                                        </li>
                                    );
                                }
                                return (
                                    <DrawerAccordion
                                        key={index}
                                        classes="collapse-arrow bg-primary text-primary-content -mb-1"
                                        title={t(route.accordionName!)}
                                        icon={route.accordionIcon}
                                        // Pass the collapsed state based on whether this accordion's index matches the openAccordionIndex
                                        collapsed={openAccordionIndex === index}
                                        index={index}
                                        // Pass the handler to update the openAccordionIndex in the parent
                                        onToggle={handleAccordionToggle}
                                    >
                                        <ul className="menu w-full p-0">
                                            {route.routes?.map(
                                                (
                                                    childRoute,
                                                    childRouteIndex
                                                ) => (
                                                    <li key={childRouteIndex}>
                                                        <Link
                                                            to={
                                                                childRoute.routeURL
                                                            }
                                                        >
                                                            {t(
                                                                childRoute.routeName
                                                            )}
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </DrawerAccordion>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="w-full flex flex-row items-center justify-between">
                        <NotificationsButton />
                        <LogoutButton />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default DrawerContainer;
