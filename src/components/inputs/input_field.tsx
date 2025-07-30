import type { ComponentPropsWithoutRef } from "react";

interface InputFieldPropsType extends ComponentPropsWithoutRef<"input"> {
    labelText?: string;
    withLabel?: boolean;
    placeholder?: string;
    containerClasses?: string;
    errorMessage?: string;
}

const InputField = ({
    withLabel = false,
    labelText,
    placeholder,
    containerClasses,
    errorMessage,
    ...rest
}: InputFieldPropsType) => {
    return (
        <div className={`mb-2 flex flex-col ${containerClasses}`}>
            {/* Conditionally render the label only if 'withLabel' is true */}
            {withLabel && <label className="label mb-1">{labelText}</label>}
            <input
                className="input my-0 w-auto"
                placeholder={placeholder}
                {...rest}
            />
            {errorMessage && (
                <p className="validator-hint hidden">{errorMessage}</p>
            )}
        </div>
    );
};

export default InputField;
