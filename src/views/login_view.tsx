// import {type NavigateFunction, useNavigate} from 'react-router-dom';
// import loginImage from '../assets/svg/login-2.svg';
// import LazyImage from '../components/lazy_image.tsx';
// import ImageSkeleton from '../components/skeletons/image_skeleton.tsx';
// import FormContainer from '../components/form_container.tsx';
// import Button from '../components/buttons/button.tsx';
// import InputField from '../components/inputs/input_field.tsx';
// import {useTranslation} from 'react-i18next';
// import LocaleSwitcher from '../i18n/locale_switcher.tsx';
// import Nasafa from '../assets/img/nasafa_plus_logo.png';
// import LoginIcon from "../components/icons/login_icon.tsx";
// import {useState} from "react";
// import AppAxios from "../controllers/app_axios.ts";
// import axios from "axios";
//
// const LoginView = () => {
//     const {t} = useTranslation('login');
//     const navigate: NavigateFunction = useNavigate();
//     const [form, setForm] = useState({})
//
//     const formSubmit = () => {
//         // console.log("clicked")
//         AppAxios.post('login/', {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//                 // If you have authentication tokens (e.g., Bearer token from Laravel Sanctum),
//                 // you would add them here:
//                 // 'Authorization': `Bearer YOUR_AUTH_TOKEN_HERE`,
//             },
//             body: {
//                 for(const key in form)
//         {
//             [key]
//         :
//             form[key],
//         }
//     }).
//         then((response) => console.log(response))
//         // axios.get('https://nasafa-plus-api.test:8443/api/home',{}).then((response) => console.log(response))
//         // // axios.get("https://nasafa-plus-api.test:8443/api/home", {
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //         'Accept': 'application/json',
//         //         // If you have authentication tokens (e.g., Bearer token from Laravel Sanctum),
//         //         // you would add them here:
//         //         // 'Authorization': `Bearer YOUR_AUTH_TOKEN_HERE`,
//         //     }
//         // }).then((response)=>console.log(response))
//         // const formData = new FormData();
//         // // Loop over form state and append key-value pairs to FormData
//         // for (const key in form) {
//         //     formData.append(key, form[key]);
//         // }
//         // // At this point, `formData` contains your username and password.
//         // // You would typically send this data to an authentication API.
//         // // For demonstration, let's log it:
//         // // You can iterate over formData entries to see the data
//         // for (const pair of formData.entries()) {
//         //     console.log(`${pair[0]}: ${pair[1]}`);
//         // }
//
//         console.log(form)
//
//         // After successful submission (e.g., API call returns success), navigate:
//         // navigate('/dashboard');
//     }
//         ;
//
//         const inputChangeValueEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
//             // Corrected state update for input fields
//             setForm((prev) => ({
//                 ...prev,
//                 [e.target.name]: e.target.value
//             }));
//         };
//
//         document.title = t('title');
//         return (
//             <div className="bg-base-200 h-screen w-screen stack">
//                 <div className="h-full flex flex-col justify-center items-center lg:flex-row">
//                     <div className="card bg-base-100 lg:max-w-sm w-5/6 shrink-0 shadow-2xl">
//                         <div className="card-body">
//                             <div className="card-title flex justify-center mb-4">
//                                 {/*Login now!*/}
//                                 {/*<h1 className="text-3xl lg:text-4xl font-bold">*/}
//                                 {/*    {t('head')}*/}
//                                 {/*</h1>*/}
//                                 <LazyImage alt={'Nasafa plus logo'} src={Nasafa}/>
//                             </div>
//                             <FormContainer classes='border-none'>
//                                 <InputField
//                                     fieldType="text"
//                                     name="username"
//                                     labelText={t('username')}
//                                     withLabel={true}
//                                     placeholder={t('username')}
//                                     classes="w-auto mb-2"
//                                     changeEvent={inputChangeValueEvent}
//                                 />
//                                 <InputField
//                                     fieldType="password"
//                                     name="Password"
//                                     labelText={t('pass')}
//                                     withLabel={true}
//                                     placeholder={t('pass')}
//                                     classes="w-auto mb-2"
//                                     changeEvent={inputChangeValueEvent}
//                                 />
//                                 <LocaleSwitcher/>
//                                 {/*<div>*/}
//                                 {/*    <a className="link link-hover">*/}
//                                 {/*        {t('forget')}*/}
//                                 {/*    </a>*/}
//                                 {/*</div>*/}
//                                 <Button
//                                     classes="btn-primary mt-4"
//                                     onClick={formSubmit}
//                                 >
//                                     {t('button')} <LoginIcon size={5}/>
//                                 </Button>
//                             </FormContainer>
//                         </div>
//                     </div>
//                 </div>
//                 <LazyImage
//                     alt={'background'}
//                     placeholder={
//                         <ImageSkeleton classes="max-h-screen lg:max-h-full w-screen"/>
//                     }
//                     src={loginImage}
//                     classes="max-h-screen lg:max-h-full w-screen object-cover lg:object-none blur"
//                 />
//             </div>
//         );
//     };
//
//     export default LoginView;


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
import AppAxios, {unauthAxiosHeaderJson} from "../utils/app_axios.ts"; // Import your custom Axios instance
import axios from "axios"; // Keep if you use raw axios elsewhere, otherwise remove

const LoginView = () => {
    const {t} = useTranslation('login');
    const navigate: NavigateFunction = useNavigate();
    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(false); // State for loading
    const [error, setError] = useState<string | null>(null); // State for errors

    const formSubmit = async () => { // Make this function async
        setLoading(true); // Start loading
        setError(null); // Clear previous errors

        try {
            // Correct way to make an Axios POST request:
            // 1. URL (relative to baseURL if AppAxios has one)
            // 2. Data payload (your 'form' state is already the correct object)
            // 3. Optional config object (for specific headers or other Axios options for this request)
            const response = await AppAxios.post('login', form, unauthAxiosHeaderJson); // Assuming your login endpoint is 'api/login' and baseURL ends with '/'

            console.log("Login successful:", response.data);
            localStorage.setItem("data", response.data.data)
            // After successful submission, navigate:
            // navigate('/dashboard');

        } catch (err) {
            // Enhanced error handling for Axios
            if (axios.isAxiosError(err) && err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Login error response:", err.response.data);
                console.error("Login error status:", err.response.status);
                // Display error message from the server if available
                setError(err.response.data.message || t('login_failed_generic'));
            } else if (axios.isAxiosError(err)) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.error("Network error:", err.message);
                setError(t('network_error'));
            } else {
                // Something else happened in setting up the request that triggered an Error
                console.error("An unexpected error occurred:", err);
                setError(t('unexpected_error'));
            }
        } finally {
            navigate('/dashboard');
            setLoading(false); // Stop loading regardless of success or failure
        }
    };

    const inputChangeValueEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Corrected state update for input fields
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // Corrected: use `password` as the name for consistency and common practice
    // This will ensure form.password contains the value.
    // If your backend expects 'Password', change it there or keep 'Password' here.
    // However, lowercase is standard.
    document.title = t('title');
    return (
        <div className="bg-base-200 h-screen w-screen stack">
            <div className="h-full flex flex-col justify-center items-center lg:flex-row">
                <div className="card bg-base-100 lg:max-w-sm w-5/6 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className="card-title flex justify-center mb-4">
                            <LazyImage alt={'Nasafa plus logo'} src={Nasafa}/>
                        </div>
                        <FormContainer classes='border-none'>
                            <InputField
                                fieldType="text"
                                name="username" // Ensure this matches your backend's expected field name
                                labelText={t('username')}
                                withLabel={true}
                                placeholder={t('username')}
                                classes="w-auto mb-2"
                                changeEvent={inputChangeValueEvent}
                            />
                            <InputField
                                fieldType="password"
                                name="password" // Changed from "Password" to "password" - RECOMMENDED!
                                labelText={t('pass')}
                                withLabel={true}
                                placeholder={t('pass')}
                                classes="w-auto mb-2"
                                changeEvent={inputChangeValueEvent}
                            />
                            <LocaleSwitcher/>
                            {error &&
                                <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Display error message */}
                            <Button
                                classes="btn-primary mt-4"
                                onClick={formSubmit}
                                disabled={loading} // Disable button while loading
                            >
                                {loading ? t('logging_in') : t('button')} {/* Show loading text */}
                                {loading ? null : <LoginIcon size={5}/>}
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