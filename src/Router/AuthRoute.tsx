import React from "react";
import { Route, Switch } from "react-router";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const AuthRoute = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Signup} />
      </Switch>
    </React.Fragment>
  );
};

export default AuthRoute;
