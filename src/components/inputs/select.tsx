import type { ComponentPropsWithoutRef, FC } from "react";

interface SelectType extends ComponentPropsWithoutRef<"select"> {
    classes?: string;
    labelText?: string;
    withLabel?: boolean;
}

// /**
//  * Select component
//  * @param children accepts the child components, that you put them between a starting and closing tags
//  * @example
//  * <Select>
//  *      <option></option>
//  * </Select>
//  * @param defaultValue is of type string and it's resposible of selct placeholder
//  * @param isDisabledDefaultValue is of type boolean, responsible for showing or hiding the defaultValue
//  * @param classes send classes to className Property of react js
//  */
const Select: FC<SelectType> = ({
    children,
    classes,
    labelText,
    withLabel = false,
    ...rest
}) => {
    return (
        <div className={`mb-2 flex flex-col justify-start ${classes}`}>
            {withLabel && <label className="label mb-1">{labelText}</label>}
            <select className="select w-full" {...rest}>
                {/*<option disabled={isDisabledDefaultValue}>{defaultValue}</option>*/}
                {children}
            </select>
        </div>
    );
};

export default Select;
