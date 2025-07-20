import { useTranslation } from "react-i18next";
import { useAuthStore } from "../states/stores/auth_store.ts";
import { useShallow } from "zustand/shallow";

/**
 * DashboardView displays the main dashboard page.
 * It shows the current user's username (or "Guest" if not logged in)
 * and their authentication token. The page title is set using i18n.
 */
const DashboardView = () => {
    const { t } = useTranslation("dashboard");
    document.title = t("title");

    // Select user and token from the auth store using shallow comparison
    const { user, token } = useAuthStore(
        useShallow((state) => ({
            user: state.user,
            token: state.token,
        }))
    );

    return (
        <>
            <div className="p-0 m-0 h-dvh w-full bg-amber-500">
                <h1 className="text-5xl font-bold text-center">{t("title")}</h1>
                <div className="text-center h-auto w-full">
                    <div className="w-full wrap-break-word">
                        <p className="py-6">
                            {user?.username ? user.username : "Guest"}
                        </p>
                        <p>{token}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardView;
