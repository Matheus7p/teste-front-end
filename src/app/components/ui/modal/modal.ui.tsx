"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useCallback } from "react";

import { Button } from "@/app/components/ui/button/button.ui";

import styles from "./modal.module.scss";


export const Modal = ({ children }: PropsWithChildren): React.ReactElement => {
  const router = useRouter();
  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onDismiss();
    };

    document.body.classList.add("active-modal");
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("active-modal");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onDismiss]);

  const handleClose = onDismiss;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Button
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="Fechar modal"
        >
          X
        </Button>
        {children}
      </div>
    </div>
  );
};
