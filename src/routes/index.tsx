import React, { useContext } from 'react';
import AuthContext from '../contexts/authContext';
import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes';

const Routes: React.FC = () => {
	const { signed } = useContext(AuthContext);
  return signed ? <UserRoutes /> : <AuthRoutes />;
};

export default Routes;
