import FormContainer from '../../components/form_container.tsx';
import InputField from '../../components/inputs/input_field.tsx';
import AddButton from '../../components/buttons/crud_buttons/add_button.tsx';
import EditButton from '../../components/buttons/crud_buttons/edit_button.tsx';
import DeleteButton from '../../components/buttons/crud_buttons/delete_button.tsx';
import PrintButton from '../../components/buttons/crud_buttons/print_button.tsx';
import PDFButton from '../../components/buttons/crud_buttons/pdf_button.tsx';
import ExcelButton from '../../components/buttons/crud_buttons/excel_button.tsx';
import DataGrid from '../../components/datagrid/datagrid.tsx';
import Pagination from '../../components/pagination.tsx';
import Select from '../../components/inputs/select.tsx';
import Toggle from '../../components/inputs/toggle.tsx';
import { useTranslation } from 'react-i18next';

const UserManagementView = () => {
	const { t } = useTranslation('user-management/user');

	document.title = t('title');

	return (
		<>
			<FormContainer classes="w-full h-auto bg-base-100">
				<h1 className="text-2xl lg:text-4xl text-center font-bold mb-0.5 mt-8 md:mt-0 lg:mb-4">
					{t('title')}
				</h1>
				<form className="w-full h-auto p-1 lg:p-2">
					<div className="w-full grid grid-rows-4 grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-12 lg:grid-rows-2 md:gap-x-8 lg:gap-y-2">
						<Select
							classes="w-full lg:col-span-7 lg:order-1"
							defaultValue={t('select-default-value')}
							name="group_name"
							labelText={t('select-label')}
							withLabel={true}
						>
							<option disabled>
								{t('select-default-value')}
							</option>
							<option>Admins</option>
							<option>Drivers</option>
						</Select>
						<InputField
							name="username"
							labelText={t('username-label')}
							fieldType="text"
							placeholder={t('username-placeholder')}
							withLabel={true}
							containerClasses="w-full lg:col-span-7 lg:order-3"
							onChange={() => {}}
						/>
						<Toggle
							classes="justify-between lg:flex-row-reverse md:col-span-2 lg:col-start-10 rtl:lg:col-start-8 text-sm md:text-md lg:text-lg lg:order-2 lg:col-end-13"
							name="is_active"
							withCheckMark={false}
							labelText={t('is-active')}
							withLabel={true}
						/>
						<Toggle
							classes="justify-between lg:flex-row-reverse md:col-span-2 lg:col-start-10 rtl:lg:col-start-8 text-sm md:text-md lg:text-lg lg:order-4 lg:col-end-13"
							name="change_password"
							withCheckMark={false}
							labelText={t('change-password')}
							withLabel={true}
							className="rtl:lg:text-md"
						/>
					</div>
					<br />
					<div className="max-w-screen h-auto grid gap-2 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1">
						<AddButton
							classes="btn-primary btn-wide btn-wide order-1"
							text={t('save-btn')}
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
			{/*The outer div can still have its global styling*/}
			<div className="w-full md:m-1 lg:m-2 h-dvh bg-gray-100 dark:bg-gray-900 rounded-md shadow-lg flex flex-col">
				<DataGrid />
			</div>
			<Pagination />
		</>
	);
};

export default UserManagementView;
