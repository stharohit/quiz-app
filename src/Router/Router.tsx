import React from "react";
import { Switch, Route, Redirect } from "react-router";
import AuthRoute from "./AuthRoute";
import Routes from "../pages/Routes";
import { HashRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

const Router = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/">
          {window.localStorage.getItem("loggedIn") === "false" ? (
            <Redirect to="/auth/login" />
          ) : (
            <Redirect to="/user/quiz" />
          )}
        </Route>
        <Route path="/auth">
          <AuthRoute />
        </Route>
        <PrivateRoutes path="/user/quiz" component={Routes} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
