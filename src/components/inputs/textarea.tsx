interface TextPropsType {
    labelText?: string,
    withLabel?: boolean,
    placeholder?: string,
    name: string,
    classes?: string
}

const Textarea = ({withLabel = false, labelText = '', placeholder = "", name, classes}: TextPropsType) => {
    return (
        <div className={'flex flex-col ' + classes}>
            {/* Conditionally render the label only if 'withLabel' is true */}
            {withLabel && <label className="label mb-2">{labelText}</label>}
            <textarea name={name} className="textarea" placeholder={placeholder}/>
        </div>
    )
}

export default Textarea