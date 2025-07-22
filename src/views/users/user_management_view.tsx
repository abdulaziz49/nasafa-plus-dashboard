import DataGrid from "../../components/datagrid/datagrid.tsx";
import Pagination from "../../components/pagination.tsx";
import { useTranslation } from "react-i18next";
import UserForm from "../../components/forms/system_user/user_form.tsx";
import { useCallback, useEffect, useReducer, useState } from "react";
import { initialUserFormState, type User } from "../../models/user_system/user_models.ts";
import RefreshButton from "../../components/buttons/crud_buttons/refresh_button.tsx";
import SearchForm from "../../components/forms/search_form.tsx";
import Dropdown from "../../components/dropdown.tsx";
import PDFButton from "../../components/buttons/crud_buttons/pdf_button.tsx";
import ExcelButton from "../../components/buttons/crud_buttons/excel_button.tsx";
import { useAuthStore } from "../../states/stores/auth_store.ts";
import UserReducer, {
    initialUserViewState,
} from "../../states/reducers/storage/user_system/user_reducer.ts";
import { fetchUsers } from "../../states/reducers/actions/services/user_system/user_service.ts";
import getUserTableColumn from "../../components/datagrid/column_definition/user_system/user_datagrid_column_renderer.ts";
import DataGridSkeleton from "../../components/skeletons/datagrid_skeleton.tsx";
import type { DataGridGenericType } from "../../components/datagrid/datagrid_generic_type.ts";


const UserManagementView = () => {
    const TRANSLATE_FILE_PATH = "user-management/user";

    const { t } = useTranslation(TRANSLATE_FILE_PATH);

    const { token } = useAuthStore();

    const [{ mainStore, fetching }, dispatch] = useReducer(
        UserReducer,
        initialUserViewState
    );

    const [userFormData, setUserFormData] =
        useState<User>(initialUserFormState);

    // Fetch all users from the backend
    const fetchData = useCallback(async () => {
        await fetchUsers(dispatch, token);
    }, [token]);

    // Handle row selection in the data grid
    const onGridSelect = (data: DataGridGenericType[]) => {
        if (data.length > 0) {
            setUserFormData(data[0] as User);
        } else {
            setUserFormData(initialUserFormState);
        }
    };

    const GRID_COLUMNS_DEF = getUserTableColumn();
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    document.title = t("title");

    return (
        <>
            <UserForm
                formData={userFormData}
                addEventHandler={() => {}}
                editEventHandler={() => {}}
                inputChangeEvent={() => {}}
                isAdding={false}
                isEditing={false}
                translateFile={TRANSLATE_FILE_PATH}
                roles={[]}
            />

            {/* Search, export, refresh, and print controls */}
            <div className="w-full bg-base-100 grid! grid-cols-6 grid-rows-2 lg:grid-rows-1 lg:grid-cols-10 gap-1">
                <RefreshButton
                    classes="btn-primary w-auto col-span-3  order-2 lg:order-1 lg:col-span-2"
                    text={t("refresh-btn")}
                    clickEvent={() => fetchData()}
                />
                <SearchForm
                    placeHolder={t("search-placeholder")}
                    // clickEvent={searchRoleEvent}
                    clickEvent={() => {}}
                    filterChangeable={true}
                    // changeInputEvent={changeSearchFormEvent}
                    changeInputEvent={() => {}}
                    containerClasses="order-1 col-span-6 lg:order-2 lg:col-span-6 lg:col-end-9 w-full mb-0"
                >
                    <option defaultChecked value={0}>
                        {t("filter-name")}
                    </option>
                    <option value={1}>{t("filter-role")}</option>
                </SearchForm>
                <Dropdown
                    text={t("export-dropdown")}
                    bgColor="primary"
                    uniqueKey="export-drop-menu"
                    classes={
                        "btn-primary col-span-3 order-4 lg:order-4 shadow-md lg:col-span-2"
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
                        // fetchSelectedData={onGridSelect}
                        fetchSelectedData={onGridSelect}
                        columnDefs={GRID_COLUMNS_DEF}
                        // columnDefs={[]}
                        rowData={mainStore}
                        // rowData={[]}
                    />
                )}
            </div>
            <Pagination />
        </>
    );
};

export default UserManagementView;
