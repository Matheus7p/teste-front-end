import React from "react";

import styles from "./hero-section.module.scss";

interface IHeroSection {
  variant?: string;
  children: React.ReactNode
}
export function HeroSection ({variant = "home", children} : IHeroSection): React.ReactElement{
  return(
    <section className={styles[`hero--${variant}`]}>
      {children}
    </section>
  );
}
