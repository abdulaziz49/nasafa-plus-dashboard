import Button from '../button.tsx';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '../../icons/drawer/settings_icon.tsx';
import { SETTINGS_MANAGEMENT_ROUTE } from '../../../routes/routes.ts';
import { useTranslation } from 'react-i18next';
import {SETTINGS_MANAGEMENT_NAME} from "../../../routes/routes_names.ts";

const SettingsButton = () => {
	const { t } = useTranslation('drawer');
	const navigate = useNavigate();
	return (
		<Button
			classes="bg-transparent border-none shadow-none text-primary-content"
			onClick={() => {
				navigate(SETTINGS_MANAGEMENT_ROUTE);
			}}
		>
			<SettingsIcon /> {t(SETTINGS_MANAGEMENT_NAME)}
		</Button>
	);
};

export default SettingsButton;
