import type {PropsWithChildren} from "react";

interface FormContainerPropsypes extends PropsWithChildren {
    formTitle?: string
    classes?: string
}

const FormContainer = ({children, formTitle = '', classes = ''}: FormContainerPropsypes) => {
    return (
        <fieldset className={"fieldset border-base-300 rounded-box border " + classes}>
            {/* Conditionally render the legend only if formTitle is provided and not an empty string */}
            {formTitle && <legend className="fieldset-legend">{formTitle}</legend>}

            {/* Content of form placed here */}
            {children}
        </fieldset>
    )
}

export default FormContainer