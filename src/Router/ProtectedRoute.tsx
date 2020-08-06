import React from "react";
import { Route, Redirect } from "react-router";

// interface Props {
//   Component: React.Component<JSX.Element | any>;
//   loggedIn: boolean | any;
// }

const ProtectedRoute = (props: any) => {
  const { Component, loggedIn, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() =>
        loggedIn ? <Component /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default ProtectedRoute;
