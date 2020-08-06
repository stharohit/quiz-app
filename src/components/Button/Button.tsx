import React from "react";
import { stylesheet, classes, keyframes } from "typestyle";
import { Colors } from "../../constants/Colors";

const load = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "50%": {
    transform: "rotate(180deg)",
    opacity: "0.35"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});

const classNames = stylesheet({
  button: {
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition: ".1s",
    padding: "10px 35px",
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    position: "relative"
  },
  primary: {
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    boxShadow: `0 0 2px ${Colors.GREY}`,

    $nest: {
      "&:active": {
        boxShadow: `0 0 0px ${Colors.GREY}`
      },
      "&:hover": {
        opacity: ".8"
      }
    }
  },
  disabled: {
    backgroundColor: Colors.GREY,
    color: Colors.BLACK,
    cursor: "not-allowed"
  },
  fullWidth: {
    width: "100%"
  },
  loading: {
    $nest: {
      "&::after": {
        position: "absolute",
        right: "2px",
        top: "5px",
        content: `''`,
        width: "10px",
        height: "10px",
        border: `5px solid ${Colors.WHITE}`,
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: `${load} infinite linear 1s`
      }
    }
  }
});

export type TButtonType = "primary" | "disabled";
export type TButtonWidth = "full" | "auto";
export type TButtonLoading = true | false;
export type TButtonHandleType = "button" | "submit" | "reset";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  buttonType?: TButtonType;
  width?: TButtonWidth;
  loading?: TButtonLoading;
  type?: TButtonHandleType;
}

const Button = (props: Props) => {
  const {
    type = "button",
    buttonType = "primary",
    children,
    disabled = false,
    width = "auto",
    loading = false,
    ...rest
  } = props;

  return (
    <button
      className={classes(
        classNames.button,
        disabled ? classNames.disabled : classNames[buttonType],
        width !== "auto" ? classNames.fullWidth : "",
        loading ? classNames.loading : ""
      )}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
