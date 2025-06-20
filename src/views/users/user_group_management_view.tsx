import FormContainer from "../../components/form_container.tsx";
import InputField from "../../components/inputs/input_field.tsx";
import Textarea from "../../components/inputs/textarea.tsx";
import Table from "../../components/table.tsx";
import AddButton from "../../components/buttons/crud_buttons/add_button.tsx";
import EditButton from "../../components/buttons/crud_buttons/edit_button.tsx";
import DeleteButton from "../../components/buttons/crud_buttons/delete_button.tsx";
import PrintButton from "../../components/buttons/crud_buttons/print_button.tsx";
import PDFButton from "../../components/buttons/crud_buttons/pdf_button.tsx";
import ExcelButton from "../../components/buttons/crud_buttons/excel_button.tsx";
import Pagination from "../../components/pagination.tsx";

const UserGroupManagementView = () => {
    return (
        <div className='h-dvh w-full flex flex-col items-center justify-center overflow-none p-2.5 lg:py-4 space-y-2'>
            <FormContainer classes='w-full h-auto bg-base-100'>
                <h1 className='text-2xl lg:text-4xl text-center font-bold mb-0.5 mt-8 md:mt-0 lg:mb-4'>User Group
                    Management</h1>
                <form className="w-full h-auto p-1 lg:p-2">
                    <div className='w-full h-auto flex flex-col lg:flex-row justify-evenly'>
                        <InputField name='group_name' labelText='Group Name' fieldType='text'
                                    placeholder='Group Name'
                                    withLabel={true} classes='w-full mb-3 lg:mb-0 ltr:pr-1 rtl:pl-1'/>
                        <Textarea name='group_description' placeholder='Group Description' withLabel={true}
                                  labelText='Group Description' classes='w-full ltr:pl-1 rtl:pr-1'/>
                    </div>
                    <br/>
                    <div
                        className='max-w-screen h-auto grid gap-1 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1'>
                        <AddButton classes='btn-primary btn-wide btn-wide order-1' clickEvent={() => {
                        }}/>
                        <EditButton classes='btn-primary btn-wide btn-wide order-3 md:order-2' clickEvent={() => {
                        }}/>
                        <DeleteButton classes='btn-primary btn-wide btn-wide order-5  md:order-3'
                                      clickEvent={() => {
                                      }}/>
                        <PrintButton classes='btn-primary btn-wide btn-wide order-2  md:order-4' clickEvent={() => {
                        }}/>
                        <PDFButton classes='btn-primary btn-wide btn-wide order-4  md:order-5' clickEvent={() => {
                        }}/>
                        <ExcelButton classes='btn-primary btn-wide btn-wide order-6  md:order-6' clickEvent={() => {
                        }}/>
                    </div>
                </form>
            </FormContainer>
            <Table/>
            <Pagination/>
        </div>
    )
}

export default UserGroupManagementView