import { useTranslation } from 'react-i18next';

const ClientTypeManagementView = () => {
	const { t } = useTranslation('contract-management/type');
	document.title = t('title');
	return (
		<div className="hero bg-base-200 max-h-screen">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">{t('title')}</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti
						eaque aut repudiandae et a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default ClientTypeManagementView;
