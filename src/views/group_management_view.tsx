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
import TypeForm from "../components/forms/type_form"; // Corrected import from GroupModelForm to TypeForm
import getTypeTableColumn from "../components/datagrid/column_definition/type_datagrid_columns";

// State Management Imports
import { useAuthStore } from "../states/stores/auth_store";
import useUserSettingsStore from "../states/stores/user_settings_store";
import AppReducer, { getInitialAppState } from "../states/reducers/app_reducer";

// Type Imports
import type { GroupModel } from "../models/group_models";
import type { DataGridGenericType } from "../components/datagrid/datagrid_generic_type";

// Utility Imports
import trimDataObjectStrings from "../utils/trim_data_object_strings";
import {
    addGroup,
    deleteGroup,
    editGroup,
    fetchGroups,
    searchGroups,
} from "../states/reducers/actions/services/type_service copy";

/**
 * Defines the initial state for the TypeModel form.
 * This ensures the form always starts with a consistent, empty data structure.
 * It includes fields expected in a `TypeModel` object.
 */
const initialFormState: GroupModel = {
    id: 0,
    name: "",
    description: "",
    code: "",
    updated_at: "",
    created_at: "",
    classify: "",
};

/**
 * `GroupModelManagementView` is a React functional component responsible for
 * managing truck types within the application. It provides functionalities for
 * viewing, adding, editing, deleting, and searching truck types.
 *
 * It utilizes a generic reducer (`AppReducer`) for state management,
 * handles form inputs, and integrates with backend services for data persistence.
 */

const GroupManagementViewParam = [
    { classify: "trucks", translateFile: "truck-management/group" },
    { classify: "containers", translateFile: "container-management/group" },
    { classify: "services", translateFile: "service-management/group" },
];

interface TypeManagementViewProps {
    classifyID: number;
}

const GroupManagementView = ({ classifyID }: TypeManagementViewProps) => {
    // --- Hooks and State Initialization ---
    // const translateFilePath = TypeManagementViewParam[classifyID].translateFile;
    const { t } = useTranslation(
        GroupManagementViewParam[classifyID].translateFile
    ); // Hook for internationalization (i18n)

    const { token } = useAuthStore(); // Retrieves the authentication token for API calls
    const { lang, setLang } = useUserSettingsStore(); // Manages user language settings

    // Centralized state management for truck types using a generic reducer.
    // `mainStore` holds the primary list of truck types.
    // `fetching`, `editing`, `adding`, `searching` are boolean flags indicating ongoing operations.
    const [{ mainStore, fetching, editing, adding, searching }, dispatch] =
        useReducer(
            AppReducer<GroupModel>, // The generic reducer, typed for `GroupModel`
            getInitialAppState<GroupModel>() // Provides the initial state structure
        );

    // Local state for the form, controlling the data being edited or added.
    const [formData, setFormData] = useState<GroupModel>(initialFormState);
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
        await fetchGroups(
            dispatch,
            token,
            GroupManagementViewParam[classifyID].classify
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
     * When a row is selected, its corresponding `GroupModel` data is found in `mainStore`
     * and used to populate the `formData` for editing.
     * If no row is selected or found, `formData` is reset.
     */
    const onGridSelect = useCallback(
        (data: DataGridGenericType[]) => {
            if (data.length > 0) {
                // Assuming `DataGridGenericType` always contains an `id` that matches `GroupModel.id`.
                const selectedGroups = mainStore.find(
                    (item) => item.id === data[0].id
                );
                if (selectedGroups) {
                    setFormData(selectedGroups);
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
    const addGroupEvent: MouseEventHandler<HTMLButtonElement> = useCallback(
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
                await addGroup(
                    dispatch,
                    token,
                    GroupManagementViewParam[classifyID].classify,
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
    const editGroupEvent: MouseEventHandler<HTMLButtonElement> = useCallback(
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
                await editGroup(dispatch, token, trimmedData); // Pass trimmed data for edit
                setFormData(initialFormState); // Reset form on success
                toast.success(t("edited_successfully"));
            } catch (err: unknown) {
                const errorMessage =
                    typeof err === "object" && err !== null && "message" in err
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
    const searchGroupsEvent: MouseEventHandler<HTMLButtonElement> = useCallback(
        (e) => {
            e.preventDefault();
            searchGroups(dispatch, searchTerm.trim(), searching); // Trim search term for accurate search
        },
        [dispatch, searchTerm, searching] // Dependencies: `dispatch`, `searchTerm`, `searching` state
    );

    /**
     * Handles the deletion of a truck type.
     * Prompts the user for confirmation before dispatching the `deleteType` action.
     * The `idToDelete` parameter is the ID of the truck type to be removed.
     * Displays success or error notifications.
     */
    const deleteGroupEvent = useCallback(
        async (idToDelete: number) => {
            // Confirm deletion to prevent accidental data loss.
            if (
                window.confirm(
                    t("confirm_delete_truck_type", {
                        GroupModelName: formData.name, // Displays the name of the item to be deleted
                    })
                )
            ) {
                try {
                    await deleteGroup(dispatch, token, idToDelete);
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
    // requiring the `deleteGroupModelEvent` handler and the `t` (translation) function.
    const GRID_COLUMNS_DEF = getTypeTableColumn(deleteGroupEvent, t);

    // Set the document title dynamically based on the current translation.
    document.title = t("title");

    // --- Rendered Component Structure ---
    return (
        <>
            {/* Form for adding/editing Type Models */}
            <TypeForm
                formData={formData}
                editEventHandler={editGroupEvent}
                addEventHandler={addGroupEvent}
                inputChangeEvent={inputChangeEvent}
                isEditing={editing}
                isAdding={adding}
                translateFile={
                    GroupManagementViewParam[classifyID].translateFile
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
                    clickEvent={searchGroupsEvent}
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

export default GroupManagementView;
