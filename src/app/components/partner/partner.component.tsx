import { JSX } from "react";

import { Card, CardContent } from "@/app/components/card/card.component";
import { Button } from "@/app/components/ui/button/button.ui";

import styles from "./partner.module.scss";

const partnerCards = [
  { id: "partner-1", title: "Parceiros", description: "Lorem ipsum dolor sit amet, consectetur", buttonText: "CONFIRA" },
  { id: "partner-2", title: "Parceiros", description: "Lorem ipsum dolor sit amet, consectetur", buttonText: "CONFIRA" },
];

export const Partner = (): JSX.Element => {
  return (
    <div className={styles.containerPartner} data-testid="partner">
      {partnerCards.map((card) => (
        <Card key={card.id} className={styles.partner} data-testid="partner-card">
          <CardContent>
            <h5>{card.title}</h5>
            <p>{card.description}</p>
            <Button variant="yellow" data-testid="partner-button">
              {card.buttonText}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
