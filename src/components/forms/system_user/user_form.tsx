import { useTranslation } from "react-i18next";
import CollapsibleForm from "../collapsible_form";
import InputField from "../../inputs/input_field";
import type { ChangeEventHandler, MouseEventHandler } from "react";
import AddButton from "../../buttons/crud_buttons/add_button";
import EditButton from "../../buttons/crud_buttons/edit_button";
import Select from "../../inputs/select";
import type { User } from "../../../models/user_system/user_models";

interface UserFormType {
    translateFile: string;
    formData: User;
    addEventHandler: MouseEventHandler<HTMLButtonElement>;
    editEventHandler: MouseEventHandler<HTMLButtonElement>;
    inputChangeEvent: ChangeEventHandler<HTMLInputElement>;
    isAdding: boolean;
    isEditing: boolean;
    roles: User[];
}

export default function UserForm({
    translateFile,
    formData,
    addEventHandler,
    editEventHandler,
    inputChangeEvent,
    isAdding,
    isEditing,
    roles,
}: UserFormType) {
    const { t } = useTranslation(translateFile);
    return (
        <CollapsibleForm title={t("title")}>
            <div className="w-full h-auto grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-4 lg:gap-y-2 mb-4">
                <Select
                    name="role_id"
                    withLabel={true}
                    labelText={t("role-select-label")}
                >
                    <option disabled={true}>Pick A role for the user</option>
                    {roles.map((role) => (
                        <option value={role.id!}>{role.name}</option>
                    ))}
                </Select>
                <InputField
                    name="name"
                    labelText={t("name-label")}
                    type="text"
                    placeholder={t("name-placeholder")}
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
                    type="username"
                    multiple={true}
                    name="username"
                    placeholder={t("username-placeholder")}
                    withLabel={true}
                    pattern="^[a-zA-Z][a-zA-Z0-9 _]+$"
                    labelText={t("username-label")}
                    containerClasses="w-full"
                    minLength={8}
                    maxLength={64}
                    required={true}
                    value={formData.username}
                    onChange={inputChangeEvent}
                />
                <InputField
                    type="email"
                    multiple={true}
                    name="email"
                    placeholder={t("email-placeholder")}
                    withLabel={true}
                    pattern="^[a-zA-Z][a-zA-Z0-9 _]+$"
                    labelText={t("email-label")}
                    containerClasses="w-full"
                    minLength={16}
                    maxLength={128}
                    value={formData.email}
                    onChange={inputChangeEvent}
                />

                {/* <Toggle
                    classes="justify-between lg:flex-row-reverse md:col-span-2 lg:col-start-10 rtl:lg:col-start-8 text-sm md:text-md lg:text-lg lg:order-2 lg:col-end-13"
                    name="is_active"
                    withCheckMark={false}
                    labelText={t("is-active")}
                    withLabel={true}
                /> */}
                {/* <Toggle
                    classes="justify-between lg:flex-row-reverse md:col-span-2 lg:col-start-10 rtl:lg:col-start-8 text-sm md:text-md lg:text-lg lg:order-4 lg:col-end-13"
                    name="change_password"
                    withCheckMark={false}
                    labelText={t("change-password")}
                    withLabel={true}
                    className="rtl:lg:text-md"
                /> */}
            </div>
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
