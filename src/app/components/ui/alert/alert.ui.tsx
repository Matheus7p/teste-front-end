"use client"; 

import { JSX, ReactNode, useState, useEffect } from "react";

import styles from "./alert.module.scss";

interface IAlertProps {
  children: ReactNode;
  variant: string;
  title?: string;
  duration?: number; 
}

export function Alert ({ children, variant, title, duration = 3000 }: IAlertProps): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.alert} ${styles[`alert--${variant}`]}`}>
      <div className={styles.alert__content}>
        {title && <h4 className={styles.alert__title}>{title}</h4>}
        <p>{children}</p>
      </div>
    </div>
  );
}

