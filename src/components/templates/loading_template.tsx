import {type PropsWithChildren, Suspense} from "react";
import CircleLoading from "../loaders/circle_loading.tsx";

export default function LoadingTemplate({children}: PropsWithChildren) {
    return (
        <Suspense fallback={<CircleLoading/>}>
            {children}
        </Suspense>
    )
}