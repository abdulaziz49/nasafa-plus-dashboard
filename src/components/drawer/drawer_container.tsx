import type {PropsWithChildren} from "react";

const DrawerContainer = ({children}: PropsWithChildren) => {
    return (
        <>
            <div className="drawer-side lg:p-4">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 lg:p-4 lg:rounded-xl">
                    {/* Sidebar content here */}
                    {children}
                </ul>
            </div>
        </>
    )
}

export default DrawerContainer