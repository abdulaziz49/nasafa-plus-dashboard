// components/ActionButtonsRenderer.tsx
import {type FC} from 'react';
import {type ICellRendererParams} from 'ag-grid-community';
import PrintButton from "../buttons/crud_buttons/print_button.tsx"; // Import necessary types if you're using TypeScript
// Assuming you have SVG or custom icon components for Delete and Print
// For example:
// import { RiDeleteBin6Line, RiPrinterLine } from 'react-icons/ri'; // If using react-icons
// Or your custom components:
// import DeleteIcon from './icons/DeleteIcon'; // Replace with your actual path
// import PrintIcon from './icons/PrintIcon'; // Replace with your actual path

interface ActionsColumnTypes extends ICellRendererParams {
    // You can define specific props here if your parent component needs to pass more context
    // For example, handlers that are specific to the grid's data context.
    onPrintClick: (rowData: any) => void;
}

const DataGridPrintColumnRenderer: FC<ActionsColumnTypes> = (props) => {
    // props.data contains the entire row data for the current cell
    // props.node contains the row node (useful for row index, etc.)
    const handlePrint = () => {
        // Call the onPrintClick handler passed from the parent grid component
        // Pass the row data so the parent knows which item to print
        props.onPrintClick(props.data);
    };

    return (
        <div className="flex h-full w-full jusify-center items-center p-2">
            <PrintButton clickEvent={handlePrint}/>
        </div>
    );
};

export default DataGridPrintColumnRenderer;