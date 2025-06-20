import type {PropsWithChildren, ReactElement} from "react";
// import {browser} from "globals";

const PageDirectionController = ({children}:PropsWithChildren):ReactElement => {
    document.dir="ltr"
    return (
        <>
            {children}
        </>
    )
}

export default PageDirectionController