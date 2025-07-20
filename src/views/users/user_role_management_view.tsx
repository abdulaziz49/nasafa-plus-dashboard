import DataGrid from "../../components/datagrid/datagrid.tsx";
import PrintButton from "../../components/buttons/crud_buttons/print_button.tsx";
import PDFButton from "../../components/buttons/crud_buttons/pdf_button.tsx";
import ExcelButton from "../../components/buttons/crud_buttons/excel_button.tsx";
import Pagination from "../../components/pagination.tsx";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Dropdown from "../../components/dropdown.tsx";
import SearchForm from "../../components/forms/search_form.tsx";
import RefreshButton from "../../components/buttons/crud_buttons/refresh_button.tsx";
import {
    type ChangeEventHandler,
    type MouseEventHandler,
    useCallback,
    useEffect,
    useReducer,
    useState,
} from "react";
import getUserRoleTableColumn from "../../components/datagrid/column_definition/user_system/user_role_datagrid_columns.ts";
import type { UserRole } from "../../models/user_system/user_role_model.ts";
import useUserSettingsStore from "../../states/stores/user_settings_store.ts";
import { useAuthStore } from "../../states/stores/auth_store.ts";
import {
    addUserRole,
    deleteUserRole,
    editUserRole,
    fetchUserRoles,
    searchUserRole,
} from "../../states/reducers/actions/services/user_system/user_role_service.ts";
import DataGridSkeleton from "../../components/skeletons/datagrid_skeleton.tsx";
import UserRoleReducer, {
    initialViewState,
} from "../../states/reducers/storage/user_system/user_role_reducer.ts";
import UserRoleForm from "../../components/forms/system_user/user_role_form.tsx";
import type { DataGridGenericType } from "../../components/datagrid/datagrid_generic_type.ts";

const initialFormState: UserRole = {
    id: 0,
    name: "",
    guard_name: "",
    permissions: [],
    updated_at: "",
    created_at: "",
};

/**
 * UserRoleManagementView
 *
 * This component provides a management interface for user roles.
 * It allows users to:
 * - View a list of user roles in a data grid
 * - Add, edit, and delete roles
 * - Search for roles by name
 * - Export roles to PDF/Excel or print the list
 * - Refresh the data
 *
 * State is managed via useReducer for the roles list and useState for the form.
 * All CRUD operations are handled via async actions and feedback is provided via toast notifications.
 */

const UserRoleManagementView = () => {
    const translateFilePath = "user-management/role";
    const { t } = useTranslation(translateFilePath);

    const { lang, setLang } = useUserSettingsStore();
    const { token } = useAuthStore();

    const [{ mainStore, fetching, editing, adding, searching }, dispatch] =
        useReducer(UserRoleReducer, initialViewState);

    const [formData, setFormData] = useState<UserRole>(initialFormState);
    const [searchTerm, setSearchTerm] = useState<string>("");

    // Fetch all user roles from the backend
    const fetchData = useCallback(async () => {
        await fetchUserRoles(dispatch, token);
        setFormData(initialFormState);
    }, [token]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Handle input changes for the form fields
    const inputChangeEvent: ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    > = useCallback((e) => {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    }, []);

    // Handle row selection in the data grid
    const onGridSelect = (data: DataGridGenericType[]) => {
        if (data.length > 0) {
            setFormData(data[0] as UserRole);
        } else {
            setFormData(initialFormState);
        }
    };

    // Add a new role
    const addRoleEvent: MouseEventHandler<HTMLButtonElement> = useCallback(
        async (e) => {
            e.preventDefault();
            if (!formData.name.trim() || !formData.guard_name.trim()) {
                toast.error(t("name_and_description_required"));
                return;
            }
            const newRoleData = {
                name: formData.name.trim(),
                guard_name: formData.guard_name.trim(),
                permissions: formData.permissions,
            };
            try {
                await addUserRole(dispatch, token, newRoleData);
                setFormData(initialFormState);
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
        [formData, token, dispatch, t]
    );

    // Edit an existing role
    const editRoleEvent: MouseEventHandler<HTMLButtonElement> = useCallback(
        async (e) => {
            e.preventDefault();
            if (
                formData.id === 0 ||
                !formData.name.trim() ||
                !formData.guard_name.trim()
            ) {
                toast.error(t("select_item_and_fill_name_and_description"));
                return;
            }
            try {
                await editUserRole(dispatch, token, formData);
                setFormData(initialFormState);
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
        [formData, token, dispatch, t]
    );

    // Search for roles by name
    const searchRoleEvent: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        searchUserRole(dispatch, searchTerm, searching);
    };

    // Delete a role
    const deleteRoleEvent: MouseEventHandler<HTMLButtonElement> = useCallback(
        async (e) => {
            e.preventDefault();
            if (formData.id === 0) {
                toast.error(t("select_item_to_delete"));
                return;
            }
            if (
                window.confirm(
                    t("confirm_delete_role", { roleName: formData.name })
                )
            ) {
                try {
                    await deleteUserRole(dispatch, token, formData.id);
                    setFormData(initialFormState);
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
        [formData, token, dispatch, t]
    );

    // Handle search input changes
    const changeSearchFormEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    const GRID_COLUMNS_DEF = getUserRoleTableColumn(deleteRoleEvent);

    document.title = t("title");
    return (
        <>
            {/* User role form for add/edit */}
            <UserRoleForm
                formData={formData}
                editEventHandler={editRoleEvent}
                addEventHandler={addRoleEvent}
                inputChangeEvent={inputChangeEvent}
                isEditing={editing}
                isAdding={adding}
                translateFile={translateFilePath}
            />

            {/* Search, export, refresh, and print controls */}
            <div className="w-full bg-base-100 grid! grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-1">
                <RefreshButton
                    classes="btn-primary w-auto order-2 lg:order-1 lg:col-span-2"
                    text={t("refresh-btn")}
                    clickEvent={() => {
                        fetchData();
                    }}
                    isDisabled={fetching}
                />
                <SearchForm
                    placeHolder={t("search-placeholder")}
                    clickEvent={searchRoleEvent}
                    filterChangeable={false}
                    changeInputEvent={changeSearchFormEvent}
                    containerClasses="order-1 col-span-3 lg:order-2 lg:col-span-6 lg:col-end-9 w-full"
                >
                    <option defaultChecked>{t("filter-name")}</option>
                </SearchForm>
                <PrintButton
                    classes="btn-primary order-3 order-3 md:order-4 lg:col-span-2"
                    text={t("print-btn")}
                    clickEvent={() => {
                        setLang(lang === "ar" ? "en" : "ar");
                    }}
                />
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
                            clickEvent={() => {}}
                        />
                    </li>
                    <li>
                        <ExcelButton
                            classes="btn-primary"
                            text={t("excel-btn")}
                            clickEvent={() => {}}
                        />
                    </li>
                </Dropdown>
            </div>

            {/* Data grid for displaying user roles */}
            <div className="w-full md:m-1 lg:m-2 h-dvh bg-gray-100 dark:bg-gray-900 rounded-md flex flex-col">
                {fetching || mainStore.length === 0 ? (
                    <DataGridSkeleton />
                ) : (
                    <DataGrid
                        fetchSelectedData={onGridSelect}
                        columnDefs={GRID_COLUMNS_DEF}
                        rowData={mainStore}
                    />
                )}
            </div>
            <Pagination />
        </>
    );
};

export default UserRoleManagementView;
