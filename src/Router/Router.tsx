import React from "react";
import { Switch, Route, Redirect } from "react-router";
import AuthRoute from "./AuthRoute";
import Routes from "../pages/Routes";
import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/auth/login" />
        </Route>
        <Route path="/auth/login">
          <AuthRoute />
        </Route>
        <PrivateRoutes path="/user/quiz" component={Routes} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
