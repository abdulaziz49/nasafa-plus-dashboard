import DataGridDeleteColumnRenderer from "../../datagrid_column_renderers/datagrid_delete_column_renderer.tsx";
import type { MouseEventHandler } from "react";

// interface UserRoleTableColumnType {
//     handleAction: MouseEventHandler<HTMLButtonElement>
// }

export default function getUserRoleTableColumn(
    handleAction: MouseEventHandler<HTMLButtonElement>
): object[] {
    return [
        {
            headerName: "Num",
            field: "",
            minWidth: 60,
            width: 60,
            valueGetter: (params: any) => params.node.rowIndex + 1,
        },
        { headerName: "ID", field: "id", minWidth: 60, width: 60, hide: true },
        { headerName: "Name", field: "name" },
        { headerName: "Description", field: "description" },
        { headerName: "Locked", field: "is_locked", width: 80 },
        { headerName: "Created at", field: "created_at" },
        {
            headerName: "",
            cellRenderer: DataGridDeleteColumnRenderer,
            minWidth: 80,
            width: 100,
            cellRendererParams: {
                handleDelete: handleAction,
            },
        },
    ];
}

// export const UserRoleTableColumn: object[] = [
//     {headerName: "ID", field: "id", minWidth: 60, width: 60},
//     {headerName: "Name", field: "name"},
//     {headerName: "Guard name", field: "guard_name"},
//     {headerName: "Created at", field: "created_at"},
//     {headerName: "", cellRenderer: DataGridDeleteColumnRenderer, minWidth: 80, width: 100},
// ]
