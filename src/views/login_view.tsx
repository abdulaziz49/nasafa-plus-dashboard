import { type NavigateFunction, useNavigate } from 'react-router-dom';
import loginImage from '../assets/svg/login-2.svg';
import LazyImage from '../components/lazy_image.tsx';
import ImageSkeleton from '../components/skeletons/image_skeleton.tsx';
import FormContainer from '../components/form_container.tsx';
import Button from '../components/buttons/button.tsx';
import InputField from '../components/inputs/input_field.tsx';
import { useTranslation } from 'react-i18next';
import LocaleSwitcher from '../i18n/locale_switcher.tsx';
import Nasafa from '../assets/img/nasafa_plus_logo.png';
import {LoginIcon} from "../components/icons/auth_icons.tsx";

const LoginView = () => {
	const { t } = useTranslation('login');
	const navigate: NavigateFunction = useNavigate();

	document.title = t('title');
	return (
		<div className="bg-base-200 h-screen w-screen stack">
			<div className="h-full flex flex-col justify-center items-center lg:flex-row">
				<div className="card bg-base-300 lg:max-w-sm w-5/6 shrink-0 shadow-2xl">
					<div className="card-body">
						<div className="card-title flex justify-center mb-4">
							{/*Login now!*/}
							{/*<h1 className="text-3xl lg:text-4xl font-bold">*/}
							{/*    {t('head')}*/}
							{/*</h1>*/}
							<LazyImage alt={'Nasafa plus logo'} src={Nasafa} />
						</div>
						<FormContainer>
							<InputField
								fieldType="text"
								name="username"
								labelText={t('username')}
								withLabel={true}
								placeholder={t('username')}
								classes="w-auto mb-2"
							/>
							<InputField
								fieldType="password"
								name="Password"
								labelText={t('pass')}
								withLabel={true}
								placeholder={t('pass')}
								classes="w-auto mb-2"
							/>
							<LocaleSwitcher />
							{/*<div>*/}
							{/*    <a className="link link-hover">*/}
							{/*        {t('forget')}*/}
							{/*    </a>*/}
							{/*</div>*/}
							<Button
								classes="btn-neutral btn-primary mt-4"
								onClick={() => {
									navigate('/dashboard');
								}}
							>
								{t('button')}
								<LoginIcon classes="size-6" />
							</Button>
						</FormContainer>
					</div>
				</div>
			</div>
			<LazyImage
				alt={'background'}
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
