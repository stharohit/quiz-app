import React from "react";
import { style } from "typestyle";
import { Colors } from "../../constants/Colors";

const layout = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  background: Colors.SECONDARY,
  minHeight: "100vh",
  height: "100%"
});

const Layout = (props: React.HTMLProps<HTMLDivElement>) => {
  const { children } = props;
  return <div className={layout}>{children}</div>;
};

export default Layout;
