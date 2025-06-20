import type {ReactElement} from "react";

interface ToggleType {
    name: string,
    withCheckMark: boolean,
    labelText?: string,
    withLabel?: boolean,
    classes?: string,
    checkedIcon?: ReactElement,
    uncheckedIcon?: ReactElement,
}

const Toggle = ({name, withCheckMark, labelText, classes, withLabel, checkedIcon, uncheckedIcon}: ToggleType) => {
    return (
        <div className={`flex flex-row items-center p-0 ${classes}`}>
            {withLabel && <label className="label text-lg text-normal">{labelText}</label>}
            <label className="toggle toggle-sm text-base-content my-0">
                <input name={name} type="checkbox"/>
                {
                    withCheckMark ?
                        checkedIcon : uncheckedIcon
                }

                {/*// withCheckMark ?? <>*/}
                {/*<svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">*/}
                {/*    <g*/}
                {/*        strokeLinejoin="round"*/}
                {/*        strokeLinecap="round"*/}
                {/*        strokeWidth="4"*/}
                {/*        fill="none"*/}
                {/*        stroke="currentColor"*/}
                {/*    >*/}
                {/*        <path d="M20 6 9 17l-5-5"></path>*/}
                {/*    </g>*/}
                {/*</svg>*/}
                {/*    //     <svg*/}
                {/*    //         aria-label="disabled"*/}
                {/*    //         xmlns="http://www.w3.org/2000/svg"*/}
                {/*    //         viewBox="0 0 24 24"*/}
                {/*    //         fill="none"*/}
                {/*    //         stroke="currentColor"*/}
                {/*    //         strokeWidth="4"*/}
                {/*    //         strokeLinecap="round"*/}
                {/*    //         strokeLinejoin="round"*/}
                {/*    //     >*/}
                {/*    //         <path d="M18 6 6 18"/>*/}
                {/*    //         <path d="m6 6 12 12"/>*/}
                {/*    //     </svg>*/}
                {/*    // </>*/}
                {/*}*/}
            </label>
        </div>
    )
}

export default Toggle