import React, { useContext } from "react";
import AuthContext from "../contexts/authContext";
import UserRoutes from "./user.routes";
import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);
  if (signed) {
    return <UserRoutes />;
  }

  return <AuthRoutes />;
};

export default Routes;
