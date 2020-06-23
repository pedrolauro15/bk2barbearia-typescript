import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from '../Pages/Login';
import ProfilePage from '../Pages/Profile';

const Routes: React.FC = () => {
	return (
		<Router>
			<Route
				path="/"
				exact
				component={LoginPage}
			/>
			<Route
				path="/perfil"
				component={ProfilePage}
			/>
		</Router>
	)
}

export default Routes;