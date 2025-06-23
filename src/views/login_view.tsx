import { type NavigateFunction, useNavigate } from 'react-router-dom';
// import {DASHBOARD_ROUTE_PATH} from "./dashboard_view.tsx";
// import DashboardPage from "../pages/dashboard_page.tsx";
// import DashboardPage from "../pages/dashboard_page.tsx";
// import loginImage from '../assets/img/login-background.jpg'
import loginImage from '../assets/svg/login-2.svg';
import LazyImage from '../components/lazy_image.tsx';
import ImageSkeleton from '../components/skeletons/image_skeleton.tsx';
import FormContainer from '../components/form_container.tsx';
import Button from '../components/buttons/button.tsx';
import InputField from '../components/inputs/input_field.tsx';
import LoginIcon from '../components/icons/auth_icons/login_icon.tsx';
import { useTranslation } from 'react-i18next';
import LocaleSwitcher from '../i18n/locale_switcher.tsx';

const LoginView = () => {
	const { t } = useTranslation('login');
	const navigate: NavigateFunction = useNavigate();
	return (
		<div className="bg-base-200 h-screen w-screen stack">
			<div className="h-full flex flex-col justify-center items-center lg:flex-row">
				{/*<div className="text-center lg:text-left">*/}
				{/*    <p className="py-6">*/}
				{/*        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem*/}
				{/*        quasi. In deleniti eaque aut repudiandae et a id nisi.*/}
				{/*    </p>*/}
				{/*</div>*/}
				<div className="card bg-base-300 lg:max-w-sm w-5/6 shrink-0 shadow-2xl">
					<div className="card-body">
						<div className="card-title flex justify-center mb-4">
							{/*Login now!*/}
							<h1 className="text-3xl lg:text-4xl font-bold">
								{t('login-head')}
							</h1>
						</div>
						{/*<div className="divider"></div>*/}
						<FormContainer>
							<LocaleSwitcher />
							<InputField
								fieldType="text"
								name="username"
								labelText={t('login-username')}
								withLabel={true}
								placeholder={t('login-username')}
								classes="w-auto mb-2"
							/>
							<InputField
								fieldType="password"
								name="Password"
								labelText={t('login-pass')}
								withLabel={true}
								placeholder={t('login-pass')}
								classes="w-auto mb-2"
							/>
							<div>
								<a className="link link-hover">
									{t('login-forget')}
								</a>
							</div>
							<Button
								classes="btn-neutral  btn-primary mt-4"
								onClick={() => {
									navigate('/dashboard');
								}}
							>
								{t('login-button')}{' '}
								<LoginIcon classes="size-6" />
							</Button>
						</FormContainer>
					</div>
				</div>
			</div>
			{/*<img src={loginImage} className='max-h-full w-screen object-cover'/>*/}
			<LazyImage
				alt={'login-background'}
				placeholder={
					<ImageSkeleton classes="max-h-screen lg:max-h-full w-screen" />
				}
				src={loginImage}
				classes="max-h-screen lg:max-h-full w-screen object-cover lg:object-none blur"
			/>
			{/*<img src={loginImage} loading='lazy' className='max-h-screen lg:max-h-full w-screen object-cover lg:object-none blur'/>*/}
		</div>
	);
};

export default LoginView;
