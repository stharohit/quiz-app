import React from "react";
import { Route, Redirect } from "react-router";

// interface Props {
//   Component: React.Component<JSX.Element | any>;
//   loggedIn: boolean | any;
// }

const PrivateRoutes = (props: any) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() =>
        window.localStorage.getItem("loggedIn") === "true" ? (
          <Component />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

export default PrivateRoutes;
