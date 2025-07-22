import { type MouseEventHandler } from "react";
import { type ICellRendererParams } from "ag-grid-community";
import DeleteIconButton from "../../buttons/icon_buttons/delete_icon_button";

interface ActionsColumnTypes extends ICellRendererParams {
    // You can define specific props here if your parent component needs to pass more context
    // For example, handlers that are specific to the grid's data context.
    handleDelete: MouseEventHandler<HTMLButtonElement>;
}

const DataGridDeleteColumnRenderer = ({ handleDelete }: ActionsColumnTypes) => {
    return (
        <div className="flex h-full w-full justify-center items-center py-0.5">
            <DeleteIconButton
                iconClasses="size-4"
                classes="border-1 text-red bg-white dark:bg-gray-800 h-full p-2 w-auto m-2 hover:bg-red-500 text-red-500 hover:text-white dark:hover:text-gray-800 dark:border-gray-700"
                clickEvent={handleDelete}
            />
        </div>
    );
};

export default DataGridDeleteColumnRenderer;
