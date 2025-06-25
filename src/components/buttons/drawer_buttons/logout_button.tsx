import Button from '../button.tsx';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {LogoutIcon} from "../../icons/auth_icons.tsx";

const LogoutButton = () => {
    const {t} = useTranslation('drawer');
    const navigate = useNavigate();
    return (
        <Button
            classes="bg-transparent border-none shadow-none text-primary-content"
            onClick={() => {
                navigate('/');
            }}
        >
            <LogoutIcon/> {t('logout')}
        </Button>
    );
};

export default LogoutButton;
