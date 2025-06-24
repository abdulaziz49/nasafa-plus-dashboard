import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import CircleLoading from './components/loaders/circle_loading.tsx';
import {
	CONTAINER_GROUP_MANAGEMENT_ROUTE,
	CONTAINER_MANAGEMENT_ROUT,
	DASHBOARD_ROUTE,
	SETTINGS_MANAGEMENT_ROUTE,
	USERS_GROUPS_MANAGEMENT_ROUTE,
	USERS_MANAGEMENT_ROUTE,
} from './routes/routes.ts';
import useLocalizeDocumentAttributes from './i18n/use_localize_document_attributes.ts';

const DashboardView = lazy(() => import('./views/dashboard_view.tsx'));
const LoginView = lazy(() => import('./views/login_view.tsx'));
const UserManagementView = lazy(
	() => import('./views/users/users_management_view.tsx'),
);
// const ViewTemplate = lazy(() => import('./components/templates/view_template.tsx'))
const UserGroupManagementView = lazy(
	() => import('./views/users/user_group_management_view.tsx'),
);
const ContainerView = lazy(
	() => import('./views/containers/container_view.tsx'),
);

const ContainerGroupView = lazy(
	() => import('./views/containers/container_group_view.tsx'),
);
const View404 = lazy(() => import('./views/errors/view_404.tsx'));
const SettingsView = lazy(() => import('./views/setttings_view.tsx'));
import ViewTemplate from './components/templates/view_template.tsx';

function App() {
	useLocalizeDocumentAttributes();

	return (
		<ViewTemplate>
			<Suspense fallback={<CircleLoading />}>
				<Routes>
					{/*<Route path={LOGIN_ROUTE_PATH} element={<LoginView/>}/>*/}
					{/*<Route path={DASHBOARD_ROUTE_PATH} element={<DashboardView/>}/>*/}
					<Route index element={<LoginView />} />
					<Route path={DASHBOARD_ROUTE} element={<DashboardView />} />
					{/*<Route path={DASHBOARD_ROUTE} element={<ViewTemplate/>}>*/}
					{/*</Route>*/}
					<Route
						path={USERS_MANAGEMENT_ROUTE}
						element={<UserManagementView />}
					/>
					<Route
						path={USERS_GROUPS_MANAGEMENT_ROUTE}
						element={<UserGroupManagementView />}
					/>
					<Route
						path={CONTAINER_GROUP_MANAGEMENT_ROUTE}
						element={<ContainerGroupView />}
					/>
					<Route
						path={CONTAINER_MANAGEMENT_ROUT}
						element={<ContainerView />}
					/>

					<Route
						path={SETTINGS_MANAGEMENT_ROUTE}
						element={<SettingsView />}
					/>
					<Route path="*" element={<View404 />} />
				</Routes>
			</Suspense>
		</ViewTemplate>
	);
}

export default App;
