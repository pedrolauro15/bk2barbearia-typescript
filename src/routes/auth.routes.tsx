import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import LoginPage from "../Pages/Login";

const IndexPage = () => {
  const { push } = useHistory();
  useEffect(() => {
    push("/");
  }, []);

  return <></>;
};

const UserRoutes: React.FC = () => {
  return (
    <Router>
      <Route exact component={IndexPage} />
      <Route path="/" component={LoginPage} />
    </Router>
  );
};

export default UserRoutes;
