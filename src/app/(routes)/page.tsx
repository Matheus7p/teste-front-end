import { ReactElement } from "react";

import { CategoriesDisplayToHome } from "@/app/components/categories-display/categories-display.component";
import { HeroSection } from "@/app/components/heroSection/hero-section.component";
import { Button } from "@/app/components/ui/button/button.ui";


export default function Home (): ReactElement {
  return (
    <main >
      <HeroSection>
        <div>
          <h3>Venha conhecer nossas <br/> promoções</h3>
          <p><span>50% Off</span> nos produtos</p>
          <Button variant="yellow">
          Ver Produto
          </Button>
        </div>
      </HeroSection>
      <CategoriesDisplayToHome />
    </main>
  );
}
