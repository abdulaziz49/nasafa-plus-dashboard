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

                    <div className="w-full flex-grow overflow-y-auto no-scrollbar">
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
                                        classes={`collapse-arrow bg-primary text-primary-content -mb-1 ${
                                            openAccordionIndex === index
                                                ? "bg-base-100"
                                                : "bg-base-content"
                                        }`}
                                        title={t(route.accordionName!)}
                                        icon={route.accordionIcon}
                                        // Pass the collapsed state based on whether this accordion's index matches the openAccordionIndex
                                        collapsed={openAccordionIndex === index}
                                        index={index}
                                        // Pass the handler to update the openAccordionIndex in the parent
                                        onToggle={handleAccordionToggle}
                                    >
                                        <ul
                                            // className="menu w-full p-0"
                                            className={`menu w-full p-0 ${
                                                index === openAccordionIndex
                                                    ? "text-primary-content"
                                                    : "text-base-100"
                                            }`}
                                        >
                                            {route.routes?.map(
                                                (
                                                    childRoute,
                                                    childRouteIndex
                                                ) => (
                                                    <li key={childRouteIndex}>
                                                        <Link
                                                            // className={`${
                                                            //     index ===
                                                            //     openAccordionIndex
                                                            //         ? "text-primary-content"
                                                            //         : "text-base-100"
                                                            // }`}
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
