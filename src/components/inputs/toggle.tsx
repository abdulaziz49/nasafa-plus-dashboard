// import type {ReactElement} from "react";
//
// interface ToggleType {
//     name: string,
//     withCheckMark: boolean,
//     labelText?: string,
//     withLabel?: boolean,
//     classes?: string,
//     checkedIcon?: ReactElement,
//     uncheckedIcon?: ReactElement,
// }
//
// const Toggle = ({name, withCheckMark, labelText, classes, withLabel, checkedIcon, uncheckedIcon}: ToggleType) => {
//     return (
//         <div className={`flex flex-row items-center p-0 ${classes}`}>
//             {withLabel && <label className="label text-lg text-normal">{labelText}</label>}
//             <label className="toggle toggle-sm text-base-content my-0">
//                 <input name={name} type="checkbox"/>
//                 {
//                     withCheckMark ?
//                         checkedIcon : uncheckedIcon
//                 }
//
//                 {/*// withCheckMark ?? <>*/}
//                 {/*<svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">*/}
//                 {/*    <g*/}
//                 {/*        strokeLinejoin="round"*/}
//                 {/*        strokeLinecap="round"*/}
//                 {/*        strokeWidth="4"*/}
//                 {/*        fill="none"*/}
//                 {/*        stroke="currentColor"*/}
//                 {/*    >*/}
//                 {/*        <path d="M20 6 9 17l-5-5"></path>*/}
//                 {/*    </g>*/}
//                 {/*</svg>*/}
//                 {/*    //     <svg*/}
//                 {/*    //         aria-label="disabled"*/}
//                 {/*    //         xmlns="http://www.w3.org/2000/svg"*/}
//                 {/*    //         viewBox="0 0 24 24"*/}
//                 {/*    //         fill="none"*/}
//                 {/*    //         stroke="currentColor"*/}
//                 {/*    //         strokeWidth="4"*/}
//                 {/*    //         strokeLinecap="round"*/}
//                 {/*    //         strokeLinejoin="round"*/}
//                 {/*    //     >*/}
//                 {/*    //         <path d="M18 6 6 18"/>*/}
//                 {/*    //         <path d="m6 6 12 12"/>*/}
//                 {/*    //     </svg>*/}
//                 {/*    // </>*/}
//                 {/*}*/}
//             </label>
//         </div>
//     )
// }
//
// export default Toggle

import type { ReactElement, InputHTMLAttributes } from 'react';
import { useState } from 'react'; // Don't forget to import useState

interface ToggleType
	extends Omit<
		InputHTMLAttributes<HTMLInputElement>,
		'checked' | 'onChange'
	> {
	// Extend InputHTMLAttributes for standard input props
	name: string;
	withCheckMark?: boolean; // Made optional if you're using custom icons
	labelText?: string;
	labelClasses?: string; // Classes for the label
	withLabel?: boolean;
	classes?: string;
	checkedIcon?: ReactElement;
	uncheckedIcon?: ReactElement;
	initialChecked?: boolean; // New prop for initial state
	onToggleChange?: (isChecked: boolean) => void; // Callback for state change
}

const Toggle = ({
	name,
	withCheckMark = false, // Default to false
	labelText,
	labelClasses = '', // Default to empty string for label classes
	classes,
	withLabel = false, // Default to false
	checkedIcon,
	uncheckedIcon,
	initialChecked = false, // Default initial state
	onToggleChange,
	...rest // Capture other standard input props
}: ToggleType) => {
	const [isChecked, setIsChecked] = useState(initialChecked);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newState = event.target.checked;
		setIsChecked(newState);
		onToggleChange?.(newState); // Call the callback if provided
	};

	return (
		<div className={`flex flex-row items-center p-0 ${classes || ''}`}>
			{' '}
			{/* Handle undefined classes */}
			{withLabel && (
				<label
					htmlFor={name}
					className={`label text-lg text-normal ${classes || ''}`}
				>
					{labelText}
				</label>
			)}{' '}
			{/* Add htmlFor for accessibility */}
			<label className="toggle toggle-sm text-base-content my-0 cursor-pointer">
				{' '}
				{/* Added cursor-pointer */}
				<input
					name={name}
					type="checkbox"
					checked={isChecked} // Control the checked state
					onChange={handleChange} // Handle changes
					className="toggle-hidden" // Optionally hide the default toggle appearance if your CSS framework needs it
					{...rest} // Pass down other input props
				/>
				{/* Render icons based on internal state, or use a default if withCheckMark is true */}
				{withCheckMark
					? isChecked
						? checkedIcon || (
								<span className="toggle-checkmark">✔</span>
						  )
						: uncheckedIcon || (
								<span className="toggle-cross">✖</span>
						  )
					: // If not using withCheckMark, and custom icons are provided, render them
					// You'd need to style these to appear correctly within your toggle
					isChecked
					? checkedIcon
					: uncheckedIcon}
				{/*
                    If you want the SVGs to be part of the DaisyUI toggle *visual*,
                    you'd typically place them within the `toggle` label and use CSS
                    to show/hide them based on the input's :checked state.
                    Example with DaisyUI (often uses ::before/::after or specific classes):
                    <span className="toggle-handle"></span> // DaisyUI often uses a span for the visual handle
                    {isChecked ? checkedIcon : uncheckedIcon} // Or your SVGs here with conditional CSS
                */}
			</label>
		</div>
	);
};

export default Toggle;
