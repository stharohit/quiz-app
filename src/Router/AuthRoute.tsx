import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const AuthRoute = () => {
  return (
    <React.Fragment>
      <Switch>
        {window.localStorage.getItem("loggedIn") === "true" ? (
          <Redirect to="/user/quiz" />
        ) : (
          <React.Fragment>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/signup" component={Signup} />
          </React.Fragment>
        )}
      </Switch>
    </React.Fragment>
  );
};

export default AuthRoute;
