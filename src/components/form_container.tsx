import type {PropsWithChildren} from "react";

interface FormContainerPropsypes extends PropsWithChildren {
    formTitle?: string
}

const FormContainer = ({children, formTitle = ''}: FormContainerPropsypes) => {
    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            {formTitle?.length !== "" ?? <legend className="fieldset-legend">Page details</legend>}

            {/* Content of form placed here */}
            {children}
        </fieldset>
    )
}

export default FormContainer