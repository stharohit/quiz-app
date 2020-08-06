import React from "react";
import { stylesheet } from "typestyle";
import { Colors } from "../../constants/Colors";

const classNames = stylesheet({
  input: {
    width: "100%",
    padding: "10px",
    border: `1px solid ${Colors.GREY}`,
    transition: ".2s",

    $nest: {
      "&:focus": {
        border: `1px solid ${Colors.PRIMARY}`,
        borderRadius: 0,
        outline: 0
      }
    }
  }
});

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const Input = (props: Props) => {
  const { placeholder, type, ...rest } = props;

  return (
    <input
      placeholder={placeholder}
      className={classNames.input}
      type={type}
      {...rest}
    />
  );
};

export default Input;
