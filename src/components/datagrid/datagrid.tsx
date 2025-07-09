// import React, { useState, useRef, useMemo, useCallback } from 'react';
//
// // Define the interface for your data rows
// interface UserData {
//     id: number;
//     Name: string;
//     Job: string;
//     Company: string;
//     Location: string;
//     "Last Login": string;
//     "Favorite Color": string;
// }
//
// // Define interface for column definition
// interface ColumnDef {
//     id: string; // Unique identifier for the column, typically matches a key in UserData
//     label: string; // Display label for the column header
//     accessor: keyof UserData; // Key to access the data from a UserData object
//     reorderable?: boolean; // Whether this column can be reordered (optional, default true)
//     sortable?: boolean; // Whether this column can be sorted (optional, default true for data columns)
//     resizable?: boolean; // Whether this column can be resized (optional, default true for data columns)
//     minWidth?: number; // Minimum width for the column
// }
//
// // Define the shape of our sort state
// interface SortConfig {
//     key: string | null; // The ID of the column being sorted
//     direction: 'asc' | 'desc' | null; // The sort direction
// }
//
// const DataGrid: React.FC = () => {
//     // Initial data (using the provided data)
//     const initialData: UserData[] = [
//         { id: 1, Name: "Cy Ganderton", Job: "Quality Control Specialist", Company: "Littel, Schaden and Vandervort", Location: "Canada", "Last Login": "12/16/2020", "Favorite Color": "Blue" },
//         { id: 2, Name: "Hart Hagerty", Job: "Desktop Support Technician", Company: "Zemlak, Daniel and Leannon", Location: "United States", "Last Login": "12/5/2020", "Favorite Color": "Purple" },
//         { id: 3, Name: "Brice Swyre", Job: "Tax Accountant", Company: "Carroll Group", Location: "China", "Last Login": "8/15/2020", "Favorite Color": "Red" },
//         { id: 4, Name: "Marjy Ferencz", Job: "Office Assistant I", Company: "Rowe-Schoen", Location: "Russia", "Last Login": "3/25/2021", "Favorite Color": "Crimson" },
//         { id: 5, Name: "Yancy Tear", Job: "Community Outreach Specialist", Company: "Wyman-Ledner", Location: "Brazil", "Last Login": "5/22/2020", "Favorite Color": "Indigo" },
//         { id: 6, Name: "Irma Vasilik", Job: "Editor", Company: "Wiza, Bins and Emard", Location: "Venezuela", "Last Login": "12/8/2020", "Favorite Color": "Purple" },
//         { id: 7, Name: "Meghann Durtnal", Job: "Staff Accountant IV", Company: "Schuster-Schimmel", Location: "Philippines", "Last Login": "2/17/2021", "Favorite Color": "Yellow" },
//         { id: 8, Name: "Sammy Seston", Job: "Accountant I", Company: "O'Hara, Welch and Keebler", Location: "Indonesia", "Last Login": "5/23/2020", "Favorite Color": "Crimson" },
//         { id: 9, Name: "Lesya Tinham", Job: "Safety Technician IV", Company: "Turner-Kuhlman", Location: "Philippines", "Last Login": "2/21/2021", "Favorite Color": "Maroon" },
//         { id: 10, Name: "Zaneta Tewkesbury", Job: "VP Marketing", Company: "Sauer LLC", Location: "Chad", "Last Login": "6/23/2020", "Favorite Color": "Green" },
//         { id: 11, Name: "Andy Tipple", Job: "Librarian", Company: "Hilpert Group", Location: "Poland", "Last Login": "7/9/2020", "Favorite Color": "Indigo" },
//         { id: 12, Name: "Sophi Biles", Job: "Recruiting Manager", Company: "Gutmann Inc", Location: "Indonesia", "Last Login": "2/12/2021", "Favorite Color": "Maroon" },
//         { id: 13, Name: "Florida Garces", Job: "Web Developer IV", Company: "Gaylord, Pacocha and Baumbach", Location: "Poland", "Last Login": "5/31/2020", "Favorite Color": "Purple" },
//         { id: 14, Name: "Maribeth Popping", Job: "Analyst Programmer", Company: "Deckow-Pouros", Location: "Portugal", "Last Login": "4/27/2021", "Favorite Color": "Aquamarine" },
//         { id: 15, Name: "Moritz Dryburgh", Job: "Dental Hygienist", Company: "Schiller, Cole and Hackett", Location: "Sri Lanka", "Last Login": "8/8/2020", "Favorite Color": "Crimson" },
//         { id: 16, Name: "Reid Semiras", Job: "Teacher", Company: "Sporer, Sipes and Rogahn", Location: "Poland", "Last Login": "7/30/2020", "Favorite Color": "Green" },
//         { id: 17, Name: "Alec Lethby", Job: "Teacher", Company: "Reichel, Glover and Hamill", Location: "China", "Last Login": "2/28/2021", "Favorite Color": "Khaki" },
//         { id: 18, Name: "Aland Wilber", Job: "Quality Control Specialist", Company: "Kshlerin, Rogahn and Swaniawski", Location: "Czech Republic", "Last Login": "9/29/2020", "Favorite Color": "Purple" },
//         { id: 19, Name: "Teddie Duerden", Job: "Staff Accountant III", Company: "Pouros, Ullrich and Windler", Location: "France", "Last Login": "10/27/2020", "Favorite Color": "Aquamarine" },
//         { id: 20, Name: "Lorelei Blackstone", Job: "Data Coordinator", Company: "Witting, Kutch and Greenfelder", Location: "Kazakhstan", "Last Login": "6/3/2020", "Favorite Color": "Red" }
//     ];
//
//     const initialColumns: ColumnDef[] = [
//         { id: "id", label: "#", accessor: "id", reorderable: false, sortable: true, resizable: false, minWidth: 40 },
//         { id: "Name", label: "Name", accessor: "Name", sortable: true, resizable: true, minWidth: 120 },
//         { id: "Job", label: "Job", accessor: "Job", sortable: true, resizable: true, minWidth: 150 },
//         { id: "Company", label: "Company", accessor: "Company", sortable: true, resizable: true, minWidth: 180 },
//         { id: "Location", label: "Location", accessor: "Location", sortable: true, resizable: true, minWidth: 100 },
//         { id: "Last Login", label: "Last Login", accessor: "Last Login", sortable: true, resizable: true, minWidth: 120 },
//         { id: "Favorite Color", label: "Favorite Color", accessor: "Favorite Color", sortable: true, resizable: true, minWidth: 120 },
//         { id: "actions", label: "Actions", accessor: "id", reorderable: false, sortable: false, resizable: false, minWidth: 80 },
//     ];
//
//     const [columns, setColumns] = useState<ColumnDef[]>(initialColumns);
//     const [tableData] = useState<UserData[]>(initialData);
//     const draggedColumnRef = useRef<string | null>(null);
//
//     // State for sorting
//     const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: null });
//
//     // State for column widths
//     const [columnWidths, setColumnWidths] = useState<Record<string, number>>(() => {
//         const widths: Record<string, number> = {};
//         initialColumns.forEach(col => {
//             widths[col.id] = col.minWidth || 100; // Default or specified minWidth
//         });
//         return widths;
//     });
//
//     // Refs to store information about the current resize operation
//     const resizingColumnId = useRef<string | null>(null);
//     const initialMouseX = useRef<number>(0);
//     const initialColumnWidth = useRef<number>(0);
//
//     // --- Column Resizing Handlers ---
//
//     const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>, columnId: string) => {
//         e.stopPropagation(); // Prevent sorting or other header clicks
//         resizingColumnId.current = columnId;
//         initialMouseX.current = e.clientX;
//         initialColumnWidth.current = columnWidths[columnId];
//
//         // Add global event listeners for mouse move and up
//         // This is crucial for resizing to continue even if the mouse leaves the handle
//         window.addEventListener('mousemove', handleMouseMove);
//         window.addEventListener('mouseup', handleMouseUp);
//         document.body.style.cursor = 'ew-resize'; // Change cursor globally
//         document.body.style.userSelect = 'none'; // Prevent text selection during drag
//     }, [columnWidths]);
//
//     const handleMouseMove = useCallback((e: MouseEvent) => {
//         if (!resizingColumnId.current) return;
//
//         const currentColumnDef = columns.find(col => col.id === resizingColumnId.current);
//         if (!currentColumnDef || currentColumnDef.resizable === false) return;
//
//         // Determine direction based on document direction (RTL or LTR)
//         const directionMultiplier = document.documentElement.dir === 'rtl' ? -1 : 1;
//         const deltaX = (e.clientX - initialMouseX.current) * directionMultiplier;
//         let newWidth = initialColumnWidth.current + deltaX;
//
//         // Apply minimum width
//         if (currentColumnDef.minWidth && newWidth < currentColumnDef.minWidth) {
//             newWidth = currentColumnDef.minWidth;
//         }
//
//         setColumnWidths(prevWidths => ({
//             ...prevWidths,
//             [resizingColumnId.current!]: newWidth,
//         }));
//     }, [columns]);
//
//     const handleMouseUp = useCallback(() => {
//         resizingColumnId.current = null;
//         window.removeEventListener('mousemove', handleMouseMove);
//         window.removeEventListener('mouseup', handleMouseUp);
//         document.body.style.cursor = 'default'; // Reset cursor
//         document.body.style.userSelect = 'auto'; // Re-enable text selection
//     }, [handleMouseMove]);
//
//
//     // --- Sorting Logic ---
//     const sortedTableData = useMemo(() => {
//         let sortableItems = [...tableData];
//         if (sortConfig.key !== null) {
//             sortableItems.sort((a, b) => {
//                 const aValue = a[sortConfig.key as keyof UserData];
//                 const bValue = b[sortConfig.key as keyof UserData];
//
//                 if (typeof aValue === 'string' && typeof bValue === 'string') {
//                     if (sortConfig.key === "Last Login") {
//                         const dateA = new Date(aValue);
//                         const dateB = new Date(bValue);
//                         if (dateA < dateB) return sortConfig.direction === 'asc' ? -1 : 1;
//                         if (dateA > dateB) return sortConfig.direction === 'asc' ? 1 : -1;
//                         return 0;
//                     }
//                     if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
//                     if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
//                     return 0;
//                 }
//
//                 if (typeof aValue === 'number' && typeof bValue === 'number') {
//                     return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
//                 }
//
//                 if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
//                 if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
//                 return 0;
//             });
//         }
//         return sortableItems;
//     }, [tableData, sortConfig]);
//
//     const handleSort = useCallback((columnId: string) => {
//         const columnDef = columns.find(col => col.id === columnId);
//         if (!columnDef || !columnDef.sortable) {
//             return;
//         }
//
//         let direction: 'asc' | 'desc' | null = 'asc';
//         if (sortConfig.key === columnId && sortConfig.direction === 'asc') {
//             direction = 'desc';
//         } else if (sortConfig.key === columnId && sortConfig.direction === 'desc') {
//             direction = null;
//         }
//         setSortConfig({ key: columnId, direction: direction });
//     }, [columns, sortConfig]);
//
//     // --- Column Reordering Handlers ---
//     const handleDragStart = useCallback((e: React.DragEvent<HTMLTableCellElement>, columnId: string) => {
//         // Prevent drag for resizing when a resize is active or column is not reorderable
//         if (resizingColumnId.current) {
//             e.preventDefault();
//             return;
//         }
//         const columnDef = columns.find(col => col.id === columnId);
//         if (columnDef?.reorderable === false) {
//             e.preventDefault();
//             return;
//         }
//
//         draggedColumnRef.current = columnId;
//         e.dataTransfer.effectAllowed = 'move';
//         e.currentTarget.classList.add('opacity-50', 'border-blue-500', 'border-2');
//     }, [columns]);
//
//     const handleDragOver = useCallback((e: React.DragEvent<HTMLTableCellElement>, targetColumnId: string) => {
//         e.preventDefault();
//         // Do not add highlight if a resize is active
//         if (resizingColumnId.current) return;
//
//         const draggedColumnId = draggedColumnRef.current;
//         const targetColumnDef = columns.find(col => col.id === targetColumnId);
//         const draggedColumnDef = columns.find(col => col.id === draggedColumnId);
//
//         if (!draggedColumnId || draggedColumnId === targetColumnId || draggedColumnDef?.reorderable === false || targetColumnDef?.reorderable === false) {
//             return;
//         }
//
//         e.currentTarget.classList.add('border-blue-300', 'border-l-2', 'rtl:border-l-0', 'rtl:border-r-2');
//     }, [columns]);
//
//     const handleDragLeave = useCallback((e: React.DragEvent<HTMLTableCellElement>) => {
//         if (resizingColumnId.current) return;
//         e.currentTarget.classList.remove('border-blue-300', 'border-l-2', 'rtl:border-l-0', 'rtl:border-r-2');
//     }, []);
//
//     const handleDrop = useCallback((e: React.DragEvent<HTMLTableCellElement>, targetColumnId: string) => {
//         e.preventDefault();
//         const draggedColumnId = draggedColumnRef.current;
//         e.currentTarget.classList.remove('border-blue-300', 'border-l-2', 'rtl:border-l-0', 'rtl:border-r-2');
//
//         if (!draggedColumnId || draggedColumnId === targetColumnId) {
//             return;
//         }
//
//         setColumns((prevColumns) => {
//             const newColumns = [...prevColumns];
//
//             const draggedIndex = newColumns.findIndex(col => col.id === draggedColumnId);
//             const targetIndex = newColumns.findIndex(col => col.id === targetColumnId);
//
//             if (draggedIndex === -1 || targetIndex === -1) {
//                 return prevColumns;
//             }
//
//             if (newColumns[draggedIndex].reorderable === false || newColumns[targetIndex].reorderable === false) {
//                 return prevColumns;
//             }
//
//             const [reorderedColumn] = newColumns.splice(draggedIndex, 1);
//             newColumns.splice(targetIndex, 0, reorderedColumn);
//
//             return newColumns;
//         });
//
//         draggedColumnRef.current = null;
//     }, []);
//
//     const handleDragEnd = useCallback((e: React.DragEvent<HTMLTableCellElement>) => {
//         e.currentTarget.classList.remove('opacity-50', 'border-blue-500', 'border-2');
//         draggedColumnRef.current = null;
//     }, []);
//
//     return (
//         <div className="w-full md:m-1 lg:m-2 h-dvh bg-base-100 overflow-auto rounded rounded-md shadow shadow-lg shadow-gray-200 dark:shadow-gray-900">
//             {/* Added table-fixed for predictable column widths */}
//             <table className="table-fixed border-collapse w-full text-gray-800 dark:text-gray-200">
//                 <thead className="bg-gray-200 dark:bg-gray-700">
//                 <tr className="border-b border-gray-300 dark:border-gray-600">
//                     {columns.map((column) => (
//                         <th
//                             key={column.id}
//                             className={`px-4 py-2 text-left font-semibold select-none relative group
//                                     ${column.reorderable !== false ? 'cursor-grab' : 'cursor-default opacity-70'}
//                                     ${column.sortable ? 'hover:bg-gray-300 dark:hover:bg-gray-600' : ''}
//                                     transition-colors duration-100`}
//                             draggable={column.reorderable !== false}
//                             onDragStart={(e) => handleDragStart(e, column.id)}
//                             onDragOver={(e) => handleDragOver(e, column.id)}
//                             onDrop={(e) => handleDrop(e, column.id)}
//                             onDragLeave={handleDragLeave}
//                             onDragEnd={handleDragEnd}
//                             onClick={() => handleSort(column.id)}
//                             style={{ width: columnWidths[column.id] ? `${columnWidths[column.id]}px` : undefined }}
//                         >
//                             <div className="flex items-center justify-between">
//                                 <span>{column.label}</span>
//                                 {column.sortable && sortConfig.key === column.id && (
//                                     <span className="ml-2">
//                                             {sortConfig.direction === 'asc' ? '▲' : '▼'}
//                                         </span>
//                                 )}
//                             </div>
//                             {column.resizable !== false && (
//                                 <div
//                                     onMouseDown={(e) => handleMouseDown(e, column.id)}
//                                     className={`absolute inset-y-0 ${document.documentElement.dir === 'rtl' ? 'left-0' : 'right-0'} w-2 bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-blue-500 transition-opacity cursor-ew-resize`}
//                                     style={{ transform: document.documentElement.dir === 'rtl' ? 'translateX(50%)' : 'translateX(-50%)' }} // To center the handle on the edge
//                                 />
//                             )}
//                         </th>
//                     ))}
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {sortedTableData.length === 0 ? (
//                     <tr>
//                         <td colSpan={columns.length} className="px-4 py-2 text-center text-gray-500 dark:text-gray-400">
//                             No data available.
//                         </td>
//                     </tr>
//                 ) : (
//                     sortedTableData.map((row) => (
//                         <tr key={row.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-100">
//                             {columns.map((column) => (
//                                 <td key={column.id} className="px-4 py-2 whitespace-nowrap overflow-hidden text-ellipsis"
//                                     style={{ width: columnWidths[column.id] ? `${columnWidths[column.id]}px` : undefined }}
//                                 >
//                                     {column.id === 'actions' ? (
//                                         <button className="text-blue-600 hover:underline dark:text-blue-400">Edit</button>
//                                     ) : (
//                                         row[column.accessor]
//                                     )}
//                                 </td>
//                             ))}
//                         </tr>
//                     ))
//                 )}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
//
// export default DataGrid;
//
//

// import React, {useState, useRef, useMemo, useCallback, useEffect} from 'react';
// import {AgGridReact} from 'ag-grid-react';
// import {
//     AllCommunityModule,
//     ModuleRegistry,
//     colorSchemeDarkBlue,
//     colorSchemeDarkWarm,
//     colorSchemeLightCold,
//     colorSchemeLightWarm,
//     themeQuartz,
// } from 'ag-grid-community';
//
// // AG Grid CSS (choose your theme)
// // import 'ag-grid-community/styles/ag-grid.css';
// // import 'ag-grid-community/styles/ag-theme-alpine.css'; // Light theme
// // import 'ag-grid-community/styles/ag-theme-alpine-dark.css'; // Dark theme
//
// // Assuming you have this hook for dark mode, if not, create it or remove dark mode features
// // import useDarkMode from './hooks/useDarkMode'; // Adjust path as needed
//
// // Define the interface for your data rows
// interface UserData {
//     id: number;
//     Name: string;
//     Job: string;
//     Company: string;
//     Location: string;
//     "Last Login": string;
//     "Favorite Color": string;
// }
//
// // Dummy Dark Mode Hook (if you don't have a real one)
// const useDarkMode = () => {
//     const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
//         if (typeof window !== 'undefined') {
//             const savedMode = localStorage.getItem('darkMode');
//             if (savedMode !== null) return savedMode === 'true';
//             return window.matchMedia('(prefers-color-scheme: dark)').matches;
//         }
//         return false;
//     });
//
//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             const root = window.document.documentElement;
//             if (isDarkMode) {
//                 root.classList.add('dark');
//                 localStorage.setItem('darkMode', 'true');
//             } else {
//                 root.classList.remove('dark');
//                 localStorage.setItem('darkMode', 'false');
//             }
//         }
//     }, [isDarkMode]);
//
//     const toggleDarkMode = () => setIsDarkMode(prev => !prev);
//     return [isDarkMode, toggleDarkMode] as const;
// };
//
// ModuleRegistry.registerModules([AllCommunityModule]);
//
// const themeLightWarm = themeQuartz.withPart(colorSchemeLightWarm);
// const themeLightCold = themeQuartz.withPart(colorSchemeLightCold);
// const themeDarkWarm = themeQuartz.withPart(colorSchemeDarkWarm);
// const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);
//
//
// // Custom Cell Renderer for the Delete Button
// const DeleteCellRenderer: React.FC<ICellRendererParams<UserData>> = (props) => {
//     const handleDelete = () => {
//         if (props.data && props.api) {
//             // In a real app, you'd confirm with the user before deleting
//             // and then update your application's state (e.g., call a prop function)
//             // For this example, we'll delete from the grid directly for demonstration
//             props.api.applyTransaction({remove: [props.data]});
//             console.log("Deleted row with ID:", props.data.id);
//         }
//     };
//
//     return (
//         <button
//             onClick={handleDelete}
//             className="text-red-600 hover:underline dark:text-red-400 text-sm font-medium"
//         >
//             Delete
//         </button>
//     );
// };
//
//
// const DataGrid: React.FC = () => {
//     // Original data, now as rowData for AG Grid
//     const rowData: UserData[] = useMemo(() => [
//         {
//             id: 1,
//             Name: "Cy Ganderton",
//             Job: "Quality Control Specialist",
//             Company: "Littel, Schaden and Vandervort",
//             Location: "Canada",
//             "Last Login": "12/16/2020",
//             "Favorite Color": "Blue"
//         },
//         {
//             id: 2,
//             Name: "Hart Hagerty",
//             Job: "Desktop Support Technician",
//             Company: "Zemlak, Daniel and Leannon",
//             Location: "United States",
//             "Last Login": "12/5/2020",
//             "Favorite Color": "Purple"
//         },
//         {
//             id: 3,
//             Name: "Brice Swyre",
//             Job: "Tax Accountant",
//             Company: "Carroll Group",
//             Location: "China",
//             "Last Login": "8/15/2020",
//             "Favorite Color": "Red"
//         },
//         {
//             id: 4,
//             Name: "Marjy Ferencz",
//             Job: "Office Assistant I",
//             Company: "Rowe-Schoen",
//             Location: "Russia",
//             "Last Login": "3/25/2021",
//             "Favorite Color": "Crimson"
//         },
//         {
//             id: 5,
//             Name: "Yancy Tear",
//             Job: "Community Outreach Specialist",
//             Company: "Wyman-Ledner",
//             Location: "Brazil",
//             "Last Login": "5/22/2020",
//             "Favorite Color": "Indigo"
//         },
//         {
//             id: 6,
//             Name: "Irma Vasilik",
//             Job: "Editor",
//             Company: "Wiza, Bins and Emard",
//             Location: "Venezuela",
//             "Last Login": "12/8/2020",
//             "Favorite Color": "Purple"
//         },
//         {
//             id: 7,
//             Name: "Meghann Durtnal",
//             Job: "Staff Accountant IV",
//             Company: "Schuster-Schimmel",
//             Location: "Philippines",
//             "Last Login": "2/17/2021",
//             "Favorite Color": "Yellow"
//         },
//         {
//             id: 8,
//             Name: "Sammy Seston",
//             Job: "Accountant I",
//             Company: "O'Hara, Welch and Keebler",
//             Location: "Indonesia",
//             "Last Login": "5/23/2020",
//             "Favorite Color": "Crimson"
//         },
//         {
//             id: 9,
//             Name: "Lesya Tinham",
//             Job: "Safety Technician IV",
//             Company: "Turner-Kuhlman",
//             Location: "Philippines",
//             "Last Login": "2/21/2021",
//             "Favorite Color": "Maroon"
//         },
//         {
//             id: 10,
//             Name: "Zaneta Tewkesbury",
//             Job: "VP Marketing",
//             Company: "Sauer LLC",
//             Location: "Chad",
//             "Last Login": "6/23/2020",
//             "Favorite Color": "Green"
//         },
//         {
//             id: 11,
//             Name: "Andy Tipple",
//             Job: "Librarian",
//             Company: "Hilpert Group",
//             Location: "Poland",
//             "Last Login": "7/9/2020",
//             "Favorite Color": "Indigo"
//         },
//         {
//             id: 12,
//             Name: "Sophi Biles",
//             Job: "Recruiting Manager",
//             Company: "Gutmann Inc",
//             Location: "Indonesia",
//             "Last Login": "2/12/2025",
//             "Favorite Color": "Maroon"
//         },
//         {
//             id: 13,
//             Name: "Florida Garces",
//             Job: "Web Developer IV",
//             Company: "Gaylord, Pacocha and Baumbach",
//             Location: "Poland",
//             "Last Login": "5/31/2020",
//             "Favorite Color": "Purple"
//         },
//         {
//             id: 14,
//             Name: "Maribeth Popping",
//             Job: "Analyst Programmer",
//             Company: "Deckow-Pouros",
//             Location: "Portugal",
//             "Last Login": "4/27/2021",
//             "Favorite Color": "Aquamarine"
//         },
//         {
//             id: 15,
//             Name: "Moritz Dryburgh",
//             Job: "Dental Hygienist",
//             Company: "Schiller, Cole and Hackett",
//             Location: "Sri Lanka",
//             "Last Login": "8/8/2020",
//             "Favorite Color": "Crimson"
//         },
//         {
//             id: 16,
//             Name: "Reid Semiras",
//             Job: "Teacher",
//             Company: "Sporer, Sipes and Rogahn",
//             Location: "Poland",
//             "Last Login": "7/30/2020",
//             "Favorite Color": "Green"
//         },
//         {
//             id: 17,
//             Name: "Alec Lethby",
//             Job: "Teacher",
//             Company: "Reichel, Glover and Hamill",
//             Location: "China",
//             "Last Login": "2/28/2021",
//             "Favorite Color": "Khaki"
//         },
//         {
//             id: 18,
//             Name: "Aland Wilber",
//             Job: "Quality Control Specialist",
//             Company: "Kshlerin, Rogahn and Swaniawski",
//             Location: "Czech Republic",
//             "Last Login": "9/29/2020",
//             "Favorite Color": "Purple"
//         },
//         {
//             id: 19,
//             Name: "Teddie Duerden",
//             Job: "Staff Accountant III",
//             Company: "Pouros, Ullrich and Windler",
//             Location: "France",
//             "Last Login": "10/27/2020",
//             "Favorite Color": "Aquamarine"
//         },
//         {
//             id: 20,
//             Name: "Lorelei Blackstone",
//             Job: "Data Coordinator",
//             Company: "Witting, Kutch and Greenfelder",
//             Location: "Kazakhstan",
//             "Last Login": "6/3/2020",
//             "Favorite Color": "Red"
//         }
//     ], []);
//
//     const [isDarkMode, toggleDarkMode] = useDarkMode(); // Use your dark mode hook
//
//     const gridRef = useRef<AgGridReact<UserData>>(null);
//     const [gridApi, setGridApi] = useState<GridApi | null>(null);
//
//     // Column Definitions for AG Grid
//     const columnDefs: ColDef<UserData>[] = useMemo(() => [
//         {
//             headerName: '', // Empty header for checkbox column
//             checkboxSelection: true, // Enables row selection checkbox
//             headerCheckboxSelection: true, // Enables select-all checkbox in header
//             width: 40,
//             minWidth: 40,
//             maxWidth: 40,
//             suppressMovable: true, // Prevent reordering this column
//             resizable: false, // Prevent resizing this column
//             sortable: false, // Prevent sorting this column
//             // Cell styling for checkbox column (optional)
//             cellClass: 'flex items-center justify-center'
//         },
//         {field: 'id', headerName: '#', width: 50, minWidth: 40, suppressMovable: true, resizable: false},
//         {field: 'Name', headerName: 'Name', sortable: true, filter: true, resizable: true},
//         {field: 'Job', headerName: 'Job', sortable: true, filter: true, resizable: true},
//         {field: 'Company', headerName: 'Company', sortable: true, filter: true, resizable: true},
//         {field: 'Location', headerName: 'Location', sortable: true, filter: true, resizable: true},
//         {
//             field: 'Last Login', headerName: 'Last Login', sortable: true, filter: true, resizable: true,
//             // Custom comparator for date strings if not using date objects
//             comparator: (valueA: string, valueB: string) => {
//                 const dateA = new Date(valueA);
//                 const dateB = new Date(valueB);
//                 return dateA.getTime() - dateB.getTime();
//             }
//         },
//         {field: 'Favorite Color', headerName: 'Favorite Color', sortable: true, filter: true, resizable: true},
//         {
//             headerName: 'Actions',
//             field: 'actions', // A dummy field or just for display purposes
//             cellRenderer: DeleteCellRenderer, // Use custom cell renderer for delete button
//             minWidth: 80,
//             maxWidth: 100,
//             suppressMovable: true, // Prevent reordering
//             resizable: false, // Prevent resizing
//             sortable: false, // Prevent sorting
//             filter: false, // No filter on actions column
//             cellClass: 'flex items-center justify-center' // Center content in action cell
//         }
//     ], []);
//
//     // Callback to get the Grid API when the grid is ready
//     const onGridReady = useCallback((params: { api: GridApi; }) => {
//         setGridApi(params.api);
//         // Optional: Auto-size columns to fit content on load
//         // params.api.sizeColumnsToFit();
//     }, []);
//
//     // Callback for when row selection changes
//     const onSelectionChanged = useCallback(() => {
//         if (gridApi) {
//             const selectedNodes = gridApi.getSelectedNodes();
//             const selectedData = selectedNodes.map(node => node.data);
//             const selectedIds = selectedData.map(data => data?.id);
//             if (selectedIds.length > 0) {
//                 console.log('Selected Row IDs:', selectedIds);
//                 // alert(`Selected Row IDs: ${selectedIds.join(', ')}`); // Uncomment for alerts
//             }
//         }
//     }, [gridApi]);
//
//     // Determine the AG Grid theme class based on dark mode state
//     const gridThemeClass = isDarkMode ? 'ag-theme-alpine-dark' : 'ag-theme-alpine';
//
//
//     return (
//         <div className="w-full md:m-1 lg:m-2 h-dvh bg-gray-100 dark:bg-gray-900 rounded-md shadow-lg flex flex-col">
//             {/* Toolbar / Controls */}
//             <div
//                 className="flex flex-wrap items-center justify-between mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-md shadow-sm">
//                 <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">AG Grid Example</h2>
//                 <button
//                     onClick={toggleDarkMode}
//                     className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                 >
//                     {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//                 </button>
//             </div>
//
//             {/* AG Grid Container */}
//             <div className={`flex-grow ${gridThemeClass}`}
//                  style={{width: '100%', height: 'calc(100% - 70px)'}}> {/* Adjust height as needed */}
//                 <AgGridReact
//                     ref={gridRef}
//                     rowData={rowData}
//                     columnDefs={columnDefs}
//                     onGridReady={onGridReady}
//                     // Enable Features
//                     enableColResize={true} // Column resizing (default true)
//                     enableSorting={true} // Row sorting (default true)
//                     rowSelection="multiple" // Enable row selection mode
//                     suppressRowClickSelection={true} // Only select via checkbox
//                     enableDnd={true} // Enable Drag and Drop for columns (reordering)
//                     onSelectionChanged={onSelectionChanged} // Event for selection changes
//                     // RTL Support
//                     enableRtl={false} // Set to true for RTL layout (e.g., if document.documentElement.dir === 'rtl')
//                     // Default column properties
//                     defaultColDef={useMemo(() => ({
//                         flex: 1, // Columns will flex to fill available space
//                         minWidth: 50,
//                         editable: false, // Cells not editable by default
//                         filter: true, // Enable column filters by default
//                     }), [])}
//                 />
//             </div>
//         </div>
//     );
// };
//
// export default DataGrid;


//////////////////////////////////////////////

// import {
//     AllCommunityModule,
//     ModuleRegistry,
//     colorSchemeDarkBlue,
//     colorSchemeLightCold,
//     themeQuartz,
// } from "ag-grid-community";
// import {AgGridReact} from "ag-grid-react";
//
// ModuleRegistry.registerModules([AllCommunityModule]);
//
// const themeLightCold = themeQuartz.withPart(colorSchemeLightCold);
// const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);
//
// const DataGrid = () => {
//     const columnDefs: Array<object> = [{field: "make"}, {field: "model"}, {field: "price"}];
//
//     const defaultColDef: object = {
//         editable: false,
//         flex: 1,
//         minWidth: 100,
//         filter: true,
//     };
//
//     const rowData: object[] = (() => {
//         const rowData: object[] = [];
//         for (let i = 0; i < 10; i++) {
//             rowData.push({make: "Toyota", model: "Celica", price: 35000 + i * 1000});
//             rowData.push({make: "Ford", model: "Mondeo", price: 32000 + i * 1000});
//             rowData.push({
//                 make: "Porsche",
//                 model: "Boxster",
//                 price: 72000 + i * 1000
//             });
//         }
//         return rowData;
//     })();
//
//     return (
//         <div className="w-full md:m-1 lg:m-2 h-dvh bg-gray-100 dark:bg-gray-900 rounded-md shadow-lg flex flex-col">
//             <AgGridReact
//                 theme={window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? themeLightCold : themeDarkBlue}
//                 columnDefs={columnDefs}
//                 rowData={rowData}
//                 enableRtl={document.dir === "rtl"}
//                 defaultColDef={defaultColDef}
//                 className="table"
//             />
//         </div>
//     );
// };
//
// export default DataGrid

// import React, {type ReactElement} from "react"; // Only need React, no useState, useRef, useMemo, useCallback for this simplified version
import {
    AllCommunityModule,
    ModuleRegistry,
    colorSchemeDarkBlue,
    colorSchemeLightCold,
    themeQuartz
} from "ag-grid-community";
import {AgGridReact} from "ag-grid-react";
// import {empColumnDefs, empRowData} from "../data/employes.ts";
import type {FC, ReactElement} from "react";

// Register AG Grid modules (important for functionality)
ModuleRegistry.registerModules([AllCommunityModule]);

// Define your custom themes outside the component (or memoize if inside)
// These lines will use your specific AG Grid theming setup
const themeLightCold = themeQuartz.withPart(colorSchemeLightCold);
const themeDarkBlue = themeQuartz.withPart(colorSchemeDarkBlue);

// Define the interface for the props DataGrid will accept
interface DataGridProps {
    columnDefs: object[]; // AG Grid's type for column definitions
    rowData: object[]; // Using 'any[]' for generic row data, you can make this more specific if needed
    // gridRef: React.RefObject<AgGridReact | null>
    fetchSelectedData: (data: []) => void
    // You could add other optional props here, like enableRtl, defaultColDef, etc.
}

const DataGrid: FC<DataGridProps> = ({fetchSelectedData, columnDefs, rowData,}: DataGridProps):
    ReactElement => {
// const DataGrid = () => {
    // Default column definition for all columns, can be overridden by individual columnDefs
    const defaultColDef: object = {
        editable: false,
        flex: 1, // Columns will flex to fill available space
        minWidth: 20,
        filter: false, // Enable column filters by default
        // sortable: true, // Enable sorting by default
        // resizable: true, // Enable resizing by default
    };

    // Determine the theme based on system preference
    // This logic stays inside if you want the grid to react to system preference changes
    const currentTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
        ? themeLightCold
        : themeDarkBlue;

    return (<AgGridReact
            theme={currentTheme} // Apply the determined theme
            columnDefs={columnDefs} // Use columnDefs from props
            rowData={rowData} // Use rowData from props
            enableRtl={document.dir === "rtl"} // Keep dynamic RTL support
            defaultColDef={defaultColDef} // Apply default column definitions
            onRowSelected={(e) => fetchSelectedData(e.api.getSelectedRows() as [])}
        />
    );
};

export default DataGrid;