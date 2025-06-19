import type {PropsWithChildren} from "react";

interface SelectType extends PropsWithChildren {
    defaultValue?: string,
    isDisabledDefaultValue?: boolean,
    classes?: string,
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
const Select = ({children, defaultValue = "", isDisabledDefaultValue = true, classes = ""}: SelectType) => {
    return (
        <select defaultValue={defaultValue} className={"select" + classes}>
            <option disabled={isDisabledDefaultValue}>{defaultValue}</option>
            {children}
        </select>
    )
}

export default Select