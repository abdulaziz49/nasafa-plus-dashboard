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
// // import TypeModelForm from "../../components/forms/trucks/truck_type_form";
// // import { useAuthStore } from "../../states/stores/auth_store";
// // import {
// //     useCallback,
// //     useEffect,
// //     useReducer,
// //     useState,
// //     type ChangeEventHandler,
// //     type MouseEventHandler,
// // } from "react";
// // import type { TypeModel } from "../../models/truck/truck_type_models";
// // import {
// //     addTypeModel,
// //     deleteTypeModel,
// //     editTypeModel,
// //     fetchTypeModels,
// //     searchTypeModel,
// // } from "../../states/reducers/actions/services/truck/truck_type_service";
// // import TypeModelReducer, {
// //     initialTypeModelState,
// // } from "../../states/reducers/storage/truck/truck_type_reducer";
// // import type { DataGridGenericType } from "../../components/datagrid/datagrid_generic_type";
// // import { toast } from "react-toastify";
// // import getTypeModelTableColumn from "../../components/datagrid/column_definition/truck/truck_type_datagrid_columns";
// // import trimDataObjectStrings from "../../utils/trim_data_object_strings";

// // const initialFormState: TypeModel = {
// //     id: 0,
// //     name: "",
// //     description: "",
// //     // permissions: [],
// //     // is_locked: false,
// //     updated_at: "",
// //     created_at: "",
// // };

// // const TypeModelManagementView = () => {
// //     const translateFilePath = "truck-management/type";
// //     const { t } = useTranslation(translateFilePath);

// //     const { token } = useAuthStore();

// //     const [{ mainStore, fetching, editing, adding, searching }, dispatch] =
// //         useReducer(TypeModelReducer, initialTypeModelState);

// //     const [formData, setFormData] = useState<TypeModel>(initialFormState);
// //     const [isFormCollapsed, setIsFormCollapsed] = useState<boolean>(false);
// //     const [searchTerm, setSearchTerm] = useState<string>("");

// //     // Fetch all user roles from the backend
// //     const fetchData = useCallback(async () => {
// //         await fetchTypeModels(dispatch, token);
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
// //             const TypeModel: TypeModel | undefined = mainStore.find(
// //                 (role) => role.id === data[0].id
// //             );
// //             setFormData(TypeModel!);
// //         } else {
// //             setFormData(initialFormState);
// //         }
// //     };

// //     // Add a new role
// //     const addTypeModelEvent: MouseEventHandler<HTMLButtonElement> = useCallback(
// //         async (e) => {
// //             e.preventDefault();
// //             const trimmedData = trimDataObjectStrings(formData);
// //             if (trimmedData.name.length > 0) {
// //                 toast.error(t("")); //FIXME - translate error message
// //                 return;
// //             }

// //             try {
// //                 await addTypeModel(dispatch, token, trimmedData);
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
// //     const editTypeModelEvent: MouseEventHandler<HTMLButtonElement> =
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
// //                         await editTypeModel(dispatch, token, trimmedData);
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
// //     const searchTypeModelEvent: MouseEventHandler<HTMLButtonElement> = (e) => {
// //         e.preventDefault();
// //         searchTypeModel(dispatch, searchTerm, searching);
// //     };

// //     // Delete a role
// //     const deleteTypeModelEvent: MouseEventHandler<HTMLButtonElement> =
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
// //                         await deleteTypeModel(dispatch, token, formData.id);
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

// //     const GRID_COLUMNS_DEF = getTypeModelTableColumn(deleteTypeModelEvent);

// //     document.title = t("title");

// //     return (
// //         <>
// //             <TypeModelForm
// //                 formData={formData}
// //                 editEventHandler={editTypeModelEvent}
// //                 addEventHandler={addTypeModelEvent}
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
// //                     clickEvent={searchTypeModelEvent}
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

// // export default TypeModelManagementView;

// import { useTranslation } from "react-i18next";
// import DataGridSkeleton from "../components/skeletons/datagrid_skeleton";
// import DataGrid from "../components/datagrid/datagrid";
// import Pagination from "../components/pagination";
// import ExcelButton from "../components/buttons/crud_buttons/excel_button";
// import PDFButton from "../components/buttons/crud_buttons/pdf_button";
// import Dropdown from "../components/dropdown";
// import PrintButton from "../components/buttons/crud_buttons/print_button";
// import SearchForm from "../components/forms/search_form";
// import RefreshButton from "../components/buttons/crud_buttons/refresh_button";
// import { useAuthStore } from "../states/stores/auth_store";
// import {
//     useCallback,
//     useEffect,
//     useReducer,
//     useState,
//     type ChangeEventHandler,
//     type MouseEventHandler,
// } from "react";
// // import type { TypeModel } from "../models/type_models";
// // import {
// //     addTypeModel,
// //     deleteTypeModel,
// //     editTypeModel,
// //     fetchTypeModels,
// //     searchTypeModel,
// // } from "../states/reducers/actions/services/truck/truck_type_service";
// // import TypeModelReducer, {
// //     initialTypeModelState,
// // } from "../states/reducers/storage/truck/truck_type_reducer";
// import type { DataGridGenericType } from "../components/datagrid/datagrid_generic_type";
// import { toast } from "react-toastify";
// import trimDataObjectStrings from "../utils/trim_data_object_strings"; // Your imported utility
// import useUserSettingsStore from "../states/stores/user_settings_store";
// import type { TypeModel } from "../models/type_models";
// import AppReducer, { getInitialAppState } from "../states/reducers/app_reducer";
// import {
//     addType,
//     deleteType,
//     editType,
//     fetchTypes,
//     searchType,
// } from "../states/reducers/actions/services/type_service";
// import getTypeTableColumn from "../components/datagrid/column_definition/type_datagrid_columns";
// import TypeForm from "../components/forms/type_form";

// // Define the initial state for the TypeModel form.
// // Added 'code' as it's used in addTypeModelEvent. Ensure your TypeModel model includes it.
// const initialFormState = {
//     id: 0,
//     name: "",
//     description: "",
//     code: "", // Assuming 'code' is part of TypeModel and needs trimming
//     updated_at: "",
//     created_at: "",
//     classify: "",
// };

// const TypeModelManagementView = () => {
//     const translateFilePath = "truck-management/type";
//     const { t } = useTranslation(translateFilePath);

//     const { token } = useAuthStore();
//     const { lang, setLang } = useUserSettingsStore();

//     // Use a reducer for complex state logic related to truck types.
//     const [{ mainStore, fetching, editing, adding, searching }, dispatch] =
//         useReducer(AppReducer<TypeModel>, getInitialAppState<TypeModel>());

//     // State for form data, form collapse, and search term.
//     const [formData, setFormData] = useState<TypeModel>(initialFormState);
//     const [isFormCollapsed, setIsFormCollapsed] = useState<boolean>(false);
//     const [searchTerm, setSearchTerm] = useState<string>("");

//     /**
//      * Fetches all truck types from the backend and resets the form to its initial state.
//      */
//     const fetchData = useCallback(async () => {
//         await fetchTypes(dispatch, token, "test");
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
//                 const selectedTypeModel: TypeModel | undefined = mainStore.find(
//                     (item) => item.id === data[0].id
//                 );
//                 if (selectedTypeModel) {
//                     setFormData(selectedTypeModel);
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
//     const addTypeModelEvent: MouseEventHandler<HTMLButtonElement> = useCallback(
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
//                 await addType(dispatch, token, "", trimmedData);
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
//     const editTypeModelEvent: MouseEventHandler<HTMLButtonElement> =
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
//                     await editType(dispatch, token, trimmedData);
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
//     const searchTypeModelEvent: MouseEventHandler<HTMLButtonElement> =
//         useCallback(
//             (e) => {
//                 e.preventDefault();
//                 // Potentially trim searchTerm here as well if needed
//                 searchType(dispatch, searchTerm.trim(), searching);
//             },
//             [dispatch, searchTerm, searching]
//         );

//     /**
//      * Handles deleting a truck type.
//      */
//     const deleteTypeModelEvent = useCallback(
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
//                         TypeModelName: formData.name,
//                     })
//                 )
//             ) {
//                 try {
//                     await deleteType(dispatch, token, index);
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
//     //         //     addTypeModelEvent(event as any); // Type assertion needed for synthetic event
//     //         //   } else {
//     //         //     editTypeModelEvent(event as any);
//     //         //   }
//     //         // }
//     //         // Example: Enter to add (if form is in add mode)
//     //         // if (event.key === 'Enter' && !formData.id && document.activeElement?.closest('form')) {
//     //         //   event.preventDefault();
//     //         //   addTypeModelEvent(event as any);
//     //         // }
//     //         // Example: Shift + Delete to delete (if an item is selected)
//     //         // if (event.shiftKey && event.key === 'Delete' && formData.id !== 0) {
//     //         //   event.preventDefault();
//     //         //   deleteTypeModelEvent(event as any);
//     //         // }
//     //     };

//     //     document.addEventListener("keydown", handleKeyDown);
//     //     return () => {
//     //         document.removeEventListener("keydown", handleKeyDown);
//     //     };
//     // }, [addTypeModelEvent, editTypeModelEvent, deleteTypeModelEvent, formData]); // Add event handlers and formData as dependencies

//     // Define columns for the DataGrid.
//     const GRID_COLUMNS_DEF = getTypeTableColumn(deleteTypeModelEvent, t);

//     // Set the document title dynamically.
//     document.title = t("title");

//     return (
//         <>
//             <TypeForm
//                 formData={formData}
//                 editEventHandler={editTypeModelEvent}
//                 addEventHandler={addTypeModelEvent}
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
//                     clickEvent={searchTypeModelEvent}
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

// export default TypeModelManagementView;

import { useTranslation } from "react-i18next";
import {
    useCallback,
    useEffect,
    useReducer,
    useState,
    type ChangeEventHandler,
    type MouseEventHandler,
} from "react";
import { toast } from "react-toastify";

// Component Imports
import DataGridSkeleton from "../components/skeletons/datagrid_skeleton";
import DataGrid from "../components/datagrid/datagrid";
import Pagination from "../components/pagination";
import ExcelButton from "../components/buttons/crud_buttons/excel_button";
import PDFButton from "../components/buttons/crud_buttons/pdf_button";
import Dropdown from "../components/dropdown";
import PrintButton from "../components/buttons/crud_buttons/print_button";
import SearchForm from "../components/forms/search_form";
import RefreshButton from "../components/buttons/crud_buttons/refresh_button";
import TypeForm from "../components/forms/type_form"; // Corrected import from TypeModelForm to TypeForm
import getTypeTableColumn from "../components/datagrid/column_definition/type_datagrid_columns";

// State Management Imports
import { useAuthStore } from "../states/stores/auth_store";
import useUserSettingsStore from "../states/stores/user_settings_store";
import AppReducer, { getInitialAppState } from "../states/reducers/app_reducer";
import {
    addType,
    deleteType,
    editType,
    fetchTypes,
    searchType,
} from "../states/reducers/actions/services/type_service";

// Type Imports
import type { TypeModel } from "../models/type_models";

// Utility Imports
import trimDataObjectStrings from "../utils/trim_data_object_strings";

/**
 * Defines the initial state for the TypeModel form.
 * This ensures the form always starts with a consistent, empty data structure.
 * It includes fields expected in a `TypeModel` object.
 */
const initialFormState: TypeModel = {
    id: 0,
    name: "",
    description: "",
    code: "",
    updated_at: "",
    created_at: "",
    classify: "",
};

/**
 * `TypeModelManagementView` is a React functional component responsible for
 * managing truck types within the application. It provides functionalities for
 * viewing, adding, editing, deleting, and searching truck types.
 *
 * It utilizes a generic reducer (`AppReducer`) for state management,
 * handles form inputs, and integrates with backend services for data persistence.
 */

const TypeManagementViewParam = [
    { classify: "trucks", translateFile: "truck-management/type" },
    { classify: "containers", translateFile: "container-management/type" },
    { classify: "services", translateFile: "service-management/type" },
];

interface TypeManagementViewProps {
    classifyID: number;
}

const TypeManagementView = ({ classifyID }: TypeManagementViewProps) => {
    // --- Hooks and State Initialization ---
    // const translateFilePath = TypeManagementViewParam[classifyID].translateFile;
    const { t } = useTranslation(
        TypeManagementViewParam[classifyID].translateFile
    ); // Hook for internationalization (i18n)

    const { token } = useAuthStore(); // Retrieves the authentication token for API calls
    const { lang, setLang } = useUserSettingsStore(); // Manages user language settings

    // Centralized state management for truck types using a generic reducer.
    // `mainStore` holds the primary list of truck types.
    // `fetching`, `editing`, `adding`, `searching` are boolean flags indicating ongoing operations.
    const [{ mainStore, fetching, editing, adding, searching }, dispatch] =
        useReducer(
            AppReducer<TypeModel>, // The generic reducer, typed for `TypeModel`
            getInitialAppState<TypeModel>() // Provides the initial state structure
        );

    // Local state for the form, controlling the data being edited or added.
    const [formData, setFormData] = useState<TypeModel>(initialFormState);
    // Local state to control the visibility/collapse state of the input form.
    const [isFormCollapsed, setIsFormCollapsed] = useState<boolean>(false);
    // Local state for the search input field's value.
    const [searchTerm, setSearchTerm] = useState<string>("");

    // --- Data Fetching Logic ---

    /**
     * Fetches all truck types from the backend API.
     * Resets the form to `initialFormState` after data is fetched.
     * This function is memoized using `useCallback` to optimize performance.
     */
    const fetchData = useCallback(async () => {
        // The third argument for `fetchTypes` ("test") seems like a placeholder.
        // If it's not strictly necessary for the API call, consider removing it
        // from `fetchTypes` function signature and its calls for cleaner code.
        await fetchTypes(
            dispatch,
            token,
            TypeManagementViewParam[classifyID].classify
        );
        setFormData(initialFormState); // Clear form data after successful fetch
    }, [token, classifyID]); // Dependency: re-create `fetchData` if `token` changes

    /**
     * Effect hook to call `fetchData` once when the component mounts
     * and whenever the `fetchData` dependency changes.
     */
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    /**
     * Effect hook to manage the form's collapsed state.
     * The form is collapsed when `formData` is reset (i.e., `formData.id` is 0),
     * and expanded when a specific item is selected for editing (`formData.id` is not 0).
     */
    useEffect(() => {
        setIsFormCollapsed(formData.id !== initialFormState.id);
    }, [formData]); // Dependency: re-run if `formData` changes

    // --- Form and Grid Event Handlers ---

    /**
     * Handles changes in form input fields (`HTMLInputElement` or `HTMLTextAreaElement`).
     * It updates the `formData` state dynamically based on the input's `name` and `value`.
     */
    const inputChangeEvent: ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    > = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }, []); // No dependencies as it uses a functional update for `setFormData`

    /**
     * Handles row selection in the `DataGrid`.
     * When a row is selected, its corresponding `TypeModel` data is found in `mainStore`
     * and used to populate the `formData` for editing.
     * If no row is selected or found, `formData` is reset.
     */
    const onGridSelect = useCallback(
        (data: TypeModel[]) => {
            if (data.length > 0) {
                // Assuming `DataGridGenericType` always contains an `id` that matches `TypeModel.id`.
                const selectedTypeModel = mainStore.find(
                    (item) => item.id === data[0].id
                );
                if (selectedTypeModel) {
                    setFormData(selectedTypeModel);
                    return;
                }
            }
            setFormData(initialFormState); // Reset form if nothing is selected or found
        },
        [mainStore] // Dependency: re-create if `mainStore` (data for the grid) changes
    );

    /**
     * Handles the submission for adding a new truck type.
     * Performs client-side validation (e.g., checks for empty `name`) before dispatching the `addType` action.
     * Displays success or error notifications.
     */
    const addTypeEvent: MouseEventHandler<HTMLButtonElement> = useCallback(
        async (e) => {
            e.preventDefault();

            const trimmedData = trimDataObjectStrings(formData); // Trim whitespace from all string fields

            // Client-side validation
            if (trimmedData.name.length === 0) {
                toast.error(t("truck_type_name_required"));
                return;
            }

            try {
                // The second argument for `addType` ('') seems like a placeholder.
                // Re-evaluate its necessity in the `addType` service.
                await addType(
                    dispatch,
                    token,
                    TypeManagementViewParam[classifyID].classify,
                    trimmedData
                );
                setFormData(initialFormState); // Reset form on success
                toast.success(t("added_successfully"));
            } catch (err: unknown) {
                const errorMessage =
                    typeof err === "object" && err !== null && "message" in err
                        ? (err as { message?: string }).message ||
                          t("failed_to_add")
                        : t("failed_to_add");
                toast.error(errorMessage);
            }
        },
        [formData, token, dispatch, t, classifyID] // Dependencies: `formData` for `trimmedData`, `token` for API, `dispatch` for reducer, `t` for translations
    );

    /**
     * Handles the submission for editing an existing truck type.
     * Validates that an item is selected and its name is not empty.
     * Displays success or error notifications.
     */
    const editTypeModelEvent: MouseEventHandler<HTMLButtonElement> =
        useCallback(
            async (e) => {
                e.preventDefault();

                const trimmedData = trimDataObjectStrings(formData); // Trim whitespace

                // Client-side validation
                if (trimmedData.id === 0) {
                    toast.error(t("no_selected_truck_type_edit_error"));
                    return;
                }
                if (trimmedData.name.length === 0) {
                    toast.error(t("truck_type_name_required"));
                    return;
                }

                try {
                    await editType(dispatch, token, trimmedData); // Pass trimmed data for edit
                    setFormData(initialFormState); // Reset form on success
                    toast.success(t("edited_successfully"));
                } catch (err: unknown) {
                    const errorMessage =
                        typeof err === "object" &&
                        err !== null &&
                        "message" in err
                            ? (err as { message?: string }).message ||
                              t("failed_to_edit")
                            : t("failed_to_edit");
                    toast.error(errorMessage);
                }
            },
            [formData, token, dispatch, t] // Dependencies: `formData`, `token`, `dispatch`, `t`
        );

    /**
     * Handles the search button click event.
     * Triggers the `searchType` action with the current `searchTerm`.
     */
    const searchTypeModelEvent: MouseEventHandler<HTMLButtonElement> =
        useCallback(
            (e) => {
                e.preventDefault();
                searchType(dispatch, searchTerm.trim(), searching); // Trim search term for accurate search
            },
            [dispatch, searchTerm, searching] // Dependencies: `dispatch`, `searchTerm`, `searching` state
        );

    /**
     * Handles the deletion of a truck type.
     * Prompts the user for confirmation before dispatching the `deleteType` action.
     * The `idToDelete` parameter is the ID of the truck type to be removed.
     * Displays success or error notifications.
     */
    const deleteTypeModelEvent = useCallback(
        async (idToDelete: number) => {
            // Confirm deletion to prevent accidental data loss.
            if (
                window.confirm(
                    t("confirm_delete_truck_type", {
                        TypeModelName: formData.name, // Displays the name of the item to be deleted
                    })
                )
            ) {
                try {
                    await deleteType(dispatch, token, idToDelete);
                    setFormData(initialFormState); // Reset form on successful deletion
                    toast.success(t("deleted_successfully"));
                } catch (err: unknown) {
                    const errorMessage =
                        typeof err === "object" &&
                        err !== null &&
                        "message" in err
                            ? (err as { message?: string }).message ||
                              t("failed_to_delete")
                            : t("failed_to_delete");
                    toast.error(errorMessage);
                }
            }
        },
        [formData, token, dispatch, t] // Dependencies: `formData` (for `name`), `token`, `dispatch`, `t`
    );

    /**
     * Handles changes in the search input field.
     * Updates the `searchTerm` state.
     */
    const changeSearchFormEvent: ChangeEventHandler<HTMLInputElement> =
        useCallback((e) => {
            setSearchTerm(e.target.value);
        }, []); // No dependencies

    // Define columns for the DataGrid.
    // `getTypeTableColumn` is a utility that creates column definitions,
    // requiring the `deleteTypeModelEvent` handler and the `t` (translation) function.
    const GRID_COLUMNS_DEF = getTypeTableColumn(deleteTypeModelEvent, t);

    // Set the document title dynamically based on the current translation.
    document.title = t("title");

    // --- Rendered Component Structure ---
    return (
        <>
            {/* Form for adding/editing Type Models */}
            <TypeForm
                formData={formData}
                editEventHandler={editTypeModelEvent}
                addEventHandler={addTypeEvent}
                inputChangeEvent={inputChangeEvent}
                isEditing={editing}
                isAdding={adding}
                translateFile={
                    TypeManagementViewParam[classifyID].translateFile
                }
                isCollapsed={isFormCollapsed}
            />
            {/* Controls Section: Search, Refresh, Print, Export */}
            <div className="w-full h-auto bg-base-100 grid grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-x-1 rounded">
                {/* Refresh Button: Refreshes the data grid content */}
                <RefreshButton
                    classes="btn-primary w-auto order-2 lg:order-1 lg:col-span-2"
                    text={t("refresh-btn")}
                    clickEvent={fetchData} // Directly calls the memoized `fetchData` function
                    isDisabled={fetching} // Button is disabled while data is being fetched
                />
                {/* Search Form: Allows users to search for truck types */}
                <SearchForm
                    placeHolder={t("search-placeholder")}
                    clickEvent={searchTypeModelEvent}
                    filterChangeable={false} // Indicates if filter options (dropdown) are available
                    changeInputEvent={changeSearchFormEvent}
                    containerClasses="order-1 col-span-3 lg:order-2 lg:col-span-6 lg:col-end-9 w-full mb-0"
                >
                    {/* Default filter option */}
                    <option defaultChecked>{t("filter-name")}</option>
                </SearchForm>

                {/* Print Button: Placeholder for future printing functionality */}
                <PrintButton
                    classes="btn-primary order-3 order-3 md:order-4 lg:col-span-2 shadow-0"
                    text={t("print-btn")}
                    clickEvent={() => {
                        // Currently, this button toggles the application language for demonstration.
                        // In a production environment, this would trigger print dialogs or PDF generation.
                        setLang(lang === "ar" ? "en" : "ar");
                        toast.info(t("print_function_coming_soon")); // Inform user about pending feature
                    }}
                />

                {/* Export Dropdown: Contains options for PDF and Excel exports */}
                <Dropdown
                    text={t("export-dropdown")}
                    bgColor="primary"
                    uniqueKey="export-drop-menu"
                    classes={
                        "btn-primary order-4 lg:order-4 shadow-md lg:col-span-2"
                    }
                >
                    <li>
                        <PDFButton
                            classes="btn-primary"
                            text={t("pdf-btn")}
                            clickEvent={() => {
                                toast.info(t("pdf_export_coming_soon")); // Inform user about pending feature
                            }}
                        />
                    </li>
                    <li>
                        <ExcelButton
                            classes="btn-primary"
                            text={t("excel-btn")}
                            clickEvent={() => {
                                toast.info(t("excel_export_coming_soon")); // Inform user about pending feature
                            }}
                        />
                    </li>
                </Dropdown>
            </div>
            {/* Data Grid Section: Displays truck type data */}
            <div className="w-full md:m-1 lg:m-2 h-dvh bg-gray-100 dark:bg-gray-900 rounded-md flex flex-col">
                {fetching ? (
                    <DataGridSkeleton /> // Show a loading skeleton while data is being fetched
                ) : (
                    <DataGrid
                        fetchSelectedData={onGridSelect} // Callback for row selection events
                        columnDefs={GRID_COLUMNS_DEF} // Column definitions for the grid
                        rowData={mainStore} // The data to be displayed in the grid
                    />
                )}
            </div>
            <Pagination />{" "}
            {/* Pagination component, likely controlling data displayed in DataGrid */}
        </>
    );
};

export default TypeManagementView;
