import React from "react";
import Layout from "../components/Layout/Layout";
// import SideBar from "../components/SideBar/SideBar";
// import Menu from "../components/Menu/Menu";
import Content from "../components/Layout/Content";
import QuizStart from "../pages/Quiz/QuizStart";
import { stylesheet } from "typestyle";
import { Colors } from "../constants/Colors";
import { Switch, Route, Redirect, useHistory } from "react-router";

const classNames = stylesheet({
  title: {
    fontSize: "40px",
    color: Colors.WHITE,
    textAlign: "center",
    margin: "20px 0"
  }
});

const ProtectedRoutes = () => {
  const history = useHistory();
  return (
    <Layout>
      {/* <SideBar>
        <Menu MenuItems={MenuItems} />
      </SideBar> */}
      <Content>
        <h1 className={classNames.title}>Quiz App</h1>
        <Switch>
          <Route exact path="/user/quiz">
            <QuizStart />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
};

export default ProtectedRoutes;
