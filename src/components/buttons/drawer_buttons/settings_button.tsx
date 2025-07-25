import Button from "../button.tsx";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NotificationIcon } from "../../icons/drawer_icons.tsx";
import { NOTIFICATIONS_ROUTE } from "../../../routes/routes_paths.ts";
import { NOTIFICATIONS_NAME } from "../../../routes/routes_names.ts";

const NotificationsButton = () => {
    const { t } = useTranslation("drawer");
    const navigate = useNavigate();
    return (
        <Button
            classes="bg-transparent border-none shadow-none text-primary-content font-normal"
            onClick={() => {
                navigate(NOTIFICATIONS_ROUTE);
            }}
        >
            <NotificationIcon size={5} /> {t(NOTIFICATIONS_NAME)}
        </Button>
    );
};

export default NotificationsButton;
