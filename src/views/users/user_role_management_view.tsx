// import FormContainer from '../../components/form_container.tsx';
// import InputField from '../../components/inputs/input_field.tsx';
// import Textarea from '../../components/inputs/textarea.tsx';
import DataGrid from '../../components/datagrid/datagrid.tsx';
// import AddButton from '../../components/buttons/crud_buttons/add_button.tsx';
// import EditButton from '../../components/buttons/crud_buttons/edit_button.tsx';
// import DeleteButton from '../../components/buttons/crud_buttons/delete_button.tsx';
import PrintButton from '../../components/buttons/crud_buttons/print_button.tsx';
import PDFButton from '../../components/buttons/crud_buttons/pdf_button.tsx';
import ExcelButton from '../../components/buttons/crud_buttons/excel_button.tsx';
import Pagination from '../../components/pagination.tsx';
import {useTranslation} from 'react-i18next';
// import Accordion from "../../components/accordion.tsx";
import {toast} from "react-toastify";
import Dropdown from "../../components/dropdown.tsx";
import SearchForm from "../../components/forms/search_form.tsx";
import RefreshButton from "../../components/buttons/crud_buttons/refresh_button.tsx";
import {
    type ChangeEventHandler,
    type KeyboardEventHandler,
    type MouseEventHandler,
    useCallback,
    useEffect,
    useReducer,
    useRef,
    useState
} from "react";
// import type {userGroupModel} from "../models/users_models.ts";
import getUserRoleTableColumn from "../../components/datagrid/column_definition/user_role_datagrid_columns.ts";
// import UserRolesReducer from "../../states/reducers/user_role_reducer.ts";
// import UserRoleReducer from "../../states/reducers/user_role_reducer.ts";
import type {UserRole} from "../../models/users/user_role_model.ts";
import useUserSettingsStore from "../../states/stores/user_settings_store.ts";
import {useAuthStore} from "../../states/stores/auth_store.ts";
import {
    addUserRole,
    deleteUserRole,
    editUserRole,
    fetchUserRoles,
    searchUserRole
} from "../../states/reducers/actions/user_role_service.ts";
import DataGridSkeleton from "../../components/skeletons/datagrid_skeleton.tsx";
// import {useUserRolesStore} from "../../states/stores/user_role_store.ts";
import UserRoleReducer, {initialViewState} from "../../states/reducers/user_role_reducer.ts";
import UserRoleForm from "../../components/forms/system_user/user_role_form.tsx";
// import LoadingTemplate from "../../components/templates/loading_template.tsx";

const initialFormState: UserRole = {
    id: 0,
    name: "",
    guard_name: "",
    permissions: [],
    updated_at: "",
    created_at: ""
}


const UserRoleManagementView = () => {
    const translateFilePath = "user-management/role"
    const {t} = useTranslation(translateFilePath);

    const {lang, setLang} = useUserSettingsStore()
    const {token} = useAuthStore()
    const searchBtnRef = useRef<HTMLButtonElement>(null)

    const [{
        mainStore,
        fetching,
        editing,
        adding,
        searching
    }, dispatch] = useReducer(UserRoleReducer, initialViewState);

    const [formData, setFormData] = useState<UserRole>(initialFormState)
    const [searchTerm, setSearchTerm] = useState<string>("")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await fetchUserRoles(dispatch, token);
        setFormData(initialFormState);
    }

    const inputChangeEvent: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback((e) => {
        setFormData((formData) => ({...formData, [e.target.name]: e.target.value}))
    }, [])

    // Use useCallback to memoize the onGridSelect function
    const onGridSelect = (data: UserRole[]) => {
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
    } // Dependencies: initialFormState (if it could change, though it's constant)

    // Add Role Event
    const addRoleEvent: MouseEventHandler<HTMLButtonElement> = useCallback(async (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name.trim() || !formData.guard_name.trim()) {
            toast.error(t("name_and_description_required")); // Translate this message
            return;
        }

        // Prepare data for API call (omit ID, timestamps, as backend generates them)
        const newRoleData = {
            name: formData.name.trim(),
            guard_name: formData.guard_name.trim(),
            permissions: formData.permissions, // Assuming permissions are handled elsewhere or default
        };

        try {
            await addUserRole(dispatch, token, newRoleData);
            setFormData(initialFormState); // Reset form on success
            toast.success(t("added_successfully"));
        } catch (err: any) {
            const errorMessage = err.message || t("failed_to_add");
            toast.error(errorMessage);
            console.error("Add Role Error:", err);
        }
    }, [formData, token, dispatch, t]); // Dependencies: formData, token, dispatch, t

    // Edit Role Event
    const editRoleEvent: MouseEventHandler<HTMLButtonElement> = useCallback(async (e) => {
        e.preventDefault();
        // Ensure an item is selected (ID > 0) and name is not empty
        if (formData.id === 0 || !formData.name.trim() || !formData.guard_name.trim()) {
            toast.error(t("select_item_and_fill_name_and_description")); // Translate this message
            return;
        }

        try {
            await editUserRole(dispatch, token, formData); // formData already contains the ID
            setFormData(initialFormState); // Reset form on success
            toast.success(t("edited_successfully"));
        } catch (err: any) {
            const errorMessage = err.message || t("failed_to_edit");
            toast.error(errorMessage);
            console.error("Edit Role Error:", err);
        }
    }, [formData, token, dispatch, t]);

    const searchRoleEvent: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        // console.log("pressed")
        searchUserRole(dispatch, searchTerm, searching)
        // Ensure an item is selected (ID > 0) and name is not empty
    }

    // Delete Role Event
    const deleteRoleEvent: MouseEventHandler<HTMLButtonElement> = useCallback(async (e) => {
        e.preventDefault();
        if (formData.id === 0) {
            toast.error(t("select_item_to_delete")); // Translate this message
            return;
        }

        if (window.confirm(t("confirm_delete_role", {roleName: formData.name}))) {
            try {
                await deleteUserRole(dispatch, token, formData.id);
                setFormData(initialFormState); // Reset form on success
                toast.success(t("deleted_successfully"));
            } catch (err: any) {
                const errorMessage = err.message || t("failed_to_delete");
                toast.error(errorMessage);
                // console.error("Delete Role Error:", err);
            }
        }
    }, [formData, token, dispatch, t]);

    const onInputFieldKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            searchBtnRef.current?.click()
        }
    }
    const changeSearchFormEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value); // Update the parent's state

        // Trigger search button click if the input field is now empty (after user's input)
        // We check value, not the 'term' prop from the current render.
        // if (e.target.value === searchTerm && searching) {
        // }
    }

    const GRID_COLUMNS_DEF = getUserRoleTableColumn(deleteRoleEvent)

    document.title = t('title');
    return (
        <>
            {/*<FormContainer classes="w-full h-auto bg-base-100">*/}
            {/*    /!*<h1 className="text-2xl lg:text-4xl text-center font-bold mb-0.5 mt-8 md:mt-4 lg:mb-2">*!/*/}
            {/*    /!*    {t('title')}*!/*/}
            {/*    /!*</h1>*!/*/}
            {/*    <Accordion title={t("title")} titleClasses={"text-lg ms-7 lg:text-2xl lg:ms-0 m-0"}*/}
            {/*               classes="collapse-arrow h-auto">*/}
            {/*        /!*<form className="w-full h-auto p-1 lg:p-2">*!/*/}
            {/*        <div*/}
            {/*            className="w-full h-auto grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-4 lg:gap-y-2">*/}
            {/*            <InputField*/}
            {/*                name="name"*/}
            {/*                labelText={t('group-label')}*/}
            {/*                fieldType="text"*/}
            {/*                placeholder={t('group-placeholder')}*/}
            {/*                withLabel={true}*/}
            {/*                classes="w-full"*/}
            {/*                value={formData.name}*/}
            {/*                onChange={inputChangeEvent}*/}
            {/*            />*/}
            {/*            <Textarea*/}
            {/*                name="guard_name"*/}
            {/*                placeholder={t('desc-placeholder')}*/}
            {/*                withLabel={true}*/}
            {/*                labelText={t('desc-label')}*/}
            {/*                classes="w-full"*/}
            {/*                value={formData.guard_name}*/}
            {/*                onChange={inputChangeEvent}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <br/>*/}
            {/*        <div*/}
            {/*            className="max-w-screen h-auto grid gap-1 grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 p-0">*/}
            {/*            <AddButton*/}
            {/*                classes="btn-primary btn-wide order-1"*/}
            {/*                text={t('add-btn')}*/}
            {/*                isDisabled={adding}*/}
            {/*                clickEvent={addRoleEvent}*/}
            {/*            />*/}
            {/*            <EditButton*/}
            {/*                classes="btn-primary btn-wide order-3 md:order-2"*/}
            {/*                text={t('edit-btn')}*/}
            {/*                isDisabled={editing}*/}
            {/*                clickEvent={editRoleEvent}*/}
            {/*            />*/}
            {/*            /!*<DeleteButton*!/*/}
            {/*            /!*    classes="btn-primary btn-wide order-5  md:order-3"*!/*/}
            {/*            /!*    text={t('del-btn')}*!/*/}
            {/*            /!*    clickEvent={() => {*!/*/}
            {/*            /!*    }}*!/*/}
            {/*/>*/}
            {/*            /!*<PrintButton*!/*/}
            {/*            /!*    classes="btn-primary btn-wide order-2  md:order-4"*!/*/}
            {/*            /!*    text={t('print-btn')}*!/*/}
            {/*            /!*    clickEvent={() => {*!/*/}
            {/*            /!*    }}*!/*/}
            {/*/>*/}
            {/*            /!*<Dropdown text={t("export-dropdown")} bgColor="primary"*!/*/}
            {/*            /!*          classes={"text-white order-4 btn-wide md:order-5 shadow-md"}>*!/*/}
            {/*            /!*    <li>*!/*/}
            {/*            /!*        <PDFButton*!/*/}
            {/*            /!*            classes="btn-primary btn-wide order-4 md:order-5"*!/*/}
            {/*            /!*            text={t('pdf-btn')}*!/*/}
            {/*            /!*            clickEvent={() => {*!/*/}
            {/*            /!*            }}*!/*/}
            {/*            /!*        />*!/*/}
            {/*            /!*    </li>*!/*/}
            {/*            /!*    <li>*!/*/}
            {/*            /!*        <ExcelButton*!/*/}
            {/*            /!*            classes="btn-primary btn-wide order-6 md:order-6 space-between"*!/*/}
            {/*            /!*            text={t('excel-btn')}*!/*/}
            {/*            /!*            clickEvent={() => {*!/*/}
            {/*            /!*            }}*!/*/}
            {/*            /!*        />*!/*/}
            {/*            /!*    </li>*!/*/}
            {/*            /!*</Dropdown>*!/*/}
            {/*        </div>*/}
            {/*        /!*</form>*!/*/}
            {/*    </Accordion>*/}
            {/*</FormContainer>*/}
            <UserRoleForm formData={formData} editEventHandler={editRoleEvent} addEventHandler={addRoleEvent}
                          inputChangeEvent={inputChangeEvent} isEditing={editing} isAdding={adding}
                          translateFile={translateFilePath}/>

            {/* search , export , refresh and print elements */}
            <div
                className="w-full block bg-base-100 grid! grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-1">
                <RefreshButton
                    classes="btn-primary w-auto order-2 lg:order-1 lg:col-span-2"
                    text={t('refresh-btn')}
                    clickEvent={(e) => {
                        console.log("refresh button")
                        // fetchUserRoles(dispatch, token);
                        // e.preventDefault()
                        fetchData()
                        // console.log(`data from view: ${JSON.stringify(userRoles)}`)
                    }}
                    isDisabled={fetching}
                />
                <SearchForm translateFile={translateFilePath}
                            clickEvent={searchRoleEvent}
                            storeTerm={setSearchTerm}
                            changeInputEvent={changeSearchFormEvent}
                            reference={searchBtnRef}
                            keyPressed={onInputFieldKeyPress}
                    // term={searchTerm}
                    // filterChangeable={false}
                            containerClasses="order-1 col-span-3 lg:order-2 lg:col-span-6 lg:col-end-9">
                    <option defaultChecked>{t("filter-name")}</option>
                    {/*<option>{t("filter-number")}</option>*/}
                </SearchForm>
                <PrintButton
                    classes="btn-primary order-3 order-3 md:order-4 lg:col-span-2"
                    text={t('print-btn')}
                    clickEvent={() => {
                        setLang(lang === "ar" ? "en" : "ar")
                        // dispatch({type: "GET_ROLE", payload: {token, id: 0}})
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
            <div className="w-full md:m-1 lg:m-2 h-dvh bg-gray-100 dark:bg-gray-900 rounded-md flex flex-col">
                {
                    fetching || mainStore.length === 0 ?
                        (<DataGridSkeleton/>) :
                        (<DataGrid fetchSelectedData={onGridSelect} columnDefs={GRID_COLUMNS_DEF}
                                   rowData={mainStore}/>)
                }
            </div>
            <Pagination/>
        </>
    );
};

export default UserRoleManagementView;

//
// import FormContainer from '../../components/form_container.tsx';
// import InputField from '../../components/inputs/input_field.tsx';
// import Textarea from '../../components/inputs/textarea.tsx';
// import DataGrid from '../../components/datagrid/datagrid.tsx';
// import AddButton from '../../components/buttons/crud_buttons/add_button.tsx';
// import EditButton from '../../components/buttons/crud_buttons/edit_button.tsx';
// import DeleteButton from '../../components/buttons/crud_buttons/delete_button.tsx'; // Re-introducing DeleteButton
// import PrintButton from '../../components/buttons/crud_buttons/print_button.tsx';
// import PDFButton from '../../components/buttons/crud_buttons/pdf_button.tsx';
// import ExcelButton from '../../components/buttons/crud_buttons/excel_button.tsx';
// import Pagination from '../../components/pagination.tsx';
// import {useTranslation} from 'react-i18next';
// import Accordion from "../../components/accordion.tsx";
// import {toast, ToastContainer} from "react-toastify"; // Ensure ToastContainer is imported from react-toastify
// import Dropdown from "../../components/dropdown.tsx";
// import SearchForm from "../../components/forms/search_form.tsx";
// import RefreshButton from "../../components/buttons/crud_buttons/refresh_button.tsx";
// import {type ChangeEventHandler, type MouseEventHandler, useCallback, useEffect, useReducer, useState} from "react";
// import {userGroupTableColumn} from "../../components/datagrid/column_definition/user_role_datagrid_columns.ts";
// import UserRoleReducer from "../../states/reducers/user_role_reducer.ts";
// import {type UserRole, type UserRolesState} from "../../models/users/user_role_model.ts"; // Import initialReducerState
// import useUserSettingsStore from "../../states/stores/user_settings_store.ts";
// import {useAuthStore} from "../../states/stores/auth_store.ts";
// import {
//     fetchUserRoles,
//     addUserRole,
//     editUserRole,
//     deleteUserRole
// } from "../../states/reducers/actions/user_role_service.ts"; // Import CRUD actions
// import DataGridSkeleton from "../../components/skeletons/datagrid_skeleton.tsx";
//
// // Initial state for the form. ID should ideally start at null or undefined
// // for new entries, and be set when an existing item is selected.
// const initialFormState: UserRole = {
//     id: 0, // Using 0 to denote a new role, >0 for existing.
//     name: "",
//     guard_name: "", // Changed from group_description based on model
//     permissions: [],
//     updated_at: "",
//     created_at: ""
// }
//
// const initialViewState: UserRolesState = {
//     userRoles: [],
//     searchTerm: "",
//     loading: false,
//     error: null
// }
//
// const UserRoleManagementView = () => {
//     const translateFilePath = "user-management/role"
//     const {t} = useTranslation(translateFilePath);
//
//     const {lang, setLang} = useUserSettingsStore(); // setLang is not used for data fetching/filtering, but for language toggling
//     const {token} = useAuthStore(); // Auth token from your store
//
//     // Use initialReducerState from model definition for consistency
//     const [state, dispatch] = useReducer(UserRoleReducer, initialViewState);
//
//     const [formData, setFormData] = useState<UserRole>(initialFormState);
//
//     // Fetch roles when component mounts or token changes
//     useEffect(() => {
//         // Only fetch if token is available
//         if (token) {
//             fetchUserRoles(dispatch, token);
//         }
//     }, [token]); // Dependency array to refetch if token changes
//
//     // Input change handler for form fields
//     const inputChangeEvent: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback((e) => {
//         setFormData((prevFormData) => ({...prevFormData, [e.target.name]: e.target.value}));
//     }, []); // No dependencies as it only uses prevFormData
//
//     // DataGrid row selection handler
//     const onGridSelect = useCallback((data: UserRole[]) => {
//         if (data.length > 0) {
//             setFormData(data[0]); // Set formData to the first selected item
//             console.log("Selected Role ID:", data[0].id);
//         } else {
//             setFormData(initialFormState); // Clear form if nothing is selected
//             console.log("No row selected.");
//         }
//     }, []); // No dependencies needed as initialFormState is constant
//
//     // --- CRUD Event Handlers ---
//
//     // Add Role Event
//     const addRoleEvent: MouseEventHandler<HTMLButtonElement> = useCallback(async (e) => {
//         e.preventDefault();
//         // Basic validation
//         if (!formData.name.trim() || !formData.guard_name.trim()) {
//             toast.error(t("name_and_description_required")); // Translate this message
//             return;
//         }
//
//         // Prepare data for API call (omit ID, timestamps, as backend generates them)
//         const newRoleData = {
//             name: formData.name.trim(),
//             guard_name: formData.guard_name.trim(),
//             permissions: formData.permissions, // Assuming permissions are handled elsewhere or default
//         };
//
//         try {
//             await addUserRole(dispatch, token, newRoleData);
//             setFormData(initialFormState); // Reset form on success
//             toast.success(t("added_successfully"));
//         } catch (err: any) {
//             const errorMessage = err.message || t("failed_to_add");
//             toast.error(errorMessage);
//             console.error("Add Role Error:", err);
//         }
//     }, [formData, token, dispatch, t]); // Dependencies: formData, token, dispatch, t
//
//     // Edit Role Event
//     const editRoleEvent: MouseEventHandler<HTMLButtonElement> = useCallback(async (e) => {
//         e.preventDefault();
//         // Ensure an item is selected (ID > 0) and name is not empty
//         if (formData.id === 0 || !formData.name.trim() || !formData.guard_name.trim()) {
//             toast.error(t("select_item_and_fill_name_and_description")); // Translate this message
//             return;
//         }
//
//         try {
//             await editUserRole(dispatch, token, formData); // formData already contains the ID
//             setFormData(initialFormState); // Reset form on success
//             toast.success(t("edited_successfully"));
//         } catch (err: any) {
//             const errorMessage = err.message || t("failed_to_edit");
//             toast.error(errorMessage);
//             console.error("Edit Role Error:", err);
//         }
//     }, [formData, token, dispatch, t]);
//
//     // Delete Role Event
//     const deleteRoleEvent: MouseEventHandler<HTMLButtonElement> = useCallback(async (e) => {
//         e.preventDefault();
//         if (formData.id === 0) {
//             toast.error(t("select_item_to_delete")); // Translate this message
//             return;
//         }
//
//         if (window.confirm(t("confirm_delete_role", {roleName: formData.name}))) {
//             try {
//                 await deleteUserRole(dispatch, token, formData.id);
//                 setFormData(initialFormState); // Reset form on success
//                 toast.success(t("deleted_successfully"));
//             } catch (err: any) {
//                 const errorMessage = err.message || t("failed_to_delete");
//                 toast.error(errorMessage);
//                 console.error("Delete Role Error:", err);
//             }
//         }
//     }, [formData, token, dispatch, t]);
//
//     // Search input change handler
//     const onSearchEventChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
//         dispatch({type: 'SET_SEARCH_TERM', payload: {term: e.target.value}});
//     }, [dispatch]);
//
//     // Filter roles based on searchTerm
//     // const filteredRoles = userRoles.filter(role =>
//     //     role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     //     role.guard_name.toLowerCase().includes(searchTerm.toLowerCase())
//     // );
//
//     // Update document title dynamically
//     document.title = t('title');
//
//     return (
//         <>
//             <FormContainer classes="w-full h-auto bg-base-100">
//                 <Accordion title={t("title")} titleClasses={"text-lg ms-7 lg:text-2xl lg:ms-0 m-0"}
//                            classes="collapse-arrow h-auto">
//                     <div
//                         className="w-full h-auto grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-4 lg:gap-y-2">
//                         <InputField
//                             name="name"
//                             labelText={t('name-label')}
//                             fieldType="text"
//                             placeholder={t('name-placeholder')}
//                             withLabel={true}
//                             classes="w-full"
//                             value={formData.name}
//                             onChange={inputChangeEvent}
//                         />
//                         <Textarea
//                             name="guard_name"
//                             placeholder={t('desc-placeholder')}
//                             withLabel={true}
//                             labelText={t('desc-label')}
//                             classes="w-full"
//                             value={formData.guard_name}
//                             onChange={inputChangeEvent}
//                         />
//                     </div>
//                     <br/>
//                     <div
//                         className="max-w-screen h-auto grid gap-1 grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 p-0">
//                         <AddButton
//                             classes="btn-primary btn-wide order-1"
//                             text={t('add-btn')}
//                             clickEvent={addRoleEvent}
//                         />
//                         <EditButton
//                             classes="btn-primary btn-wide order-3 md:order-2"
//                             text={t('edit-btn')}
//                             clickEvent={editRoleEvent}
//                         />
//                         <DeleteButton
//                             classes="btn-primary btn-wide order-5 md:order-3"
//                             text={t('del-btn')}
//                             clickEvent={deleteRoleEvent}
//                         />
//                         {/* Print and Export buttons (optional, uncomment if needed) */}
//                         {/*<PrintButton*/}
//                         {/* classes="btn-primary btn-wide order-2  md:order-4"*/}
//                         {/* text={t('print-btn')}*/}
//                         {/* clickEvent={() => {}}*/}
//                         {/*/>*/}
//                         {/*<Dropdown text={t("export-dropdown")} bgColor="primary"*/}
//                         {/* classes={"text-white order-4 btn-wide md:order-5 shadow-md"}>*/}
//                         {/* <li>*/}
//                         {/* <PDFButton*/}
//                         {/* classes="btn-primary btn-wide order-4 md:order-5"*/}
//                         {/* text={t('pdf-btn')}*/}
//                         {/* clickEvent={() => {}}*/}
//                         {/* />*/}
//                         {/* </li>*/}
//                         {/* <li>*/}
//                         {/* <ExcelButton*/}
//                         {/* classes="btn-primary btn-wide order-6 md:order-6 space-between"*/}
//                         {/* text={t('excel-btn')}*/}
//                         {/* clickEvent={() => {}}*/}
//                         {/* />*/}
//                         {/* </li>*/}
//                         {/*</Dropdown>*/}
//                     </div>
//                 </Accordion>
//             </FormContainer>
//
//             <div
//                 className="w-full block bg-base-100 grid! grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-1">
//                 <RefreshButton
//                     classes="btn-primary w-auto order-2 lg:order-1 lg:col-span-2"
//                     text={t('refresh-btn')}
//                     clickEvent={() => {
//                         fetchUserRoles(dispatch, token); // Refresh data from API
//                     }}
//                 />
//                 <SearchForm translateFile={translateFilePath}
//                             containerClasses="order-1 col-span-3 lg:order-2 lg:col-span-6 lg:col-end-9"
//                             onSearchChange={onSearchEventChange} // Pass the search handler
//                 >
//                     <option defaultChecked>{t("filter-name")}</option>
//                     {/* Add other filter options if applicable */}
//                 </SearchForm>
//                 <PrintButton
//                     classes="btn-primary order-3 order-3 md:order-4 lg:col-span-2"
//                     text={t('print-btn')}
//                     clickEvent={() => {
//                         // Example: Toggling language (not directly related to Print, but kept from original)
//                         setLang(lang === "ar" ? "en" : "ar");
//                         // For actual print, you'd trigger browser print or generate print-friendly content
//                     }}
//                 />
//                 <Dropdown text={t("export-dropdown")} bgColor="primary" uniqueKey="export-drop-menu"
//                           classes={"btn-primary order-4 lg:order-4 shadow-md lg:col-span-2"}>
//                     <li>
//                         <PDFButton
//                             classes="btn-primary"
//                             text={t('pdf-btn')}
//                             clickEvent={() => {
//                             }}
//                         />
//                     </li>
//                     <li>
//                         <ExcelButton
//                             classes="btn-primary"
//                             text={t('excel-btn')}
//                             clickEvent={() => {
//                             }}
//                         />
//                     </li>
//                 </Dropdown>
//             </div>
//
//             <div className="w-full md:m-1 lg:m-2 h-dvh bg-gray-100 dark:bg-gray-900 rounded-md flex flex-col">
//                 {/* Display loading skeleton while fetching */}
//                 {state.loading && <DataGridSkeleton/>}
//
//                 {/* Display error message if there's an error */}
//                 {!state.loading && state.error && (
//                     <div className="text-red-500 p-4 text-center">
//                         <p>{t("data_fetch_error", {error: state.error})}</p> {/* Translate this message */}
//                         <p>{t("please_try_again")}</p>
//                     </div>
//                 )}
//
//                 {/* Display data grid when not loading and no error */}
//                 {!state.loading && !state.error && (
//                     <DataGrid
//                         fetchSelectedData={onGridSelect}
//                         columnDefs={userGroupTableColumn}
//                         rowData={state.userRoles} // Use filtered roles for display
//                     />
//                 )}
//             </div>
//             <Pagination/>
//             <ToastContainer/> {/* Toast container should ideally be at the top level of your app */}
//         </>
//     );
// };
//
// export default UserRoleManagementView;