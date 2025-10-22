import classNames from "classnames";
import React from "react";

import styles from "./input.module.scss"; 

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  className?: string
}

export const Input : React.FC<IInputProps> = ({ variant = "default", className, ...props }) => {
  return (
    <input
      className={classNames(
        styles.input, 
        styles[`input--${variant}`], 
        className, 
      )}
      {...props}
    />
  );
};

