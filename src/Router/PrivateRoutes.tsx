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
        window.localStorage.getItem("loggedIn") === "false" ? (
          <Redirect to="/auth/login" />
        ) : (
          <Component />
        )
      }
    />
  );
};

export default PrivateRoutes;
