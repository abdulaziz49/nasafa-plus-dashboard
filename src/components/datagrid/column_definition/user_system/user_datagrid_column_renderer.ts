// import { useTranslation } from "react-i18next";
// import DataGridDeleteColumnRenderer from "../../datagrid_column_renderers/datagrid_delete_column_renderer";
// import { type MouseEventHandler } from "react";

// interface UserTableColumnType {
//     translateFile: string;
//     handleDeleteAction: MouseEventHandler<HTMLButtonElement>;
//     handleResetPasswordAction: MouseEventHandler<HTMLButtonElement>;
// }

// export default function getUserTableColumn({
export default function getUserTableColumn(): object[] {
    //     handleDeleteAction,
    //     handleResetPasswordAction,
    //     translateFile,
    // }: UserTableColumnType): object[]
    // const { t } = useTranslation(translateFile);
    return [
        { headerName: "ID", field: "id", minWidth: 60, width: 60, hide: false },
        {
            headerName: "Num",
            field: "",
            minWidth: 60,
            width: 60,
            valueGetter: (params: any) => params.node.rowIndex + 1,
        },
        { headerName: "Name", field: "name" },
        { headerName: "Username", field: "username" },
        { headerName: "E-mail", field: "email" },
        { headerName: "Created at", field: "created_at" },
        { headerName: "Updated at", field: "updated_at" },
        // {
        //     headerName: "Status",
        //     field: "status",
        //     cellRenderer: (params: any) => {
        //         const { t } = useTranslation(translateFile);
        //         return t(`user-status.${params.value}`);
        //     },
        // },
        // {
        //     headerName: "Is Activated",
        //     field: "is_activated",
        //     cellRenderer: (params: any) => (params.value ? "Yes" : "No"),
        // },
        // {
        //     headerName: "Delete",
        //     cellRenderer: DataGridDeleteColumnRenderer,
        //     minWidth: 80,
        //     width: 100,
        //     cellRendererParams: {
        //         handleDelete: handleDeleteAction,
        //     },
        // },
        // {
        //     headerName: "ٌReset Password",
        //     cellRenderer: DataGridDeleteColumnRenderer,
        //     minWidth: 80,
        //     width: 100,
        //     cellRendererParams: {
        //         handleDelete: handleResetPasswordAction,
        //     },
        // },
    ];
}
