import type {PropsWithChildren, ReactElement} from "react";
// import {browser} from "globals";

const PageDirectionController = ({children}:PropsWithChildren):ReactElement => {
    document.dir="rtl"
    return (
        <>
            {children}
        </>
    )
}

export default PageDirectionController