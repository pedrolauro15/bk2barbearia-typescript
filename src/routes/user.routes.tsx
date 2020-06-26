import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import ProfilePage from '../Pages/Profile';

const UserRoutes: React.FC = () => {
	return (
		<Router>
			<Route path="*">
				<Redirect to="/perfil" />
			</Route>
			<Route path="/perfil" component={ProfilePage} />
		</Router>
	);
};

export default UserRoutes;
