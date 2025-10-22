"use client";

import React, { PropsWithChildren, ReactElement } from "react";

import { Button } from "@/app/components/ui/button/button.ui";
import { Input } from "@/app/components/ui/input/input.ui";

import styles from "./news-letter.module.scss";

type ComponentsProps = PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

interface INewsletterFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "children"> {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface INewsletterCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const NewsletterContainer = ({ children, ...props }: ComponentsProps): ReactElement => {
  return (
    <div className={styles.newsletter} {...props}>
      {children}
    </div>
  );
};

export const NewsletterContent = ({ children, ...props }: ComponentsProps): ReactElement => {
  return (
    <div className={styles.newsletterContent} {...props}>
      {children}
    </div>
  );
};

export const NewsletterHeader = ({ children, ...props }: ComponentsProps): ReactElement => {
  return (
    <div className={styles.newsletterHeader} {...props}>
      {children}
    </div>
  );
};

export const NewsletterForm = ({ onSubmit, ...props }: INewsletterFormProps): ReactElement => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit} {...props}>
      <Input
        variant="text"
        placeholder="Digite seu nome"
        className={styles.formInput}
      />
      <Input
        variant="email"
        placeholder="Digite seu e-mail"
        className={styles.formInput}
      />
      <Button variant="yellow" className={styles.submitButton}>
        INSCREVER
      </Button>
    </form>
  );
};

export const NewsletterCheckbox = ({ label, id, ...props }: INewsletterCheckboxProps): ReactElement => {
  const checkboxId = id || "newsletter-terms";
  
  return (
    <div className={styles.newsletterCheckbox}>
      <input
        type="checkbox"
        id={checkboxId}
        className={styles.checkboxInput}
        {...props}
      />
      <label htmlFor={checkboxId} className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  );
};

export const Newsletter = (): ReactElement => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Newsletter form submitted");
  };

  return (
    <NewsletterContainer>
      <NewsletterHeader>
        <h5 className={styles.title}>Inscreva-se na nossa newsletter</h5>
        <p className={styles.description}>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos <br />
          da Econverse.
        </p>
      </NewsletterHeader>

      <NewsletterContent>
        <NewsletterForm onSubmit={handleSubmit} />
        <NewsletterCheckbox 
          label="Aceito os termos e condições" 
          name="terms"
        />
      </NewsletterContent>
    </NewsletterContainer>
  );
};
