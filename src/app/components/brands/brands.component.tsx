import { JSX } from "react";

import { Card, CardImage } from "@/app/components/card/card.component";
import { IBrand } from "@/app/types/brand.type";


import styles from "./brands.module.scss";

const brands: IBrand[] =[
  { brandName: "econverse", logo: "/images/Logo.svg"},
  { brandName: "econverse", logo: "/images/Logo.svg"},
  { brandName: "econverse", logo: "/images/Logo.svg"},
  { brandName: "econverse", logo: "/images/Logo.svg"},
  { brandName: "econverse", logo: "/images/Logo.svg"},
];

export const Brands = (): JSX.Element => {
  return(
    <>
      <div className={styles.brandsGroup}>
        <h3>Navegue por marcas</h3>
        <div className={styles.brandsList}>
          {brands.map((brand) =>(
            <Card key={brand.brandName} className={styles.brandItem}>
              <CardImage src={brand.logo} alt={brand.brandName} width={117} height={34} />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
