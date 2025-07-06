import FormContainer from '../../components/form_container.tsx';
import InputField from '../../components/inputs/input_field.tsx';
import Textarea from '../../components/inputs/textarea.tsx';
import DataGrid from '../../components/data_grid.tsx';
import AddButton from '../../components/buttons/crud_buttons/add_button.tsx';
import EditButton from '../../components/buttons/crud_buttons/edit_button.tsx';
import DeleteButton from '../../components/buttons/crud_buttons/delete_button.tsx';
import PrintButton from '../../components/buttons/crud_buttons/print_button.tsx';
import PDFButton from '../../components/buttons/crud_buttons/pdf_button.tsx';
import ExcelButton from '../../components/buttons/crud_buttons/excel_button.tsx';
import Pagination from '../../components/pagination.tsx';
import {useTranslation} from 'react-i18next';
import Accordion from "../../components/accordion.tsx";
import {toast} from "react-toastify";
import {ToastContainer} from "react-toastify/unstyled";
import Dropdown from "../../components/dropdown.tsx";
import SearchForm from "../../components/forms/search_form.tsx";
import RefreshButton from "../../components/buttons/crud_buttons/refresh_button.tsx";

const UserGroupManagementView = () => {
    const translateFilePath = "user-management/group"
    const {t} = useTranslation(translateFilePath);

    document.title = t('title');
    return (
        <>
            <FormContainer classes="w-full h-auto bg-base-100">
                {/*<h1 className="text-2xl lg:text-4xl text-center font-bold mb-0.5 mt-8 md:mt-4 lg:mb-2">*/}
                {/*    {t('title')}*/}
                {/*</h1>*/}
                <Accordion title={t("title")} titleClasses={"text-lg ms-7 lg:text-2xl lg:ms-0 m-0"}
                           classes="collapse-arrow h-auto">
                    {/*<form className="w-full h-auto p-1 lg:p-2">*/}
                    <div
                        className="w-full h-auto grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-4 lg:gap-y-2">
                        <InputField
                            name="group_name"
                            labelText={t('group-label')}
                            fieldType="text"
                            placeholder={t('group-placeholder')}
                            withLabel={true}
                            classes="w-full "
                            changeEvent={() => {
                            }}
                        />
                        <Textarea
                            name="group_description"
                            placeholder={t('desc-placeholder')}
                            withLabel={true}
                            labelText={t('desc-label')}
                            classes="w-full"
                        />
                    </div>
                    <br/>
                    <div
                        className="max-w-screen h-auto grid gap-1 grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 p-0">
                        <AddButton
                            classes="btn-primary btn-wide order-1"
                            text={t('add-btn')}
                            // onClick={()=> {}}
                            clickEvent={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.preventDefault()
                                console.log("clicked")
                                // return <ErrorToast messageType="success"/>
                                toast.success("success")
                            }}
                        />
                        <EditButton
                            classes="btn-primary btn-wide order-3 md:order-2"
                            text={t('edit-btn')}
                            clickEvent={() => {
                            }}
                        />
                        {/*<DeleteButton*/}
                        {/*    classes="btn-primary btn-wide order-5  md:order-3"*/}
                        {/*    text={t('del-btn')}*/}
                        {/*    clickEvent={() => {*/}
                        {/*    }}*/}
                        {/*/>*/}
                        {/*<PrintButton*/}
                        {/*    classes="btn-primary btn-wide order-2  md:order-4"*/}
                        {/*    text={t('print-btn')}*/}
                        {/*    clickEvent={() => {*/}
                        {/*    }}*/}
                        {/*/>*/}
                        {/*<Dropdown text={t("export-dropdown")} bgColor="primary"*/}
                        {/*          classes={"text-white order-4 btn-wide md:order-5 shadow-md"}>*/}
                        {/*    <li>*/}
                        {/*        <PDFButton*/}
                        {/*            classes="btn-primary btn-wide order-4 md:order-5"*/}
                        {/*            text={t('pdf-btn')}*/}
                        {/*            clickEvent={() => {*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <ExcelButton*/}
                        {/*            classes="btn-primary btn-wide order-6 md:order-6 space-between"*/}
                        {/*            text={t('excel-btn')}*/}
                        {/*            clickEvent={() => {*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*    </li>*/}
                        {/*</Dropdown>*/}
                    </div>
                    {/*</form>*/}
                </Accordion>
            </FormContainer>

            {/* search , export , refresh and print elements */}
            <div
                className="w-full block bg-base-100 grid! grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-1">
                <RefreshButton
                    classes="btn-primary w-auto order-2 lg:order-1 lg:col-span-2"
                    text={t('refresh-btn')}
                    clickEvent={() => {
                    }}
                />
                <SearchForm translateFile={translateFilePath}
                            filterChangeable={false}
                            containerClasses="order-1 col-span-3 lg:order-2 lg:col-span-6 lg:col-end-9">
                    <option selected>{t("filter-name")}</option>
                    {/*<option>{t("filter-number")}</option>*/}
                </SearchForm>
                <PrintButton
                    classes="btn-primary order-3 order-3 md:order-4 lg:col-span-2"
                    text={t('print-btn')}
                    clickEvent={() => {
                    }}
                />
                <Dropdown text={t("export-dropdown")} bgColor="primary" uniqueKey="export-drop-menu"
                          classes={"btn-primary order-4 lg:order-4 shadow-md lg:col-span-2"}>
                    <li>
                        <PDFButton
                            classes="btn-primary"
                            text={t('pdf-btn')}
                            clickEvent={() => {
                            }}
                        />
                    </li>
                    <li>
                        <ExcelButton
                            classes="btn-primary"
                            text={t('excel-btn')}
                            clickEvent={() => {
                            }}
                        />
                    </li>
                </Dropdown>
            </div>
            <DataGrid/>
            <Pagination/>
            <ToastContainer/>
        </>
    );
};

export default UserGroupManagementView;
