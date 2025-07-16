import Button from '../button.tsx';
// import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {LogoutIcon} from "../../icons/drawer_icons.tsx";
// import {useAppDispatch, useAppSelector} from "../../../hooks/state_hooks.ts";
// import {logout} from "../../../states/auth/auth_slice.ts";
import {useAuthStore} from "../../../states/stores/auth_store.ts";
import {useShallow} from "zustand/shallow";

const LogoutButton = () => {
    const {t} = useTranslation('drawer');
    // const dispatch = useAppDispatch()
    // const {isAuthenticated, token} = useAppSelector(({auth}) => auth)
    const {logout, token} = useAuthStore(useShallow(state => ({
        logout: state.logout,
        // isAuthenticated: state.isAuthenticated,
        token: state.token
    })))
    // const navigate = useNavigate();

    const logoutButtonEvent = async () => {
        // e.preventDefault()
        await logout(token)
        // if (!isAuthenticated) navigate('/');
    }
    return (
        <Button
            classes="bg-transparent border-none shadow-none text-primary-content"
            onClick={logoutButtonEvent}
        >
            <LogoutIcon/> {t('logout')}
        </Button>
    );
};

export default LogoutButton;
