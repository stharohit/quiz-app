import React from "react";
import { stylesheet } from "typestyle";
import { Link } from "react-router-dom";
import { Colors } from "../../constants/Colors";

const classNames = stylesheet({
  menuItem: {
    listStyle: "none",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    boxShadow: `0 0 20px ${Colors.GREY}`,
    background: Colors.WHITE,

    $nest: {
      "&:not(:last-child)": {
        marginBottom: "20px"
      },
      "&:active": {
        boxShadow: `0 0 10px ${Colors.GREY}`
      }
    }
  },
  menuItemLink: {
    textDecoration: "none",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

interface Props {}

const Menu = (props: Props) => {
  const handleLogout = () => {
    window.localStorage.setItem("loggedIn", "false");
    window.location.reload();
  }
  return (
    <div>
      <ul>
        <li className={classNames.menuItem}>
          <Link className={classNames.menuItemLink} to="" onClick={handleLogout}>
            logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
