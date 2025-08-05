import InputField from "../inputs/input_field.tsx";
import AddButton from "../buttons/crud_buttons/add_button.tsx";
import EditButton from "../buttons/crud_buttons/edit_button.tsx";
import { useTranslation } from "react-i18next";
import type { ChangeEventHandler, JSX, MouseEventHandler } from "react";
import CollapsibleForm from "./collapsible_form.tsx";
import type { TypeModel } from "../../models/type_models.ts";

interface GroupFormTypes {
    translateFile: string;
    formData: TypeModel;
    addEventHandler: MouseEventHandler<HTMLButtonElement>;
    editEventHandler: MouseEventHandler<HTMLButtonElement>;
    inputChangeEvent: ChangeEventHandler<HTMLInputElement>;
    isAdding: boolean;
    isEditing: boolean;
    isCollapsed?: boolean;
}

/**
 * TrucTypeForm component renders a collapsible form for adding or editing truck types.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.translateFile - The translation namespace or file for localization.
 * @param {Object} props.formData - The current form data, containing `name` and `guard_name` fields.
 * @param {(event: React.FormEvent<HTMLFormElement>) => void} props.addEventHandler - Handler for the add button click event.
 * @param {(event: React.FormEvent<HTMLFormElement>) => void} props.editEventHandler - Handler for the edit button click event.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} props.inputChangeEvent - Handler for input field changes.
 * @param {boolean} props.isAdding - Indicates if the add operation is in progress (disables the add button).
 * @param {boolean} props.isEditing - Indicates if the edit operation is in progress (disables the edit button).
 *
 * @returns {JSX.Element} The rendered UserRoleForm component.
 */
export default function GroupForm({
    translateFile,
    formData,
    addEventHandler,
    editEventHandler,
    inputChangeEvent,
    isAdding,
    isEditing,
    isCollapsed = false,
}: GroupFormTypes): JSX.Element {
    const { t } = useTranslation(translateFile);

    return (
        <CollapsibleForm collapse={isCollapsed} title={t("title")}>
            <form className="max-w-full h-auto grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-2 lg:gap-y-2 mb-2">
                <InputField
                    name="code"
                    labelText={t("code-label")}
                    type="text"
                    placeholder={t("code-placeholder")}
                    withLabel={true}
                    containerClasses="w-full"
                    value={formData.name}
                    onChange={inputChangeEvent}
                    minLength={5}
                    maxLength={128}
                    required={true}
                />
                <InputField
                    name="name"
                    labelText={t("group-label")}
                    type="text"
                    placeholder={t("group-placeholder")}
                    withLabel={true}
                    containerClasses="w-full"
                    value={formData.name}
                    onChange={inputChangeEvent}
                    pattern="^[a-zA-Z][a-zA-Z0-9 _]+$"
                    minLength={5}
                    maxLength={128}
                    required={true}
                />
                <InputField
                    type="text"
                    multiple={true}
                    name="description"
                    placeholder={t("desc-placeholder")}
                    withLabel={true}
                    pattern="^[a-zA-Z][a-zA-Z0-9 _]+$"
                    labelText={t("desc-label")}
                    containerClasses="w-full"
                    value={formData.description}
                    onChange={inputChangeEvent}
                />
            </form>
            <div className="max-w-screen h-auto grid gap-1 grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 p-0">
                <AddButton
                    classes="btn-primary btn-wide order-1"
                    text={t("add-btn")}
                    isDisabled={isAdding}
                    clickEvent={addEventHandler}
                />
                <EditButton
                    classes="btn-primary btn-wide order-3 md:order-2"
                    text={t("edit-btn")}
                    isDisabled={isEditing}
                    clickEvent={editEventHandler}
                />
            </div>
        </CollapsibleForm>
    );
}

// FIXME - handle data submittion in add and edit process by useHookForm and yup for regex.

// FIXME - try to handle focus and blur on the form with these coditions:
// 1- if the use clicked on row in the datagrid form opens.
// 2- if there is no row selected in the datagrid form collapsed.
