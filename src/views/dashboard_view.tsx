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
        <div className="hero bg-base-200 max-h-dvh max-w-dvw">
            <div className="hero-content text-center h-screen">
                <div className="w-screen">
                    <h1 className="text-5xl font-bold">{t("title")}</h1>
                    <p className="py-6">
                        {user?.username ? user.username : "Guest"}
                    </p>
                    <p className="wrap-break-word">{token}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardView;
