import { useTranslation } from 'react-i18next';
import FormContainer from '../../components/form_container.tsx';
import InputField from '../../components/inputs/input_field.tsx';
// import Select from "../../components/inputs/select.tsx";
import Textarea from '../../components/inputs/textarea.tsx';
import AddButton from '../../components/buttons/crud_buttons/add_button.tsx';
import EditButton from '../../components/buttons/crud_buttons/edit_button.tsx';
import DeleteButton from '../../components/buttons/crud_buttons/delete_button.tsx';
import PrintButton from '../../components/buttons/crud_buttons/print_button.tsx';
import PDFButton from '../../components/buttons/crud_buttons/pdf_button.tsx';
import ExcelButton from '../../components/buttons/crud_buttons/excel_button.tsx';
import DataGrid from '../../components/datagrid/datagrid.tsx';
import Pagination from '../../components/pagination.tsx';
import SearchForm from '../../components/forms/search_form.tsx';

const ContainerTypeManagementView = () => {
	const translateFilePath: string = 'container-management/type';
	const { t } = useTranslation(translateFilePath);
	document.title = t('title');
	return (
		<>
			<FormContainer classes="w-full h-auto bg-base-100">
				<h1 className="text-2xl lg:text-4xl text-center font-bold mb-0.5 mt-8 md:mt-0 lg:mb-4">
					{t('title')}
				</h1>
				<form className="w-full h-auto p-1 lg:p-2">
					<div className="w-full grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-12 lg:grid-rows-1 md:gap-x-8 lg:gap-y-2">
						<InputField
							name="type_name"
							labelText={t('type-name-label')}
							fieldType="text"
							placeholder={t('type-name-placeholder')}
							withLabel={true}
							containerClasses="w-full w-full lg:col-span-6"
							changeEvent={() => {}}
						/>
						<InputField
							name="type_code"
							labelText={t('type-code-label')}
							fieldType="text"
							placeholder={t('type-code-placeholder')}
							withLabel={true}
							containerClasses="w-full w-full lg:col-span-6"
							changeEvent={() => {}}
						/>
						{/*<Select name="type_class"*/}
						{/*		labelText={t('type-class-label')}*/}
						{/*		withLabel={true}*/}
						{/*		classes="w-full w-full lg:col-span-6">*/}
						{/*	<option selected >1</option>*/}
						{/*	<option>2</option>*/}
						{/*	<option>3</option>*/}
						{/*</Select>*/}

						<Textarea
							name="type_description"
							placeholder={t('type-description-placeholder')}
							withLabel={true}
							labelText={t('type-description-label')}
							classes="w-full w-full lg:col-span-12"
						/>
					</div>
					<br />

					<div className="max-w-screen h-auto grid gap-2 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1">
						<AddButton
							classes="btn-primary btn-wide btn-wide order-1"
							text={t('add-btn')}
							clickEvent={() => {}}
						/>
						<EditButton
							classes="btn-primary btn-wide btn-wide order-3 md:order-2"
							text={t('edit-btn')}
							clickEvent={() => {}}
						/>
						<DeleteButton
							classes="btn-primary btn-wide btn-wide order-5  md:order-3"
							text={t('del-btn')}
							clickEvent={() => {}}
						/>
						<PrintButton
							classes="btn-primary btn-wide btn-wide order-2  md:order-4"
							text={t('print-btn')}
							clickEvent={() => {}}
						/>
						<PDFButton
							classes="btn-primary btn-wide btn-wide order-4  md:order-5"
							text={t('pdf-btn')}
							clickEvent={() => {}}
						/>
						<ExcelButton
							classes="btn-primary btn-wide btn-wide order-6  md:order-6"
							text={t('excel-btn')}
							clickEvent={() => {}}
						/>
					</div>
				</form>
			</FormContainer>

			<SearchForm translateFile={translateFilePath}>
				<option selected>{t('type-name')}</option>
				<option>{t('type-code')}</option>
			</SearchForm>
			<DataGrid />
			<Pagination />
		</>
	);
};

export default ContainerTypeManagementView;
