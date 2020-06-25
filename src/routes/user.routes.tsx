import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import ProfilePage from "../Pages/Profile";

const IndexPage = () => {
  const { push } = useHistory();
  useEffect(() => {
    push("/perfil");
  }, []);

  return <></>;
};

const UserRoutes: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={IndexPage} />
      <Route path="/perfil" component={ProfilePage} />
    </Router>
  );
};

export default UserRoutes;
