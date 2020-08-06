import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";
import Routes from "../pages/Routes";

const Router = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>();

  useEffect(() => {
    const auth = window.localStorage.getItem("loggedIn");
    auth === "true" ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/auth/login" />}
      />
      <Route path="/auth" component={AuthRoute}/>
      <ProtectedRoute path="/user" loggedIn={loggedIn} component={Routes} />
    </Switch>
  );
};

export default Router;
