import type {PropsWithChildren} from "react";
import Accordion from "../accordion.tsx";

const DrawerContainer = ({children}: PropsWithChildren) => {
    return (
        <>
            <div className="drawer-side lg:p-4">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className='bg-base-200 text-base-content h-full w-80 p-4 lg:p-4 lg:rounded-xl overflow-y-auto'>
                    <div className="divider"></div>
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
                </div>
            </div>
        </>
    )
}

export default DrawerContainer