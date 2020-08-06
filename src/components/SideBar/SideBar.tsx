import React from "react";
import { stylesheet } from "typestyle";

const classNames = stylesheet({
  sidebar: {
    width: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",

    "@media screen and (max-width: 900px)": {
      position: "fixed",
      left: 0,
      bottom: 0,
      height: "auto",
      width: "100%"
    }
  }
});

const SideBar = (props: React.HTMLProps<HTMLDivElement>) => {
  const { children } = props;
  return <aside className={classNames.sidebar}>{children}</aside>;
};

export default SideBar;
