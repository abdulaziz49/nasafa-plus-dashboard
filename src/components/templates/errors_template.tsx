import type {PropsWithChildren} from "react";

const ErrorsTemplate = ({children}: PropsWithChildren) => {
    return (
        <div className='max-h-screen max-w-screen flex flex-col justify-center items-center'>
            {children}
        </div>
    )
}

export default ErrorsTemplate