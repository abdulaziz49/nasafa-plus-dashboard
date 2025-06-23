// import Accordion from '../accordion.tsx';
// import DrawerSkeleton from '../skeletons/drawer_skeleton.tsx';
// import RoutesSchema from '../../controllers/schema/routes_schema.tsx';
// import { Link } from 'react-router-dom';
// import { Suspense } from 'react';
// import { useTranslation } from 'react-i18next';
// import Button from '../buttons/button.tsx';

// const DrawerContainer = () => {
// 	const { t } = useTranslation('drawer');
// 	return (
// 		<>
// 			{/*<Suspense>*/}

// 			<div className="drawer-side lg:p-4 z-3 max-h-screen">
// 				<label
// 					htmlFor="my-drawer-2"
// 					aria-label="close sidebar"
// 					className="drawer-overlay"
// 				></label>
// 				<div className="bg-base-100 text-base-content w-80 p-4 lg:rounded-xl h-dvh">
// 					<div className="divider"></div>
// 					<ul className="menu w-full max-h-screen overflow-y-auto">
// 						<Suspense fallback={<DrawerSkeleton classes={''} />}>
// 							{RoutesSchema.map((route, index) => {
// 								if (!route.hasOwnProperty!('childs'))
// 									return (
// 										<li key={index}>
// 											<Link to={route.routeURL!}>
// 												{route.routeIcon}{' '}
// 												{t(route.routeName!)}
// 											</Link>
// 										</li>
// 									); // Skip if 'childs' key is present
// 								return (
// 									<Accordion
// 										key={index}
// 										classes="collapse-arrow"
// 										title={t(route.accordionName!)}
// 										icon={route.accordionIcon}
// 									>
// 										<ul className="menu w-full">
// 											{route.childs?.map(
// 												(child, childIndex) => (
// 													<li key={childIndex}>
// 														<Link
// 															to={child.routeURL}
// 														>
// 															{child.routeIcon}{' '}
// 															{t(child.routeName)}
// 														</Link>
// 													</li>
// 												),
// 											)}
// 										</ul>
// 									</Accordion>
// 								);
// 							})}
// 						</Suspense>
// 					</ul>
// 					<div className="divider"></div>
// 					<div className="w-full flex items-center justify-between! space-y-2">
// 						<Button
// 							classes="bg-transparent border-none shadow-none"
// 							onClick={() => {
// 								window.location.href = '/';
// 							}}
// 						>
// 							Logout
// 						</Button>
// 						<Button
// 							classes="bg-transparent border-none shadow-none"
// 							onClick={() => {
// 								window.location.href = '/';
// 							}}
// 						>
// 							settings
// 						</Button>
// 					</div>
// 					{/*<Accordion title={'group 1'}>*/}
// 					{/*    <ul className="menu">*/}
// 					{/*        /!* Sidebar content here *!/*/}
// 					{/*        {children}*/}
// 					{/*    </ul>*/}
// 					{/*</Accordion>*/}
// 					{/*<Accordion title={'group 1'}>*/}
// 					{/*    <ul className="menu">*/}
// 					{/*        /!* Sidebar content here *!/*/}
// 					{/*        {children}*/}
// 					{/*    </ul>*/}
// 					{/*</Accordion>*/}
// 					{/*<Accordion title={'group 1'}>*/}
// 					{/*    <ul className="menu">*/}
// 					{/*        /!* Sidebar content here *!/*/}
// 					{/*        {children}*/}
// 					{/*    </ul>*/}
// 					{/*</Accordion>*/}
// 					{/*<Accordion title={'group 1'}>*/}
// 					{/*    <ul className="menu">*/}
// 					{/*        /!* Sidebar content here *!/*/}
// 					{/*        {children}*/}
// 					{/*    </ul>*/}
// 					{/*</Accordion>*/}
// 					{/*<Accordion title={'group 1'}>*/}
// 					{/*    <ul className="menu">*/}
// 					{/*        /!* Sidebar content here *!/*/}
// 					{/*        {children}*/}
// 					{/*    </ul>*/}
// 					{/*</Accordion>*/}
// 					{/*<Accordion title={'group 1'}>*/}
// 					{/*    <ul className="menu">*/}
// 					{/*        /!* Sidebar content here *!/*/}
// 					{/*        {children}*/}
// 					{/*    </ul>*/}
// 					{/*</Accordion>*/}
// 					{/*<Accordion title={'group 1'}>*/}
// 					{/*<ul className="menu">*/}
// 					{/*    /!* Sidebar content here *!/*/}
// 					{/*    {children}*/}
// 					{/*</ul>*/}
// 					{/*</Accordion><Accordion title={'group 1'}>*/}
// 					{/*    <ul className="menu">*/}
// 					{/*        /!* Sidebar content here *!/*/}
// 					{/*        {children}*/}
// 					{/*    </ul>*/}
// 					{/*</Accordion><Accordion title={'group 1'}>*/}
// 					{/*    <ul className="menu">*/}
// 					{/*        /!* Sidebar content here *!/*/}
// 					{/*        {children}*/}
// 					{/*    </ul>*/}
// 					{/*</Accordion>*/}
// 					{/*    <Accordion title={'group 1'}>*/}
// 					{/*        <ul className="menu">*/}
// 					{/*            /!* Sidebar content here *!/*/}
// 					{/*            {children}*/}
// 					{/*        </ul>*/}
// 					{/*    </Accordion>*/}
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default DrawerContainer;

import Accordion from '../accordion.tsx';
import DrawerSkeleton from '../skeletons/drawer_skeleton.tsx';
import RoutesSchema from '../../controllers/schema/routes_schema.tsx';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../buttons/button.tsx';

const DrawerContainer = () => {
	const { t } = useTranslation('drawer');

	return (
		<>
			<div className="drawer-side lg:p-4 z-3 max-h-screen">
				<label
					htmlFor="my-drawer-2"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<div className="bg-base-100 text-base-content w-80 p-4 lg:rounded-xl h-dvh flex flex-col">
					{' '}
					{/* Added flex-col for better layout control */}
					<div className="divider"></div>
					{/* The scrollable area for menu items is now within Suspense */}
					<ul className="menu w-full flex-grow overflow-y-auto">
						{' '}
						{/* Use flex-grow and overflow-y-auto */}
						<Suspense fallback={<DrawerSkeleton classes={''} />}>
							{RoutesSchema.map((route, index) => {
								// Check for 'childs' property to determine if it's a direct link or an accordion
								if (!route.hasOwnProperty('childs')) {
									return (
										<li key={index}>
											<Link to={route.routeURL!}>
												{route.routeIcon}{' '}
												{t(route.routeName!)}
											</Link>
										</li>
									);
								}
								return (
									<Accordion
										key={index}
										classes="collapse-arrow"
										title={t(route.accordionName!)}
										icon={route.accordionIcon}
									>
										<ul className="menu w-full">
											{route.childs?.map(
												(child, childIndex) => (
													<li key={childIndex}>
														<Link
															to={child.routeURL}
														>
															{child.routeIcon}{' '}
															{t(child.routeName)}
														</Link>
													</li>
												),
											)}
										</ul>
									</Accordion>
								);
							})}
						</Suspense>
					</ul>
					<div className="divider"></div>
					<div className="w-full flex items-center justify-between space-y-2 mt-auto">
						{' '}
						{/* Added mt-auto to push to bottom */}
						<Button
							classes="bg-transparent border-none shadow-none"
							onClick={() => {
								window.location.href = '/'; // Consider using React Router's `Maps` for better SPA experience
							}}
						>
							Logout
						</Button>
						<Button
							classes="bg-transparent border-none shadow-none"
							onClick={() => {
								window.location.href = '/'; // Consider using React Router's `Maps` for better SPA experience
							}}
						>
							Settings
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default DrawerContainer;
