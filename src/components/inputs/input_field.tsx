interface InputFieldPropsType {
    labelText: string,
    withLabel?: boolean,
    fieldType: string,
    placeholder: string,
}

const InputField = ({fieldType, withLabel = true, labelText, placeholder}: InputFieldPropsType) => {
    return (
        <>
            {withLabel ?? <label className="label">{labelText}</label>}
            <input type={fieldType} className="input" placeholder={placeholder}/>
        </>
    )
}

export default InputField