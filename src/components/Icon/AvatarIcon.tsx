import React from "react";
import { Colors } from "../../constants/Colors";

const AvatarIcon = () => {
  const style: React.CSSProperties = {
    fill: Colors.GREY,
    fillOpacity: 1,
    fillRule: "nonzero",
    stroke: "none",
    width: "50px",
    height: "50px"
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479 479" style={style}>
      <path d="M239.5 0C107.2 0 0 107.2 0 239.5S107.2 479 239.5 479 479 371.8 479 239.5 371.8 0 239.5 0zM390.9 360.7c-1.8-15.6-8.4-33.2-28.2-38.2 -37.9-9.6-68.7-31.3-68.7-31.3l-24 76 -4.5 14.3 -0.1-0.2 -3.9 12.1 -12.7-36c32.1-44.7-8.5-43-8.5-43s-40.5-1.7-8.5 43L219 393.6l-3.9-12.2 -28.6-90.3c0 0-30.8 21.7-68.7 31.3 -19.8 5-26.4 22.6-28.2 38.2 -26.7-33.1-42.7-75.2-42.7-121.1 0-106.8 86.6-193.4 193.4-193.4s193.4 86.6 193.4 193.4C433.7 285.4 417.6 327.5 390.9 360.7z" />
      <path d="M309.9 189.6c1.2-3.4 2.1-6.7 2.7-10.1C323.1 116.2 292 114 292 114s-5.2-9.9-18.8-17.4c-9.1-5.4-21.8-9.6-38.6-8.1 -5.4 0.3-10.5 1.3-15.4 2.9l0 0c-6.2 2.1-11.8 5.1-16.9 8.7 -6.3 4-12.2 8.8-17.4 14.4 -8.3 8.4-15.6 19.3-18.8 32.9 -2.7 10.2-2.1 20.8 0.1 32.2l0 0c0.6 3.3 1.5 6.7 2.7 10.1 -6.2-0.6-13.6 3-6.6 27.5 5.1 17.9 9.8 22.9 13.3 23.2 3.3 21.3 19.6 48.3 46.6 57.8 11 3.9 23.2 3.9 34.2-0.1 26.5-9.6 43.4-36.5 46.7-57.7 3.6-0.3 8.3-5.3 13.3-23.2C323.5 192.6 316.2 189 309.9 189.6z" />
    </svg>
  );
};

export default AvatarIcon;
