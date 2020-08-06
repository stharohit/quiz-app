import React from "react";
import { Route } from "react-router";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const AuthRoute = () => {

  return (
    <React.Fragment>
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/signup" component={Signup} />
    </React.Fragment>
  );
};

export default AuthRoute;
