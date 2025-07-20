import type { ComponentPropsWithoutRef } from 'react';

interface InputFieldPropsType extends ComponentPropsWithoutRef<'input'> {
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
		<div className={'flex flex-col ' + containerClasses}>
			{/* Conditionally render the label only if 'withLabel' is true */}
			{withLabel && <label className="label mb-2">{labelText}</label>}
			<input
				className="input w-auto"
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
