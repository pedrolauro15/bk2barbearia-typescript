import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import LoginPage from '../Pages/Login';

const UserRoutes: React.FC = () => {
	return (
		<Router>
			<Route path="*">
				<Redirect to="/" />
			</Route>
			<Route path="/" component={LoginPage} />
		</Router>
	);
};

export default UserRoutes;
