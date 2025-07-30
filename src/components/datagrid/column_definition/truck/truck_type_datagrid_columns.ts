// import type { TFunction } from "i18next";
// import DataGridDeleteColumnRenderer from "../../datagrid_column_renderers/datagrid_delete_column_renderer.tsx";
// import type { MouseEventHandler } from "react";


// export default function getTruckTypeTableColumn(
//     handleAction: MouseEventHandler<HTMLButtonElement>,
//     translate:TFunction,
// ): object[] {
//     return [
//         {
//             headerName: translate("num-col"),
//             field: "",
//             minWidth: 60,
//             width: 60,
//             valueGetter: (params: any) => params.node.rowIndex + 1,
//         },
//         { headerName: "ID", field: "id", minWidth: 60, width: 60, hide: true },
//         { headerName: translate("name-col"), field: "name" },
//         { headerName: translate("desc-col"), field: "description" },
//         // { headerName: "Locked", field: "is_locked", width: 80,  },
//         {
//             headerName: translate("create-col"),
//             field: "created_at",
//             // FIXME - remove time from it and show the date only
//         },
//         {
//             headerName: "",
//             cellRenderer: DataGridDeleteColumnRenderer,
//             minWidth: 80,
//             width: 100,
//             cellRendererParams: {
//                 // FIXME - make this handler accepts id of the truck type
//                 handleDelete: handleAction,
//             },
//         },
//     ];
// }


import type { TFunction } from "i18next"; // Using i18next's TFunction type directly
import DataGridDeleteColumnRenderer from "../../datagrid_column_renderers/datagrid_delete_column_renderer.tsx";
import type { ICellRendererParams } from "ag-grid-community"; // Assuming ag-Grid or similar, common type for cell renderer params

// Define a type for the delete handler that accepts an ID
type DeleteActionHandler = (id: number) => void;

export default function getTruckTypeTableColumn(
  // Renamed for clarity: `onDeleteClick` is a more descriptive name for a prop that triggers deletion
  // This function will now directly accept the ID of the truck type to be deleted.
  onDeleteClick: DeleteActionHandler,
  translate: TFunction
): object[] {
  return [
    {
      headerName: translate("num-col"), // Translated header
      field: "", // No specific field for row index
      minWidth: 60,
      width: 60,
      // Use ICellRendererParams for more specific typing if using ag-Grid
      valueGetter: (params: ICellRendererParams) => {
        // params.node is available if using row models that support it (e.g., Client-Side Row Model)
        // Check if node and rowIndex exist before accessing
        return params.node ? params.node.rowIndex! + 1 : null;
      },
      // Optional: make this column un-sortable if it's just a row number
      sortable: false,
      filter: false,
      resizable: false,
    },
    // Hidden ID column, useful for internal logic like selecting or deleting
    { headerName: "ID", field: "id", minWidth: 60, width: 60, hide: true },
    { headerName: translate("name-col"), field: "name" }, // Translated header
    { headerName: translate("desc-col"), field: "description" }, // Translated header
    // { headerName: "Locked", field: "is_locked", width: 80, }, // Uncomment if needed

    {
      headerName: translate("create-col"), // Translated header
      field: "created_at",
      // FIXME - remove time from it and show the date only
      valueFormatter: (params: ICellRendererParams) => {
        if (params.value) {
          // Assuming params.value is a string that can be parsed by Date
          const date = new Date(params.value);
          // Use toLocaleDateString for a user-friendly date format
          // You might want to specify locale (e.g., 'en-US', 'ar-EG')
          return date.toLocaleDateString(translate("date_locale"));
        }
        return "";
      },
    },
    {
      headerName: "", // Empty header for action column
      cellRenderer: DataGridDeleteColumnRenderer,
      minWidth: 80,
      width: 100,
      cellRendererParams: (params: ICellRendererParams) => ({
        // FIXME - make this handler accepts id of the truck type
        // Now, the handleDelete prop passed to the renderer will be a function
        // that directly calls `onDeleteClick` with the row's ID.
        handleDelete: () => onDeleteClick(params.data.id),
      }),
      sortable: false,
      filter: false,
      resizable: false,
    },
  ];
}