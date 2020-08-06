import React from "react";
import { style } from "typestyle";

const content = style({
  width: "100%",
});

const Content = (props: React.HTMLProps<HTMLDivElement>) => {
  const { children } = props;
  return <div className={content}>{children}</div>;
};

export default Content;
