import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './Error/errorPage.jsx';
import { HomePage } from './Home/HomePage.jsx';
import { CrewPage } from './Crew/CrewPage.jsx';
import { DestinationPage } from './Destination/DestinationPage.jsx';
import { TechPage } from './Technology/TechPage.jsx';

export const routers = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />
	},
	{
		path: '/destination',
		element: <DestinationPage />,
	},
	{
		path: '/crew',
		element: <CrewPage />,
	},
	{
		path: '/technology',
		element: <TechPage />,
	},
]);
