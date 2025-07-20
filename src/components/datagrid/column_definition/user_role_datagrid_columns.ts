import DataGridDeleteColumnRenderer from "../datagrid_delete_column_renderer.tsx";
import type {MouseEventHandler} from "react";

// interface UserRoleTableColumnType {
//     handleAction: MouseEventHandler<HTMLButtonElement>
// }

export default function getUserRoleTableColumn(handleAction: MouseEventHandler<HTMLButtonElement>): object[] {
    return [
        {headerName: "ID", field: "id", minWidth: 60, width: 60},
        {headerName: "Name", field: "name"},
        {headerName: "Guard name", field: "guard_name"},
        {headerName: "Created at", field: "created_at"},
        {
            headerName: "",
            cellRenderer: DataGridDeleteColumnRenderer,
            minWidth: 80,
            width: 100,
            cellRendererParams: {
                handleDelete: handleAction
            }
        },
    ]
}

// export const UserRoleTableColumn: object[] = [
//     {headerName: "ID", field: "id", minWidth: 60, width: 60},
//     {headerName: "Name", field: "name"},
//     {headerName: "Guard name", field: "guard_name"},
//     {headerName: "Created at", field: "created_at"},
//     {headerName: "", cellRenderer: DataGridDeleteColumnRenderer, minWidth: 80, width: 100},
// ]