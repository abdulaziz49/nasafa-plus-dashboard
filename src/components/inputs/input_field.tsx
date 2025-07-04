import type {ChangeEventHandler} from "react";

interface InputFieldPropsType {
    labelText?: string,
    withLabel?: boolean,
    fieldType: string,
    placeholder?: string,
    name: string,
    classes?: string,
    changeEvent: ChangeEventHandler<HTMLInputElement>
}

const InputField = ({
                        fieldType,
                        withLabel = false,
                        labelText,
                        placeholder,
                        name,
                        classes,
                        changeEvent
                    }: InputFieldPropsType) => {
    return (
        <div className={'flex flex-col ' + classes}>
            {/* Conditionally render the label only if 'withLabel' is true */}
            {withLabel && <label className="label mb-2">{labelText}</label>}
            <input type={fieldType} name={name} className="input w-auto" placeholder={placeholder}
                   onChange={changeEvent}/>
        </div>
    )
}

export default InputField