import React from "react";
import Layout from "../components/Layout/Layout";
// import SideBar from "../components/SideBar/SideBar";
// import Menu from "../components/Menu/Menu";
import Content from "../components/Layout/Content";
import QuizStart from "../pages/Quiz/QuizStart";
import { stylesheet } from "typestyle";
import { Colors } from "../constants/Colors";
import { Switch, Route } from "react-router";
import SideBar from "../components/SideBar/SideBar";
import Menu from "../components/Menu/Menu";

const classNames = stylesheet({
  title: {
    fontSize: "40px",
    color: Colors.WHITE,
    textAlign: "center",
    margin: "20px 0"
  }
});

const Routes = () => {
  return (
    <Layout>
      <SideBar>
        <Menu />
      </SideBar>
      <Content>
        <h1 className={classNames.title}>Quiz App</h1>
        <Switch>
          <Route path="/user/quiz" component={QuizStart} />
        </Switch>
      </Content>
    </Layout>
  );
};

export default Routes;
