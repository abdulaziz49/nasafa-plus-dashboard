import {type NavigateFunction, useNavigate} from 'react-router-dom';
import loginImage from '../assets/svg/login-2.svg';
import LazyImage from '../components/lazy_image.tsx';
import ImageSkeleton from '../components/skeletons/image_skeleton.tsx';
import FormContainer from '../components/form_container.tsx';
import Button from '../components/buttons/button.tsx';
import InputField from '../components/inputs/input_field.tsx';
import {useTranslation} from 'react-i18next';
import LocaleSwitcher from '../i18n/locale_switcher.tsx';
import Nasafa from '../assets/img/nasafa_plus_logo.png';
import LoginIcon from "../components/icons/login_icon.tsx";
import {useState} from "react";
import AppAxios from "../controllers/app_axios.ts";

const LoginView = () => {
    const {t} = useTranslation('login');
    const navigate: NavigateFunction = useNavigate();
    const [form, setForm] = useState({})

    const formSubmit = () => {
        // console.log("clicked")
        AppAxios.get('/').then((response) => console.log(response))
        const formData = new FormData();
        // Loop over form state and append key-value pairs to FormData
        for (const key in form) {
            formData.append(key, form[key]);
        }
        // At this point, `formData` contains your username and password.
        // You would typically send this data to an authentication API.
        // For demonstration, let's log it:
        // You can iterate over formData entries to see the data
        for (const pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        // After successful submission (e.g., API call returns success), navigate:
        navigate('/dashboard');
    };

    const inputChangeValueEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Corrected state update for input fields
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    document.title = t('title');
    return (
        <div className="bg-base-200 h-screen w-screen stack">
            <div className="h-full flex flex-col justify-center items-center lg:flex-row">
                <div className="card bg-base-100 lg:max-w-sm w-5/6 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className="card-title flex justify-center mb-4">
                            {/*Login now!*/}
                            {/*<h1 className="text-3xl lg:text-4xl font-bold">*/}
                            {/*    {t('head')}*/}
                            {/*</h1>*/}
                            <LazyImage alt={'Nasafa plus logo'} src={Nasafa}/>
                        </div>
                        <FormContainer classes='border-none'>
                            <InputField
                                fieldType="text"
                                name="username"
                                labelText={t('username')}
                                withLabel={true}
                                placeholder={t('username')}
                                classes="w-auto mb-2"
                                changeEvent={inputChangeValueEvent}
                            />
                            <InputField
                                fieldType="password"
                                name="Password"
                                labelText={t('pass')}
                                withLabel={true}
                                placeholder={t('pass')}
                                classes="w-auto mb-2"
                                changeEvent={inputChangeValueEvent}
                            />
                            <LocaleSwitcher/>
                            {/*<div>*/}
                            {/*    <a className="link link-hover">*/}
                            {/*        {t('forget')}*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                            <Button
                                classes="btn-primary mt-4"
                                onClick={formSubmit}
                            >
                                {t('button')} <LoginIcon size={5}/>
                            </Button>
                        </FormContainer>
                    </div>
                </div>
            </div>
            <LazyImage
                alt={'background'}
                placeholder={
                    <ImageSkeleton classes="max-h-screen lg:max-h-full w-screen"/>
                }
                src={loginImage}
                classes="max-h-screen lg:max-h-full w-screen object-cover lg:object-none blur"
            />
        </div>
    );
};

export default LoginView;
