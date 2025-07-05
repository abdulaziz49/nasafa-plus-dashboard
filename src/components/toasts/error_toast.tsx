import type {ComponentPropsWithoutRef} from "react";

interface ToastType extends ComponentPropsWithoutRef<"div"> {
    messageType: string
}

export default function ErrorToast({messageType, children}: ToastType) {
    return (
        <div className="toast toast-top">
            <div className={`alert alert-${messageType}`}>
                <span>{children}</span>
            </div>
        </div>
    )
}