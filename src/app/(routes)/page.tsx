import { JSX } from "react";

import { getProduct } from "@/app/actions/product.actions";
import { CardProduct } from "@/app/components/card/card.component";
import { CategoriesDisplayToHome } from "@/app/components/categories-display/categories-display.component";
import { HeroSection } from "@/app/components/heroSection/hero-section.component";
import { TabSelectorRelatedProduct } from "@/app/components/tab-selector/tab-selector.component";
import { Alert } from "@/app/components/ui/alert/alert.ui";
import { Button } from "@/app/components/ui/button/button.ui";
import { Carousel } from "@/app/components/ui/carousel/carousel.ui";
import { Divider } from "@/app/components/ui/divider/divider.ui";

import styles from "./page.module.scss";

export default async function Home (): Promise<JSX.Element> {
  const { products, error } = await getProduct();

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

      <section className={styles.relatedProduct}>
        <div className={styles.titleContainer}>
          <Divider variant="relatedProduct"/>
          <h2>Produtos Relacionados</h2>
          <Divider variant="relatedProduct"/>
        </div>

        <TabSelectorRelatedProduct />

        <div className={styles.productsListContainer}>
          {error ? (
            <Alert variant="error" title="Ocorreu um Erro">
              {error}
            </Alert>) 
            : (
              <Carousel>
                {products.map((product) => (
                  <CardProduct key={product.productName} productName={product.productName} price={product.price} descriptionShort={product.descriptionShort} photo={product.photo} />
                ))}
              </Carousel>
            )}
        </div>
      </section>
    </main> 
  );
}
