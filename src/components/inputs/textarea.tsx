import type { ComponentPropsWithoutRef } from 'react';

interface TextPropsType extends ComponentPropsWithoutRef<'textarea'> {
	labelText?: string;
	withLabel?: boolean;
	placeholder?: string;
	classes?: string;
}

const Textarea = ({
	withLabel = false,
	labelText = '',
	placeholder = '',
	classes,
	...rest
}: TextPropsType) => {
	return (
		<div className={'flex flex-col ' + classes}>
			{/* Conditionally render the label only if 'withLabel' is true */}
			{withLabel && <label className="label mb-2">{labelText}</label>}
			<textarea
				className="textarea w-auto"
				placeholder={placeholder}
				{...rest}
			/>
		</div>
	);
};

export default Textarea;
