import Accordion from "../../accordion.tsx";
import InputField from "../../inputs/input_field.tsx";
import Textarea from "../../inputs/textarea.tsx";
import AddButton from "../../buttons/crud_buttons/add_button.tsx";
import EditButton from "../../buttons/crud_buttons/edit_button.tsx";
import FormContainer from "../../form_container.tsx";
import {useTranslation} from "react-i18next";
import type {ChangeEventHandler, MouseEventHandler} from "react";
import type {UserRole} from "../../../models/users/user_role_model.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'
import {useForm} from "react-hook-form";

interface UserRoleFromTypes {
    translateFile: string
    formData: UserRole
    addEventHandler: MouseEventHandler<HTMLButtonElement>
    editEventHandler: MouseEventHandler<HTMLButtonElement>
    inputChangeEvent: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    isAdding: boolean
    isEditing: boolean
}

// 1. Define the schema for your form data
const schema = yup.object({
    id: yup.number().optional(),
    name: yup.string().required('Full Name is required').min(3, 'Full Name must be at least 3 characters'),
    guard_name: yup.string().optional().matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers'),
}).required(); // Ensures the whole object is required

// 2. Define the TypeScript interface for your form data
type FormData = yup.InferType<typeof schema>;

export default function UserRoleForm({
                                         translateFile,
                                         formData,
                                         addEventHandler,
                                         editEventHandler,
                                         inputChangeEvent,
                                         isAdding, isEditing,
                                     }: UserRoleFromTypes) {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<FormData>({
        resolver: yupResolver(schema), // Connect Yup schema to React Hook Form
    });

    const {t} = useTranslation(translateFile)
    return (
        <FormContainer classes="w-full h-auto bg-base-100">
            {/*<h1 className="text-2xl lg:text-4xl text-center font-bold mb-0.5 mt-8 md:mt-4 lg:mb-2">*/}
            {/*    {t('title')}*/}
            {/*</h1>*/}
            <Accordion title={t("title")} titleClasses={"text-lg ms-7 lg:text-2xl lg:ms-0 m-0"}
                       classes="collapse-arrow h-auto">
                {/*<form className="w-full h-auto p-1 lg:p-2">*/}
                <div
                    className="w-full h-auto grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-4 lg:gap-y-2">
                    <InputField
                        // name="name"
                        labelText={t('group-label')}
                        fieldType="text"
                        placeholder={t('group-placeholder')}
                        withLabel={true}
                        classes="w-full"
                        // error={errors.name.message}
                        // value={formData.name}
                        {...register('name')}
                        onChange={inputChangeEvent}
                    />
                    <Textarea
                        // name="guard_name"
                        placeholder={t('desc-placeholder')}
                        withLabel={true}
                        labelText={t('desc-label')}
                        classes="w-full"
                        {...register('guard_name')}
                        // value={formData.guard_name}
                        onChange={inputChangeEvent}
                    />
                </div>
                <br/>
                <div
                    className="max-w-screen h-auto grid gap-1 grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 p-0">
                    <AddButton
                        classes="btn-primary btn-wide order-1"
                        text={t('add-btn')}
                        isDisabled={isAdding}
                        clickEvent={addEventHandler}
                    />
                    <EditButton
                        classes="btn-primary btn-wide order-3 md:order-2"
                        text={t('edit-btn')}
                        isDisabled={isEditing}
                        clickEvent={editEventHandler}
                    />
                </div>
            </Accordion>
        </FormContainer>
    )
}