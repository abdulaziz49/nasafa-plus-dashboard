// import {
//     AllCommunityModule,
//     colorSchemeDarkBlue,
//     colorSchemeLightCold,
//     ModuleRegistry,
//     type RowSelectionOptions,
//     themeQuartz,
// } from "ag-grid-community";
// import { AgGridReact } from "ag-grid-react";
// import { type FC, type ReactElement, useMemo } from "react";
// import type { DataGridGenericType } from "./datagrid_generic_type.ts";
// import useUserSettingsStore from "../../states/stores/user_settings_store.ts";

// // Register AG Grid modules (required for AG Grid features)
// ModuleRegistry.registerModules([AllCommunityModule]);

// // Define AG Grid themes
// const themeLightCold = themeQuartz.withPart(colorSchemeLightCold);
// const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);

// /**
//  * Props for the DataGrid component.
//  * @template DataGridGenericType - The type of the row data.
//  */
// interface DataGridProps<DataGridGenericType> {
//     /**
//      * Column definitions for AG Grid.
//      */
//     columnDefs: object[];
//     /**
//      * Row data for the grid.
//      */
//     rowData: DataGridGenericType[];
//     /**
//      * Callback to fetch selected row data.
//      */
//     fetchSelectedData: (data: DataGridGenericType[]) => void;
// }

// /**
//  * DataGrid is a generic, theme-aware, RTL-aware AG Grid wrapper component.
//  * It supports single row selection and notifies the parent with selected data.
//  *
//  * @param {DataGridProps<DataGridGenericType>} props - The component props.
//  * @returns {ReactElement} The rendered AG Grid component.
//  */
// const DataGrid: FC<DataGridProps<DataGridGenericType>> = ({
//     fetchSelectedData,
//     columnDefs,
//     rowData,
// }: DataGridProps<DataGridGenericType>): ReactElement => {
//     // Default column definition for all columns
//     const defaultColDef: object = {
//         editable: false,
//         minWidth: 20,
//         filter: false,
//     };

//     // Get RTL and dark mode settings from user settings store
//     const { isRTL, isDark } = useUserSettingsStore();

//     // Configure single row selection mode
//     const singleRowSelection = useMemo<
//         RowSelectionOptions | "single" | "multiple"
//     >(() => {
//         return {
//             mode: "singleRow",
//             enableClickSelection: true,
//             checkboxes: false,
//         };
//     }, []);

//     return (
//         <AgGridReact
//             theme={isDark ? themeDarkBlue : themeLightCold}
//             columnDefs={columnDefs}
//             rowData={rowData}
//             enableRtl={isRTL}
//             defaultColDef={defaultColDef}
//             rowSelection={singleRowSelection}
//             cellSelection={false}
//             onRowClicked={(e) => {
//                 fetchSelectedData(
//                     e.api.getSelectedRows() as DataGridGenericType[]
//                 );
//             }}
//         />
//     );
// };

// export default DataGrid;

// // FIXME - make the datagrid a generic component

import {
    AllCommunityModule,
    colorSchemeDarkBlue,
    colorSchemeLightCold,
    ModuleRegistry,
    type RowSelectionOptions,
    themeQuartz,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { type ReactElement, useMemo } from "react";
// No need to import DataGridGenericType directly here if it's just a placeholder
// We'll define the generic type parameter on the component itself.
import useUserSettingsStore from "../../states/stores/user_settings_store.ts";

// Register AG Grid modules (required for AG Grid features)
ModuleRegistry.registerModules([AllCommunityModule]);

// Define AG Grid themes
const themeLightCold = themeQuartz.withPart(colorSchemeLightCold);
const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);

/**
 * Props for the DataGrid component.
 * @template TData - The type of the row data. (Renamed for clarity, often T or TData)
 */
interface DataGridProps<TData> {
    // Use TData here
    /**
     * Column definitions for AG Grid.
     */
    columnDefs: object[]; // Consider making this more specific, e.g., ColDef[] from ag-grid-community
    /**
     * Row data for the grid.
     */
    rowData: TData[]; // Use TData here
    /**
     * Callback to fetch selected row data.
     */
    fetchSelectedData: (data: TData[]) => void; // Use TData here
}

/**
 * DataGrid is a generic, theme-aware, RTL-aware AG Grid wrapper component.
 * It supports single row selection and notifies the parent with selected data.
 *
 * @param {DataGridProps<TData>} props - The component props.
 * @returns {ReactElement} The rendered AG Grid component.
 */
// Explicitly declare the generic type parameter <TData> on the FC
const DataGrid = <TData,>({
    // <TData,> is the correct syntax for a generic FC
    fetchSelectedData,
    columnDefs,
    rowData,
}: DataGridProps<TData>): ReactElement => {
    // Use DataGridProps<TData>
    // Default column definition for all columns
    const defaultColDef: object = {
        // Consider making this more specific, e.g., ColDef
        editable: false,
        minWidth: 20,
        filter: false,
    };

    // Get RTL and dark mode settings from user settings store
    const { isRTL, isDark } = useUserSettingsStore();

    // Configure single row selection mode
    const singleRowSelection = useMemo<
        RowSelectionOptions | "single" | "multiple"
    >(() => {
        return {
            mode: "singleRow",
            enableClickSelection: true,
            checkboxes: false,
        };
    }, []);

    return (
        <AgGridReact
            theme={isDark ? themeDarkBlue : themeLightCold}
            columnDefs={columnDefs}
            rowData={rowData}
            enableRtl={isRTL}
            defaultColDef={defaultColDef}
            rowSelection={singleRowSelection}
            cellSelection={false}
            onRowClicked={(e) => {
                // Cast to TData[] instead of DataGridGenericType[]
                fetchSelectedData(e.api.getSelectedRows() as TData[]);
            }}
        />
    );
};

export default DataGrid;
