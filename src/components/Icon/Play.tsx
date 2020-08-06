import React from "react";
import { Colors } from "../../constants/Colors";

const Play = () => {
  const style: React.CSSProperties = {
    fill: Colors.PRIMARY,
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none",
    width: "50px",
    height: "50px"
  };
  return (
    <div >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" style={style}>
        <path d="M36.1 20.2l-29-20C6.8 0 6.4-0.1 6 0.1 5.7 0.3 5.5 0.6 5.5 1v40c0 0.4 0.2 0.7 0.5 0.9 0.1 0.1 0.3 0.1 0.5 0.1 0.2 0 0.4-0.1 0.6-0.2l29-20c0.3-0.2 0.4-0.5 0.4-0.8S36.3 20.4 36.1 20.2z" />
      </svg>
    </div>
  );
};

export default Play;
