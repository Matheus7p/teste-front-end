import classNames from "classnames";
import { ReactElement } from "react";

import styles from "./divider.module.scss";

interface IDividerProps {
  variant?: string;
}

export const Divider = ({ variant = "default" }: IDividerProps): ReactElement => {
  return ( <hr className={classNames(styles.divider, styles[`divider--${variant}`])}></hr> );
};
 
