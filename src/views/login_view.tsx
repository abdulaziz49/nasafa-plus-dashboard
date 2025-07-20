import { type NavigateFunction, useNavigate } from "react-router-dom";
import loginImage from "../assets/svg/login-2.svg";
import LazyImage from "../components/lazy_image.tsx";
import ImageSkeleton from "../components/skeletons/image_skeleton.tsx";
import FormContainer from "../components/form_container.tsx";
import Button from "../components/buttons/button.tsx";
import InputField from "../components/inputs/input_field.tsx";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "../i18n/locale_switcher.tsx";
import Nasafa from "../assets/img/nasafa_plus_logo.png";
import LoginIcon from "../components/icons/login_icon.tsx";
import { type ChangeEvent, useEffect, useState } from "react";
import { useAuthStore } from "../states/stores/auth_store.ts";

/**
 * LoginView component renders the login form for the application.
 *
 * Features:
 * - Username and password input fields.
 * - Locale/language switcher.
 * - Error message display on failed login.
 * - Loading state disables the login button.
 * - Redirects to dashboard on successful authentication.
 * - Responsive card layout with branding and background image.
 */
const LoginView = () => {
    const { t } = useTranslation("login");
    const navigate: NavigateFunction = useNavigate();
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const { login, isAuthenticated, isAuthLoading, error } = useAuthStore();

    /**
     * Handles form submission for login.
     * Calls the login function from the auth store.
     */
    const formSubmit = async () => {
        await login(form);
    };

    /**
     * Redirects to dashboard if authentication is successful.
     */
    useEffect(() => {
        // alert(location.hostname);
        // alert(AppAxios.getUri());
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    /**
     * Handles input field changes and updates form state.
     */
    const inputChangeValueEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    document.title = t("title");

    return (
        <div className="bg-base-200 h-dvh w-dvw stack">
            <div className="h-full flex flex-col justify-center items-center lg:flex-row">
                <div className="card bg-base-100 sm:max-w-md md:max-w-sm w-5/6 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className="card-title flex justify-center mb-4">
                            <LazyImage alt="Nasafa plus logo" src={Nasafa} />
                        </div>
                        <FormContainer classes="border-none">
                            <InputField
                                type="text"
                                name="username"
                                labelText={t("username")}
                                withLabel={true}
                                placeholder={t("username")}
                                value={form.username}
                                containerClasses="w-auto mb-2"
                                onChange={inputChangeValueEvent}
                            />
                            <InputField
                                type="password"
                                name="password"
                                labelText={t("pass")}
                                withLabel={true}
                                placeholder={t("pass")}
                                value={form.password}
                                containerClasses="w-auto mb-2"
                                onChange={inputChangeValueEvent}
                            />
                            <LocaleSwitcher />
                            {error && (
                                <p className="text-red-500 text-sm mt-2">
                                    {error}
                                </p>
                            )}
                            <Button
                                classes="btn-primary mt-4"
                                onClick={formSubmit}
                                disabled={isAuthLoading}
                            >
                                {t("button")}
                                {isAuthLoading ? null : <LoginIcon size={5} />}
                            </Button>
                        </FormContainer>
                    </div>
                </div>
            </div>
            <LazyImage
                alt={"background"}
                placeholder={
                    <ImageSkeleton classes="max-h-screen lg:max-h-full w-screen" />
                }
                src={loginImage}
                classes="max-h-screen lg:max-h-full w-screen object-cover lg:object-none blur"
            />
        </div>
    );
};

export default LoginView;
