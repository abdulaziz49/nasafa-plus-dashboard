import type {   ComponentPropsWithoutRef} from "react";

interface InputFieldPropsType extends ComponentPropsWithoutRef<"input"> {
    labelText?: string,
    withLabel?: boolean,
    fieldType: string,
    placeholder?: string,
    name: string,
    classes?: string,
}

const InputField = ({
                        fieldType,
                        withLabel = false,
                        labelText,
                        placeholder,
                        name,
                        classes,
                        ...rest
                    }: InputFieldPropsType) => {
    return (
        <div className={'flex flex-col ' + classes}>
            {/* Conditionally render the label only if 'withLabel' is true */}
            {withLabel && <label className="label mb-2">{labelText}</label>}
            <input type={fieldType} name={name} className="input w-auto" placeholder={placeholder} {...rest}/>
        </div>
    )
}

export default InputField