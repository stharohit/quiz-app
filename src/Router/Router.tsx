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
          {
            window.localStorage.getItem("loggedIn") === "false" ? 
            <Redirect to="/auth/login" /> : 
            <Redirect to="/user/quiz" />
          }
        </Route>
        <Route path="/auth/">
          <AuthRoute />
        </Route>
        <PrivateRoutes path="/user/quiz" component={Routes} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
