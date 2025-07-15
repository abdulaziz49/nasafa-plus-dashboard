import FormContainer from '../../components/form_container.tsx';
import InputField from '../../components/inputs/input_field.tsx';
import Textarea from '../../components/inputs/textarea.tsx';
import DataGrid from '../../components/datagrid/datagrid.tsx';
import AddButton from '../../components/buttons/crud_buttons/add_button.tsx';
import EditButton from '../../components/buttons/crud_buttons/edit_button.tsx';
// import DeleteButton from '../../components/buttons/crud_buttons/delete_button.tsx';
import PrintButton from '../../components/buttons/crud_buttons/print_button.tsx';
import PDFButton from '../../components/buttons/crud_buttons/pdf_button.tsx';
import ExcelButton from '../../components/buttons/crud_buttons/excel_button.tsx';
import Pagination from '../../components/pagination.tsx';
import {useTranslation} from 'react-i18next';
import Accordion from "../../components/accordion.tsx";
import {toast} from "react-toastify";
import {ToastContainer} from "react-toastify/unstyled";
import Dropdown from "../../components/dropdown.tsx";
import SearchForm from "../../components/forms/search_form.tsx";
import RefreshButton from "../../components/buttons/crud_buttons/refresh_button.tsx";
import {type ChangeEventHandler, type MouseEventHandler, useCallback, useReducer, useState} from "react";
// import type {userGroupModel} from "../models/users_models.ts";
import {userGroupTableColumn} from "../../components/datagrid/column_definition/users_datagrid_columns.ts";
// import UserRolesReducer from "../../states/reducers/user_role_reducer.ts";
import UserRoleReducer, {userRoleInitialState} from "../../states/reducers/user_role_reducer.ts";
import type {UserRole} from "../../models/users/user_role_model.ts";
import useUserSettingsStore from "../../states/stores/user_settings_store.ts";
import {useAuthStore} from "../../states/stores/auth_store.ts";

const initialFormState: UserRole = {
    id: 0,
    roleName: "",
    description: "",
    userCreatorId: 1,
}

const UserRoleManagementView = () => {
    const translateFilePath = "user-management/role"
    const {t} = useTranslation(translateFilePath);

    const {lang, setLang} = useUserSettingsStore()
    const {token} = useAuthStore()

    const [state, dispatch] = useReducer(UserRoleReducer, userRoleInitialState);

    // const [groupsData, setGroupsData] = useState<userGroupModel[]>([])
    const [formData, setFormData] = useState<UserRole>(initialFormState)
    // const gridRef = useRef(null)
    // const [selectedID, setSelectedID] = useState<number>(0)

    const inputChangeEvent: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        setFormData((formData) => ({...formData, [e.target.name]: e.target.value}))
    }

    // Use useCallback to memoize the onGridSelect function
    const onGridSelect = useCallback((data: UserRole[]) => {
        console.log('clicked row')
        if (data.length > 0) {
            // Set formData to the first selected item
            setFormData(data[0]);
            // Log the ID from the selected item
            console.log("Selected ID:", data[0].id);
        } else {
            // If nothing is selected, clear the form or reset to initial state
            setFormData(initialFormState);
            console.log("No row selected.");
        }
    }, []); // Dependencies: initialFormState (if it could change, though it's constant)

    const addGroupEvent: MouseEventHandler<HTMLButtonElement> = (e): boolean => {
        e.preventDefault()
        if (formData.roleName.trim().length > 0) {
            console.log("added")
            // formData.id = groupsData.length + 1
            // setGroupsData((prevState) => ([...prevState, formData]))
            setFormData(initialFormState)
            toast.success("Added Successfully")
            return true
        }
        return false
    }

    const editGroupEvent: MouseEventHandler<HTMLButtonElement> = useCallback((e): boolean => {
        e.preventDefault();
        // Ensure an item is selected and group_name is not empty
        if (formData.id > 0 && formData.roleName.trim().length > 0) {
            // --- FIX: Create a new array with the updated item ---
            // const updatedGroups = groupsData.map((element) => {
            //     if (element.id === formData.id) {
            //         // Return a NEW object for the updated element
            //         return {
            //             ...element, // Keep existing properties
            //             group_name: formData.group_name,
            //             group_description: formData.group_description, // Corrected to formData.group_description
            //             user_creator: formData.user_creator,
            //         };
            //     }
            //     return element; // Return unchanged elements as they are
            // });
            // setGroupsData(updatedGroups); // Update state with the new array
            setFormData(initialFormState); // Reset form
            toast.success(t("edited_successfully"));
            return true;
        }
        toast.error(t("select_item_and_fill_name")); // Provide user feedback for invalid action
        return false;
    }, [formData, t]); // Dependencies: formData, groupsData, t for translation

    // const deleteGroupEvent: MouseEventHandler<HTMLButtonElement> = (e: MouseEvent, id: number): boolean => {
    //     e.preventDefault()
    //     if (formData.group_name === "") {
    //         groupsData.filter((element) => (element.id !== id))
    //         setGroupsData(() => ([...groupsData]))
    //         // setSelectedID(0)
    //         toast("Deleted Successfully")
    //         return true
    //     }
    //     return false
    // }

    document.title = t('title');
    return (
        <>
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
                            name="roleName"
                            labelText={t('group-label')}
                            fieldType="text"
                            placeholder={t('group-placeholder')}
                            withLabel={true}
                            classes="w-full"
                            value={formData.roleName}
                            onChange={inputChangeEvent}
                        />
                        <Textarea
                            name="description"
                            placeholder={t('desc-placeholder')}
                            withLabel={true}
                            labelText={t('desc-label')}
                            classes="w-full"
                            value={formData.description}
                            onChange={inputChangeEvent}
                        />
                    </div>
                    <br/>
                    <div
                        className="max-w-screen h-auto grid gap-1 grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 p-0">
                        <AddButton
                            classes="btn-primary btn-wide order-1"
                            text={t('add-btn')}
                            // onClick={()=> {}}
                            clickEvent={addGroupEvent}
                        />
                        <EditButton
                            classes="btn-primary btn-wide order-3 md:order-2"
                            text={t('edit-btn')}
                            clickEvent={editGroupEvent}
                        />
                        {/*<DeleteButton*/}
                        {/*    classes="btn-primary btn-wide order-5  md:order-3"*/}
                        {/*    text={t('del-btn')}*/}
                        {/*    clickEvent={() => {*/}
                        {/*    }}*/}
                        {/*/>*/}
                        {/*<PrintButton*/}
                        {/*    classes="btn-primary btn-wide order-2  md:order-4"*/}
                        {/*    text={t('print-btn')}*/}
                        {/*    clickEvent={() => {*/}
                        {/*    }}*/}
                        {/*/>*/}
                        {/*<Dropdown text={t("export-dropdown")} bgColor="primary"*/}
                        {/*          classes={"text-white order-4 btn-wide md:order-5 shadow-md"}>*/}
                        {/*    <li>*/}
                        {/*        <PDFButton*/}
                        {/*            classes="btn-primary btn-wide order-4 md:order-5"*/}
                        {/*            text={t('pdf-btn')}*/}
                        {/*            clickEvent={() => {*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <ExcelButton*/}
                        {/*            classes="btn-primary btn-wide order-6 md:order-6 space-between"*/}
                        {/*            text={t('excel-btn')}*/}
                        {/*            clickEvent={() => {*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*    </li>*/}
                        {/*</Dropdown>*/}
                    </div>
                    {/*</form>*/}
                </Accordion>
            </FormContainer>

            {/* search , export , refresh and print elements */}
            <div
                className="w-full block bg-base-100 grid! grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-1">
                <RefreshButton
                    classes="btn-primary w-auto order-2 lg:order-1 lg:col-span-2"
                    text={t('refresh-btn')}
                    clickEvent={() => {
                        setLang(lang === "ar" ? "en" : "ar")
                    }}
                />
                <SearchForm translateFile={translateFilePath}
                    // filterChangeable={false}
                            containerClasses="order-1 col-span-3 lg:order-2 lg:col-span-6 lg:col-end-9">
                    <option defaultChecked>{t("filter-name")}</option>
                    {/*<option>{t("filter-number")}</option>*/}
                </SearchForm>
                <PrintButton
                    classes="btn-primary order-3 order-3 md:order-4 lg:col-span-2"
                    text={t('print-btn')}
                    clickEvent={() => {
                        dispatch({type: "GET_ROLE", payload: {token, id: 0}})
                    }}
                />
                <Dropdown text={t("export-dropdown")} bgColor="primary" uniqueKey="export-drop-menu"
                          classes={"btn-primary order-4 lg:order-4 shadow-md lg:col-span-2"}>
                    <li>
                        <PDFButton
                            classes="btn-primary"
                            text={t('pdf-btn')}
                            clickEvent={() => {
                            }}
                        />
                    </li>
                    <li>
                        <ExcelButton
                            classes="btn-primary"
                            text={t('excel-btn')}
                            clickEvent={() => {
                            }}
                        />
                    </li>
                </Dropdown>
            </div>

            {/*The outer div can still have its global styling*/}
            <div className="w-full md:m-1 lg:m-2 h-dvh bg-gray-100 dark:bg-gray-900 rounded-md shadow-lg flex flex-col">
                <DataGrid fetchSelectedData={onGridSelect} columnDefs={userGroupTableColumn} rowData={state.userRoles}/>
            </div>
            <Pagination/>
            <ToastContainer/>
        </>
    );
};

export default UserRoleManagementView;
