import {
    useCallback,
    useEffect,
    useState,
    type ComponentPropsWithoutRef,
} from "react";
import FormContainer from "../form_container";
import Accordion from "../accordion";

interface CollapsibleFormPropsType extends ComponentPropsWithoutRef<"div"> {
    title: string;
    collapse?: boolean;
}
/**
 * Renders a collapsible form section using an accordion UI.
 *
 * @component
 * @param {CollapsibleFormPropsType} props - The props for the CollapsibleForm component.
 * @param {string} props.title - The title displayed on the collapsible accordion header.
 * @param {React.ReactNode} props.children - The form content to be rendered inside the collapsible section.
 * @returns {JSX.Element} The rendered collapsible form container.
 */
export default function CollapsibleForm({
    title,
    collapse = false,
    children,
}: CollapsibleFormPropsType) {
    const [collapseForm, setCollapseForm] = useState<boolean>(false);

    useEffect(() => {
        if (collapse) {
            setCollapseForm(true);
        } else {
            setCollapseForm(false);
        }
    }, [collapse]);

    const toggleCollapse = useCallback(() => {
        setCollapseForm((prev) => !prev);
    }, [setCollapseForm]);

    return (
        <FormContainer classes="w-full h-auto shadow">
            <Accordion
                collapsed={collapseForm}
                title={title}
                onToggle={toggleCollapse}
                titleClasses={"text-lg m-0 py-3 ms-7 lg:text-2xl lg:ms-0"}
                classes="collapse-arrow h-auto"
            >
                {children}
            </Accordion>
        </FormContainer>
    );
}
