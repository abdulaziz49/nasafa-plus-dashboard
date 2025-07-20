import InputField from '../../inputs/input_field.tsx';
import AddButton from '../../buttons/crud_buttons/add_button.tsx';
import EditButton from '../../buttons/crud_buttons/edit_button.tsx';
import { useTranslation } from 'react-i18next';
import type { ChangeEventHandler, MouseEventHandler } from 'react';
import type { UserRole } from '../../../models/users/user_role_model.ts';
import CollapsibleForm from '../collapsible_form.tsx';

interface UserRoleFormTypes {
	translateFile: string;
	formData: UserRole;
	addEventHandler: MouseEventHandler<HTMLButtonElement>;
	editEventHandler: MouseEventHandler<HTMLButtonElement>;
	inputChangeEvent: ChangeEventHandler<
		HTMLInputElement | HTMLTextAreaElement
	>;
	isAdding: boolean;
	isEditing: boolean;
}

/**
 * UserRoleForm component renders a collapsible form for adding or editing user roles.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.translateFile - The translation namespace or file for localization.
 * @param {Object} props.formData - The current form data, containing `name` and `guard_name` fields.
 * @param {(event: React.FormEvent<HTMLFormElement>) => void} props.addEventHandler - Handler for the add button click event.
 * @param {(event: React.FormEvent<HTMLFormElement>) => void} props.editEventHandler - Handler for the edit button click event.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} props.inputChangeEvent - Handler for input field changes.
 * @param {boolean} props.isAdding - Indicates if the add operation is in progress (disables the add button).
 * @param {boolean} props.isEditing - Indicates if the edit operation is in progress (disables the edit button).
 *
 * @returns {JSX.Element} The rendered UserRoleForm component.
 */
export default function UserRoleForm({
	translateFile,
	formData,
	addEventHandler,
	editEventHandler,
	inputChangeEvent,
	isAdding,
	isEditing,
}: UserRoleFormTypes) {
	const { t } = useTranslation(translateFile);

	return (
		<CollapsibleForm title={t('title')}>
			<div className="w-full h-auto grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-4 lg:gap-y-2">
				<InputField
					name="name"
					labelText={t('group-label')}
					type="text"
					placeholder={t('group-placeholder')}
					withLabel={true}
					containerClasses="w-full"
					value={formData.name}
					onChange={inputChangeEvent}
					pattern="^[a-zA-Z][a-zA-Z0-9 _]+$"
					minLength={5}
					maxLength={128}
					required={true}
				/>
				<InputField
					type="text"
					multiple={true}
					name="guard_name"
					placeholder={t('desc-placeholder')}
					withLabel={true}
					pattern="^[a-zA-Z][a-zA-Z0-9 _]+$"
					labelText={t('desc-label')}
					containerClasses="w-full"
					value={formData.guard_name}
					onChange={inputChangeEvent}
				/>
			</div>
			<br />
			<div className="max-w-screen h-auto grid gap-1 grid-cols-2 grid-rows-1 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 p-0">
				<AddButton
					classes="btn-primary btn-wide order-1"
					text={t('add-btn')}
					isDisabled={isAdding}
					clickEvent={addEventHandler}
				/>
				<EditButton
					classes="btn-primary btn-wide order-3 md:order-2"
					text={t('edit-btn')}
					isDisabled={isEditing}
					clickEvent={editEventHandler}
				/>
			</div>
		</CollapsibleForm>
	);
}
