import type {PropsWithChildren, ReactElement} from "react";
// import {browser} from "globals";

const PageDirectionController = ({children}:PropsWithChildren):ReactElement => {
    // document.dir="ltr"
    document.documentElement.dir="ltr"
    document.documentElement.lang="en"
    return (
        <>
            {children}
        </>
    )
}

export default PageDirectionController