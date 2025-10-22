"use client";

import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, ReactElement } from "react";

import { TUiIconTypes } from "@/app/components/ui/icon/icon-types.enum";
import { Icon } from "@/app/components/ui/icon/icon.ui";


import styles from "./footer.module.scss";

type ComponentsProps = PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

interface IFooterSectionProps extends ComponentsProps {
  title: string;
  links: Array<{
    href: string;
    label: string;
  }>;
}

interface IFooterSocialProps extends ComponentsProps {
  socials: Array<{
    href: string;
    icon: TUiIconTypes;
    label: string;
  }>;
}

export const FooterContainer = ({ children, ...props }: ComponentsProps): ReactElement => {
  return (
    <div className={styles.footerContainer} {...props}>
      {children}
    </div>
  );
};

export const FooterLeft = ({ children, ...props }: ComponentsProps): ReactElement => {
  return (
    <div className={styles.footerLeft} {...props}>
      {children}
    </div>
  );
};

export const FooterRight = ({ children, ...props }: ComponentsProps): ReactElement => {
  return (
    <div className={styles.footerRight} {...props}>
      {children}
    </div>
  );
};

export const FooterDivider = ({ ...props }: React.HTMLAttributes<HTMLDivElement>): ReactElement => {
  return <div className={styles.dividerVertical} {...props} />;
};

export const FooterSocial = ({ socials, ...props }: IFooterSocialProps): ReactElement => {
  return (
    <div className={styles.footerIcons} {...props}>
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          aria-label={social.label}
        >
          <Icon type={social.icon} />
        </Link>
      ))}
    </div>
  );
};

export const FooterSection = ({ title, links, ...props }: IFooterSectionProps): ReactElement => {
  return (
    <div className={styles.footerSection} {...props}>
      <h6>{title}</h6>
      {links.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export const FooterCopyright = ({ children, ...props }: ComponentsProps): ReactElement => {
  return (
    <div className={styles.footerCopyright} {...props}>
      {children}
    </div>
  );
};

export const Footer = (): ReactElement => {
  const socialLinks = [
    { href: "#instagram", icon: "Instagram" as const, label: "Instagram" },
    { href: "#facebook", icon: "Facebook" as const, label: "Facebook" },
    { href: "#linkedin", icon: "Linkedin" as const, label: "LinkedIn" },
  ];

  const institutionalLinks = [
    { href: "#sobre-nos", label: "Sobre Nós" },
    { href: "#movimento", label: "Movimento" },
    { href: "#trabalhe-conosco", label: "Trabalhe conosco" },
  ];

  const helpLinks = [
    { href: "#suporte", label: "Suporte" },
    { href: "#fale-conosco", label: "Fale Conosco" },
    { href: "#perguntas-frequentes", label: "Perguntas Frequentes" },
  ];

  const termsLinks = [
    { href: "#termos", label: "Termos e Condições" },
    { href: "#privacidade", label: "Política de Privacidade" },
    { href: "#troca-devolucao", label: "Troca e Devolução" },
  ];

  return (
    <footer className={styles.footer}>
      <FooterContainer>
        <FooterLeft>
          <Image 
            src="/images/Logo.svg" 
            alt="Logo econverse" 
            width={164} 
            height={48}
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <FooterSocial socials={socialLinks} />
        </FooterLeft>

        <FooterDivider />

        <FooterRight>
          <FooterSection title="Institucional" links={institutionalLinks} />
          <FooterSection title="Ajuda" links={helpLinks} />
          <FooterSection title="Termos" links={termsLinks} />
        </FooterRight>
      </FooterContainer>

      <FooterCopyright>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </FooterCopyright>
    </footer>
  );
};
