import { ReactNode } from "react";

import styles from "./loading-overlay.module.scss";

export const LoadingOverlay = (): ReactNode => {
  return ( 
    <div className={styles.loading_overlay} data-testid="loading-overlay">
      <div className={styles.spinner} data-testid="loading-spinner"></div>
    </div>
  );
};
