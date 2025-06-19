import {lazy, type PropsWithChildren, Suspense} from "react";
// import DrawerContainer from "./drawer/drawer_container.tsx";
const DrawerContainer = lazy(() => import('./drawer/drawer_container.tsx'))

const ViewTemplate = ({children}: PropsWithChildren) => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2"
                           className="btn btn-primary drawer-button lg:hidden fixed top-3 start-3">
                        {/* hamburger icon */}
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
                        </svg>
                    </label>

                    {/* Page content here */}
                    {children}

                </div>
                <Suspense fallback={<}>

                <DrawerContainer>
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 3</a></li>
                    <li><a>Sidebar Item 4</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </DrawerContainer>
                </Suspense>
            </div>
        </>
    )
}

export default ViewTemplate