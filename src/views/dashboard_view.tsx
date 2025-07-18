import {useTranslation} from 'react-i18next';
// import {useAppSelector} from "../hooks/state_hooks.ts";
import {useAuthStore} from "../states/stores/auth_store.ts";
import {useShallow} from "zustand/shallow";
// import LoadingTemplate from "../components/templates/loading_template.tsx";

const DashboardView = () => {
    const {t} = useTranslation('dashboard');
    document.title = t('title');
    // Use shallow as the third argument to compare the selected object
    const {user, token} = useAuthStore(useShallow(state => ({
        user: state.user,
        token: state.token
    }))); // <--- Add shallow here!

    // const {user, token} = useAppSelector(({auth}) => auth);

    return (
        // <LoadingTemplate>
            <div className="hero bg-base-200 max-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{t('title')}</h1>
                        <p className="py-6">
                            {user && user.username ? user.username : 'Guest'}
                        </p>
                        <p className="">
                            {token}
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        // </LoadingTemplate>
    );
};

export default DashboardView;
