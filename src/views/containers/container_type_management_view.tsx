// // import { useTranslation } from 'react-i18next';
// // import FormContainer from '../../components/form_container.tsx';
// // import InputField from '../../components/inputs/input_field.tsx';
// // // import Select from "../../components/inputs/select.tsx";
// // import Textarea from '../../components/inputs/textarea.tsx';
// // import AddButton from '../../components/buttons/crud_buttons/add_button.tsx';
// // import EditButton from '../../components/buttons/crud_buttons/edit_button.tsx';
// // import DeleteButton from '../../components/buttons/crud_buttons/delete_button.tsx';
// // import PrintButton from '../../components/buttons/crud_buttons/print_button.tsx';
// // import PDFButton from '../../components/buttons/crud_buttons/pdf_button.tsx';
// // import ExcelButton from '../../components/buttons/crud_buttons/excel_button.tsx';
// // import DataGrid from '../../components/datagrid/datagrid.tsx';
// // import Pagination from '../../components/pagination.tsx';
// // import SearchForm from '../../components/forms/search_form.tsx';

import TypeManagementView from "../type_management_view";

// // const ContainerTypeManagementView = () => {
// // 	const translateFilePath: string = 'container-management/type';
// // 	const { t } = useTranslation(translateFilePath);
// // 	document.title = t('title');
// // 	return (
// // 		<>
// // 			<FormContainer classes="w-full h-auto bg-base-100">
// // 				<h1 className="text-2xl lg:text-4xl text-center font-bold mb-0.5 mt-8 md:mt-0 lg:mb-4">
// // 					{t('title')}
// // 				</h1>
// // 				<form className="w-full h-auto p-1 lg:p-2">
// // 					<div className="w-full grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-12 lg:grid-rows-1 md:gap-x-8 lg:gap-y-2">
// // 						<InputField
// // 							name="type_name"
// // 							labelText={t('type-name-label')}
// // 							type="text"
// // 							placeholder={t('type-name-placeholder')}
// // 							withLabel={true}
// // 							containerClasses="w-full w-full lg:col-span-6"
// // 							onChange={() => {}}
// // 						/>
// // 						<InputField
// // 							name="type_code"
// // 							labelText={t('type-code-label')}
// // 							type="text"
// // 							placeholder={t('type-code-placeholder')}
// // 							withLabel={true}
// // 							containerClasses="w-full w-full lg:col-span-6"
// // 							onChange={() => {}}
// // 						/>
// // 						{/*<Select name="type_class"*/}
// // 						{/*		labelText={t('type-class-label')}*/}
// // 						{/*		withLabel={true}*/}
// // 						{/*		classes="w-full w-full lg:col-span-6">*/}
// // 						{/*	<option selected >1</option>*/}
// // 						{/*	<option>2</option>*/}
// // 						{/*	<option>3</option>*/}
// // 						{/*</Select>*/}

// // 						<Textarea
// // 							name="type_description"
// // 							placeholder={t('type-description-placeholder')}
// // 							withLabel={true}
// // 							labelText={t('type-description-label')}
// // 							classes="w-full w-full lg:col-span-12"
// // 						/>
// // 					</div>
// // 					<br />

// // 					<div className="max-w-screen h-auto grid gap-2 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1">
// // 						<AddButton
// // 							classes="btn-primary btn-wide btn-wide order-1"
// // 							text={t('add-btn')}
// // 							clickEvent={() => {}}
// // 						/>
// // 						<EditButton
// // 							classes="btn-primary btn-wide btn-wide order-3 md:order-2"
// // 							text={t('edit-btn')}
// // 							clickEvent={() => {}}
// // 						/>
// // 						<DeleteButton
// // 							classes="btn-primary btn-wide btn-wide order-5  md:order-3"
// // 							text={t('del-btn')}
// // 							clickEvent={() => {}}
// // 						/>
// // 						<PrintButton
// // 							classes="btn-primary btn-wide btn-wide order-2  md:order-4"
// // 							text={t('print-btn')}
// // 							clickEvent={() => {}}
// // 						/>
// // 						<PDFButton
// // 							classes="btn-primary btn-wide btn-wide order-4  md:order-5"
// // 							text={t('pdf-btn')}
// // 							clickEvent={() => {}}
// // 						/>
// // 						<ExcelButton
// // 							classes="btn-primary btn-wide btn-wide order-6  md:order-6"
// // 							text={t('excel-btn')}
// // 							clickEvent={() => {}}
// // 						/>
// // 					</div>
// // 				</form>
// // 			</FormContainer>

// // 			<SearchForm ={translateFilePath}>
// // 				<option selected>{t('type-name')}</option>
// // 				<option>{t('type-code')}</option>
// // 			</SearchForm>
// // 			<DataGrid />
// // 			<Pagination />
// // 		</>
// // 	);
// // };

// // export default ContainerTypeManagementView;


// // import { useTranslation } from "react-i18next";
// // import DataGridSkeleton from "../../components/skeletons/datagrid_skeleton";
// // import DataGrid from "../../components/datagrid/datagrid";
// // import Pagination from "../../components/pagination";
// // import ExcelButton from "../../components/buttons/crud_buttons/excel_button";
// // import PDFButton from "../../components/buttons/crud_buttons/pdf_button";
// // import Dropdown from "../../components/dropdown";
// // import PrintButton from "../../components/buttons/crud_buttons/print_button";
// // import SearchForm from "../../components/forms/search_form";
// // import RefreshButton from "../../components/buttons/crud_buttons/refresh_button";
// // import TruckTypeForm from "../../components/forms/trucks/truck_type_form";
// // import { useAuthStore } from "../../states/stores/auth_store";
// // import {
// //     useCallback,
// //     useEffect,
// //     useReducer,
// //     useState,
// //     type ChangeEventHandler,
// //     type MouseEventHandler,
// // } from "react";
// // import type { TruckType } from "../../models/truck/truck_type_models";
// // import {
// //     addTrucKType,
// //     deleteTrucKType,
// //     editTrucKType,
// //     fetchTruckTypes,
// //     searchTrucKType,
// // } from "../../states/reducers/actions/services/truck/truck_type_service";
// // import TruckTypeReducer, {
// //     initialTruckTypeState,
// // } from "../../states/reducers/storage/truck/truck_type_reducer";
// // import type { DataGridGenericType } from "../../components/datagrid/datagrid_generic_type";
// // import { toast } from "react-toastify";
// // import getTruckTypeTableColumn from "../../components/datagrid/column_definition/truck/truck_type_datagrid_columns";
// // import trimDataObjectStrings from "../../utils/trim_data_object_strings";

// // const initialFormState: TruckType = {
// //     id: 0,
// //     name: "",
// //     description: "",
// //     // permissions: [],
// //     // is_locked: false,
// //     updated_at: "",
// //     created_at: "",
// // };

// // const TruckTypeManagementView = () => {
// //     const translateFilePath = "truck-management/type";
// //     const { t } = useTranslation(translateFilePath);

// //     const { token } = useAuthStore();

// //     const [{ mainStore, fetching, editing, adding, searching }, dispatch] =
// //         useReducer(TruckTypeReducer, initialTruckTypeState);

// //     const [formData, setFormData] = useState<TruckType>(initialFormState);
// //     const [isFormCollapsed, setIsFormCollapsed] = useState<boolean>(false);
// //     const [searchTerm, setSearchTerm] = useState<string>("");

// //     // Fetch all user roles from the backend
// //     const fetchData = useCallback(async () => {
// //         await fetchTruckTypes(dispatch, token);
// //         setFormData(initialFormState);
// //     }, [token]);

// //     useEffect(() => {
// //         fetchData();
// //     }, [fetchData]);

// //     // TODO - handle open and close collapse on user select row from datagrid using useEffect
// //     useEffect(() => {
// //         if (formData === initialFormState) {
// //             setIsFormCollapsed(false);
// //         } else {
// //             setIsFormCollapsed(true);
// //         }
// //     }, [formData]);

// //     // Handle input changes for the form fields
// //     const inputChangeEvent: ChangeEventHandler<
// //         HTMLInputElement | HTMLTextAreaElement
// //     > = useCallback((e) => {
// //         setFormData((formData) => ({
// //             ...formData,
// //             [e.target.name]: e.target.value,
// //         }));
// //     }, []);

// //     // Handle row selection in the data grid
// //     const onGridSelect = (data: DataGridGenericType[]) => {
// //         if (data.length > 0) {
// //             const truckType: TruckType | undefined = mainStore.find(
// //                 (role) => role.id === data[0].id
// //             );
// //             setFormData(truckType!);
// //         } else {
// //             setFormData(initialFormState);
// //         }
// //     };

// //     // Add a new role
// //     const addTruckTypeEvent: MouseEventHandler<HTMLButtonElement> = useCallback(
// //         async (e) => {
// //             e.preventDefault();
// //             const trimmedData = trimDataObjectStrings(formData);
// //             if (trimmedData.name.length > 0) {
// //                 toast.error(t("")); //FIXME - translate error message
// //                 return;
// //             }

// //             try {
// //                 await addTrucKType(dispatch, token, trimmedData);
// //                 setFormData(initialFormState);
// //                 toast.success(t("added_successfully"));
// //             } catch (err: unknown) {
// //                 const errorMessage =
// //                     typeof err === "object" && err !== null && "message" in err
// //                         ? (err as { message?: string }).message ||
// //                           t("failed_to_add")
// //                         : t("failed_to_add");
// //                 toast.error(errorMessage);
// //             }
// //         },
// //         [formData, token, dispatch, t]
// //     );

// //     // Edit an existing role
// //     const editTruckTypeEvent: MouseEventHandler<HTMLButtonElement> =
// //         useCallback(
// //             async (e) => {
// //                 e.preventDefault();
// //                 const trimmedData = trimDataObjectStrings(formData);

// //                 if (trimmedData.id === 0) {
// //                     toast.error(t("no_selected_role_edit_error")); // FIXME - translate this error
// //                 } else if (trimmedData.name.length === 0) {
// //                     toast.error(t("fill_name_edit_error")); // FIXME  - translate this error
// //                 } else {
// //                     try {
// //                         await editTrucKType(dispatch, token, trimmedData);
// //                         setFormData(initialFormState);
// //                         toast.success(t("edited_successfully"));
// //                     } catch (err: unknown) {
// //                         // FIXME : correct to handle this error
// //                         const errorMessage =
// //                             typeof err === "object" &&
// //                             err !== null &&
// //                             "message" in err
// //                                 ? (err as { message?: string }).message ||
// //                                   t("failed_to_edit")
// //                                 : t("failed_to_edit");
// //                         toast.error(errorMessage);
// //                     }
// //                 }
// //             },
// //             [formData, token, dispatch, t]
// //         );

// //     // Search for roles by name
// //     const searchTruckTypeEvent: MouseEventHandler<HTMLButtonElement> = (e) => {
// //         e.preventDefault();
// //         searchTrucKType(dispatch, searchTerm, searching);
// //     };

// //     // Delete a role
// //     const deleteTruckTypeEvent: MouseEventHandler<HTMLButtonElement> =
// //         useCallback(
// //             async (e) => {
// //                 e.preventDefault();
// //                 // if (formData.id === 0) {
// //                 //     toast.error(t("select_item_to_delete"));
// //                 //     return;
// //                 // }

// //                 // TODO - Add modal to confirm the delete process that can be done using enter key
// //                 if (
// //                     window.confirm(
// //                         t("confirm_delete_role", { roleName: formData.name })
// //                     )
// //                 ) {
// //                     try {
// //                         await deleteTrucKType(dispatch, token, formData.id);
// //                         setFormData(initialFormState);
// //                         toast.success(t("deleted_successfully"));
// //                     } catch (err: unknown) {
// //                         const errorMessage =
// //                             typeof err === "object" &&
// //                             err !== null &&
// //                             "message" in err
// //                                 ? (err as { message?: string }).message ||
// //                                   t("failed_to_delete")
// //                                 : t("failed_to_delete");
// //                         toast.error(errorMessage);
// //                     }
// //                 }
// //             },
// //             [formData, token, dispatch, t]
// //         );

// //     // Handle search input changes
// //     const changeSearchFormEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
// //         e.preventDefault();
// //         setSearchTerm(e.target.value);
// //     };

// //     // TODO - handle keyboard shortcut to add process ENTER
// //     // TODO - handle keyboard shortcut to edit process SHIFT + ENTER
// //     // TODO - handle keyboard shortcut to delete selected role process SHIFT + Delete

// //     const GRID_COLUMNS_DEF = getTruckTypeTableColumn(deleteTruckTypeEvent);

// //     document.title = t("title");

// //     return (
// //         <>
// //             <TruckTypeForm
// //                 formData={formData}
// //                 editEventHandler={editTruckTypeEvent}
// //                 addEventHandler={addTruckTypeEvent}
// //                 inputChangeEvent={inputChangeEvent}
// //                 isEditing={editing}
// //                 isAdding={adding}
// //                 translateFile={translateFilePath}
// //                 isCollapsed={isFormCollapsed}
// //             />

// //             {/* Search, export, refresh, and print controls */}
// //             <div className="w-full bg-base-100 grid! grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-1">
// //                 <RefreshButton
// //                     classes="btn-primary w-auto order-2 lg:order-1 lg:col-span-2"
// //                     text={t("refresh-btn")}
// //                     clickEvent={() => {
// //                         fetchData();
// //                     }}
// //                     isDisabled={fetching}
// //                 />
// //                 <SearchForm
// //                     placeHolder={t("search-placeholder")}
// //                     clickEvent={searchTruckTypeEvent}
// //                     filterChangeable={false}
// //                     changeInputEvent={changeSearchFormEvent}
// //                     containerClasses="order-1 col-span-3 lg:order-2 lg:col-span-6 lg:col-end-9 w-full"
// //                 >
// //                     <option defaultChecked>{t("filter-name")}</option>
// //                 </SearchForm>
// //                 {/* TODO - handle the print operation */}
// //                 <PrintButton
// //                     classes="btn-primary order-3 order-3 md:order-4 lg:col-span-2"
// //                     text={t("print-btn")}
// //                     clickEvent={() => {
// //                         // setLang(lang === "ar" ? "en" : "ar");
// //                     }}
// //                 />
// //                 {/* TODO - fix and handle export for pdf and excel */}
// //                 <Dropdown
// //                     text={t("export-dropdown")}
// //                     bgColor="primary"
// //                     uniqueKey="export-drop-menu"
// //                     classes={
// //                         "btn-primary order-4 lg:order-4 shadow-md lg:col-span-2"
// //                     }
// //                 >
// //                     <li>
// //                         <PDFButton
// //                             classes="btn-primary"
// //                             text={t("pdf-btn")}
// //                             clickEvent={() => {}}
// //                         />
// //                     </li>
// //                     <li>
// //                         <ExcelButton
// //                             classes="btn-primary"
// //                             text={t("excel-btn")}
// //                             clickEvent={() => {}}
// //                         />
// //                     </li>
// //                 </Dropdown>
// //             </div>

// //             {/* Data grid for displaying user roles */}
// //             <div className="w-full md:m-1 lg:m-2 h-dvh bg-gray-100 dark:bg-gray-900 rounded-md flex flex-col">
// //                 {fetching || mainStore.length === 0 ? (
// //                     <DataGridSkeleton />
// //                 ) : (
// //                     <DataGrid
// //                         fetchSelectedData={onGridSelect}
// //                         columnDefs={GRID_COLUMNS_DEF}
// //                         rowData={mainStore}
// //                     />
// //                 )}
// //             </div>
// //             <Pagination />
// //         </>
// //     );
// // };

// // export default TruckTypeManagementView;

// import { useTranslation } from "react-i18next";
// import DataGridSkeleton from "../../components/skeletons/datagrid_skeleton";
// import DataGrid from "../../components/datagrid/datagrid";
// import Pagination from "../../components/pagination";
// import ExcelButton from "../../components/buttons/crud_buttons/excel_button";
// import PDFButton from "../../components/buttons/crud_buttons/pdf_button";
// import Dropdown from "../../components/dropdown";
// import PrintButton from "../../components/buttons/crud_buttons/print_button";
// import SearchForm from "../../components/forms/search_form";
// import RefreshButton from "../../components/buttons/crud_buttons/refresh_button";
// import TruckTypeForm from "../../components/forms/truck/truck_type_form";
// import { useAuthStore } from "../../states/stores/auth_store";
// import {
//     useCallback,
//     useEffect,
//     useReducer,
//     useState,
//     type ChangeEventHandler,
//     type MouseEventHandler,
// } from "react";
// import type { TruckType } from "../../models/truck/truck_type_models";
// import {
//     addTrucKType,
//     deleteTrucKType,
//     editTrucKType,
//     fetchTruckTypes,
//     searchTrucKType,
// } from "../../states/reducers/actions/services/truck/truck_type_service";
// import TruckTypeReducer, {
//     initialTruckTypeState,
// } from "../../states/reducers/storage/truck/truck_type_reducer";
// import type { DataGridGenericType } from "../../components/datagrid/datagrid_generic_type";
// import { toast } from "react-toastify";
// import getTruckTypeTableColumn from "../../components/datagrid/column_definition/truck/truck_type_datagrid_columns";
// import trimDataObjectStrings from "../../utils/trim_data_object_strings"; // Your imported utility
// import useUserSettingsStore from "../../states/stores/user_settings_store";

// // Define the initial state for the TruckType form.
// // Added 'code' as it's used in addTruckTypeEvent. Ensure your TruckType model includes it.
// const initialFormState: TruckType = {
//     id: 0,
//     name: "",
//     description: "",
//     code: "", // Assuming 'code' is part of TruckType and needs trimming
//     updated_at: "",
//     created_at: "",
//     classify: "",
// };

// const ContainerTypeManagementView = () => {
//     const translateFilePath = "container-management/type";
//     const { t } = useTranslation(translateFilePath);

//     const { token } = useAuthStore();
//     const { lang, setLang } = useUserSettingsStore();

//     // Use a reducer for complex state logic related to truck types.
//     const [{ mainStore, fetching, editing, adding, searching }, dispatch] =
//         useReducer(TruckTypeReducer, initialTruckTypeState);

//     // State for form data, form collapse, and search term.
//     const [formData, setFormData] = useState<TruckType>(initialFormState);
//     const [isFormCollapsed, setIsFormCollapsed] = useState<boolean>(false);
//     const [searchTerm, setSearchTerm] = useState<string>("");

//     /**
//      * Fetches all truck types from the backend and resets the form to its initial state.
//      */
//     const fetchData = useCallback(async () => {
//         await fetchTruckTypes(dispatch, token);
//         setFormData(initialFormState); // Reset form after fetching data
//     }, [token]);

//     // Effect to fetch data on component mount.
//     useEffect(() => {
//         fetchData();
//     }, [fetchData]);

//     /**
//      * Manages the form's collapsed state. The form collapses when a truck type
//      * is selected for editing (i.e., formData is no longer `initialFormState`).
//      */
//     useEffect(() => {
//         // Check if formData is different from initialFormState by comparing a key like 'id'
//         setIsFormCollapsed(formData.id !== initialFormState.id);
//     }, [formData]); // Depend on formData to react to changes

//     /**
//      * Handles changes in the form input fields, updating the formData state.
//      */
//     const inputChangeEvent: ChangeEventHandler<
//         HTMLInputElement | HTMLTextAreaElement
//     > = useCallback((e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     }, []);

//     /**
//      * Handles row selection in the data grid. When a row is selected,
//      * its data populates the form for potential editing.
//      */
//     const onGridSelect = useCallback(
//         (data: DataGridGenericType[]) => {
//             if (data.length > 0) {
//                 // Find the selected truck type from the main store based on its ID.
//                 const selectedTruckType: TruckType | undefined = mainStore.find(
//                     (item) => item.id === data[0].id
//                 );
//                 if (selectedTruckType) {
//                     setFormData(selectedTruckType);
//                     return;
//                 }
//             }
//             // or clear the form
//             setFormData(initialFormState);
//         },
//         [mainStore]
//     ); // Depend on mainStore if you intend to search it

//     /**
//      * Handles adding a new truck type.
//      */
//     const addContainerTypeEvent: MouseEventHandler<HTMLButtonElement> = useCallback(
//         async (e) => {
//             e.preventDefault();

//             // Trim whitespace from all string fields in formData before validation/submission.
//             const trimmedData = trimDataObjectStrings(formData);

//             // Validation: Ensure the name is not empty after trimming.
//             if (trimmedData.name.length === 0) {
//                 toast.error(t("truck_type_name_required")); // Specific error message
//                 return;
//             }

//             try {
//                 await addTrucKType(dispatch, token, trimmedData);
//                 setFormData(initialFormState); // Reset form on success
//                 toast.success(t("added_successfully"));
//             } catch (err: unknown) {
//                 // Generic error handling for API calls.
//                 const errorMessage =
//                     typeof err === "object" && err !== null && "message" in err
//                         ? (err as { message?: string }).message ||
//                           t("failed_to_add")
//                         : t("failed_to_add");
//                 toast.error(errorMessage);
//             }
//         },
//         [formData, token, dispatch, t] // `formData` is a dependency because `trimmedData` is derived from it
//     );

//     /**
//      * Handles editing an existing truck type.
//      */
//     const editContainerTypeEvent: MouseEventHandler<HTMLButtonElement> =
//         useCallback(
//             async (e) => {
//                 e.preventDefault();

//                 // Trim whitespace from all string fields in formData before validation/submission.
//                 const trimmedData = trimDataObjectStrings(formData);

//                 // Validation: Check if an item is selected and if the name is not empty.
//                 if (trimmedData.id === 0) {
//                     toast.error(t("no_selected_truck_type_edit_error")); // Specific error
//                     return;
//                 }
//                 if (trimmedData.name.length === 0) {
//                     toast.error(t("truck_type_name_required")); // Specific error
//                     return;
//                 }

//                 try {
//                     // Pass the trimmed data to the edit service.
//                     await editTrucKType(dispatch, token, trimmedData);
//                     setFormData(initialFormState); // Reset form on success
//                     toast.success(t("edited_successfully"));
//                 } catch (err: unknown) {
//                     // Generic error handling for API calls.
//                     const errorMessage =
//                         typeof err === "object" &&
//                         err !== null &&
//                         "message" in err
//                             ? (err as { message?: string }).message ||
//                               t("failed_to_edit")
//                             : t("failed_to_edit");
//                     toast.error(errorMessage);
//                 }
//             },
//             [formData, token, dispatch, t] // `formData` is a dependency because `trimmedData` is derived from it
//         );

//     /**
//      * Handles searching for truck types by the current searchTerm.
//      */
//     const searchContainerTypeEvent: MouseEventHandler<HTMLButtonElement> =
//         useCallback(
//             (e) => {
//                 e.preventDefault();
//                 // Potentially trim searchTerm here as well if needed
//                 searchTrucKType(dispatch, searchTerm.trim(), searching);
//             },
//             [dispatch, searchTerm, searching]
//         );

//     /**
//      * Handles deleting a truck type.
//      */
//     const deleteContainerTypeEvent = useCallback(
//         async (index: number) => {
//             // e.preventDefault();

//             // Validation: Ensure an item is selected for deletion.
//             //   if (formData.id === 0) {
//             //     toast.error(t("select_item_to_delete"));
//             //     return;
//             //   }

//             // Confirm deletion with the user.
//             if (
//                 window.confirm(
//                     t("confirm_delete_truck_type", {
//                         truckTypeName: formData.name,
//                     })
//                 )
//             ) {
//                 try {
//                     await deleteTrucKType(dispatch, token, index);
//                     setFormData(initialFormState); // Reset form on success
//                     toast.success(t("deleted_successfully"));
//                 } catch (err: unknown) {
//                     // Generic error handling for API calls.
//                     const errorMessage =
//                         typeof err === "object" &&
//                         err !== null &&
//                         "message" in err
//                             ? (err as { message?: string }).message ||
//                               t("failed_to_delete")
//                             : t("failed_to_delete");
//                     toast.error(errorMessage);
//                 }
//             }
//         },
//         [formData, token, dispatch, t]
//     );

//     /**
//      * Handles changes in the search input field.
//      */
//     const changeSearchFormEvent: ChangeEventHandler<HTMLInputElement> =
//         useCallback((e) => {
//             setSearchTerm(e.target.value);
//         }, []);

//     // Keyboard Shortcuts (TODO)
//     // Implementing global keyboard shortcuts requires careful thought about focus management
//     // and preventing default browser behaviors. Consider a dedicated library for complex needs.
//     // useEffect(() => {
//     //     const handleKeyDown = (event: KeyboardEvent) => {
//     //         // Example: Ctrl/Cmd + S for save (add/edit)
//     //         // if ((event.ctrlKey || event.metaKey) && event.key === 's') {
//     //         //   event.preventDefault(); // Prevent browser save dialog
//     //         //   if (formData.id === 0) {
//     //         //     addTruckTypeEvent(event as any); // Type assertion needed for synthetic event
//     //         //   } else {
//     //         //     editTruckTypeEvent(event as any);
//     //         //   }
//     //         // }
//     //         // Example: Enter to add (if form is in add mode)
//     //         // if (event.key === 'Enter' && !formData.id && document.activeElement?.closest('form')) {
//     //         //   event.preventDefault();
//     //         //   addTruckTypeEvent(event as any);
//     //         // }
//     //         // Example: Shift + Delete to delete (if an item is selected)
//     //         // if (event.shiftKey && event.key === 'Delete' && formData.id !== 0) {
//     //         //   event.preventDefault();
//     //         //   deleteTruckTypeEvent(event as any);
//     //         // }
//     //     };

//     //     document.addEventListener("keydown", handleKeyDown);
//     //     return () => {
//     //         document.removeEventListener("keydown", handleKeyDown);
//     //     };
//     // }, [addTruckTypeEvent, editTruckTypeEvent, deleteTruckTypeEvent, formData]); // Add event handlers and formData as dependencies

//     // Define columns for the DataGrid.
//     const GRID_COLUMNS_DEF = getTruckTypeTableColumn(deleteContainerTypeEvent, t);

//     // Set the document title dynamically.
//     document.title = t("title");

//     return (
//         <>
//             <TruckTypeForm
//                 formData={formData}
//                 editEventHandler={editContainerTypeEvent}
//                 addEventHandler={addContainerTypeEvent}
//                 inputChangeEvent={inputChangeEvent}
//                 isEditing={editing}
//                 isAdding={adding}
//                 translateFile={translateFilePath}
//                 isCollapsed={isFormCollapsed}
//             />

//             {/* Search, export, refresh, and print controls */}
//             <div className="w-full h-auto bg-base-100 grid grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-x-1 rounded">
//                 <RefreshButton
//                     classes="btn-primary w-auto order-2 lg:order-1 lg:col-span-2"
//                     text={t("refresh-btn")}
//                     clickEvent={fetchData} // Directly call fetchData
//                     isDisabled={fetching}
//                 />
//                 <SearchForm
//                     placeHolder={t("search-placeholder")}
//                     clickEvent={searchContainerTypeEvent}
//                     filterChangeable={false}
//                     changeInputEvent={changeSearchFormEvent}
//                     containerClasses="order-1 col-span-3 lg:order-2 lg:col-span-6 lg:col-end-9 w-full mb-0"
//                 >
//                     {/* Default option for search filter, if more filters are added, they would go here */}
//                     <option defaultChecked>{t("filter-name")}</option>
//                 </SearchForm>

//                 {/* Print Button - Placeholder for future implementation */}
//                 <PrintButton
//                     classes="btn-primary order-3 order-3 md:order-4 lg:col-span-2 shadow-0"
//                     text={t("print-btn")}
//                     clickEvent={() => {
//                         setLang(lang === "ar" ? "en" : "ar");
//                         // toast.info(t("print_function_coming_soon")); // Inform user that functionality is pending
//                     }}
//                 />

//                 {/* Export Dropdown for PDF and Excel - Placeholders for future implementation */}
//                 <Dropdown
//                     text={t("export-dropdown")}
//                     bgColor="primary"
//                     uniqueKey="export-drop-menu"
//                     classes={
//                         "btn-primary order-4 lg:order-4 shadow-md lg:col-span-2"
//                     }
//                 >
//                     <li>
//                         <PDFButton
//                             classes="btn-primary"
//                             text={t("pdf-btn")}
//                             clickEvent={() => {
//                                 toast.info(t("pdf_export_coming_soon")); // Inform user
//                             }}
//                         />
//                     </li>
//                     <li>
//                         <ExcelButton
//                             classes="btn-primary"
//                             text={t("excel-btn")}
//                             clickEvent={() => {
//                                 toast.info(t("excel_export_coming_soon")); // Inform user
//                             }}
//                         />
//                     </li>
//                 </Dropdown>
//             </div>

//             {/* Data grid for displaying truck types */}
//             <div className="w-full md:m-1 lg:m-2 h-dvh bg-gray-100 dark:bg-gray-900 rounded-md flex flex-col">
//                 {fetching ? (
//                     <DataGridSkeleton /> // Show skeleton while data is being fetched
//                 ) : (
//                     <DataGrid
//                         fetchSelectedData={onGridSelect}
//                         columnDefs={GRID_COLUMNS_DEF}
//                         rowData={mainStore} // Display fetched data
//                     />
//                 )}
//             </div>
//             <Pagination />
//         </>
//     );
// };

// export default ContainerTypeManagementView;


export default function ContainerTypeManagementView() {
	return <TypeManagementView classifyID={1}/>
}