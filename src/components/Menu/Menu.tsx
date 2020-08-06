import React from "react";
import { MenuItemProps } from "./interface";
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

interface Props {
  MenuItems: Array<MenuItemProps>;
}

const Menu = (props: Props) => {
  const { MenuItems } = props;
  return (
    <div>
      <ul>
        {MenuItems &&
          MenuItems.map((item, index) => {
            return (
              <li key={index} className={classNames.menuItem}>
                <Link className={classNames.menuItemLink} to={item.route}>
                  {item.icon}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Menu;
