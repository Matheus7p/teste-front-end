import classNames from "classnames";

import styles from "./button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: string;
  className?: string;
  children: React.ReactNode
}
export const Button : React.FC<IButtonProps> = ({ variant = "default", className, children, ...props}) => {
  return (
    <button 
      className={classNames(
        styles.button,
        styles[`input--${variant}`], className)} {...props}>
      {children}
    </button>
  );
};
