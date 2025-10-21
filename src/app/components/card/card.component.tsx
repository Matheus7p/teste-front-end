import Image from "next/image";
import Link from "next/link";
import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";


import { Button } from "@/app/components/ui/button/button.ui";
import { IProduct } from "@/app/types/products.type";
import { formatPriceToBRL } from "@/utils/price-format.utils";
import { slugify } from "@/utils/slugify.util";

import styles from "./card.module.scss";

interface ICardImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
interface ICard extends ComponentPropsWithoutRef<"div">{
  children?: React.ReactNode;
  className: string;

}

export const Card = ({ children, className, ...props }: ICard): React.ReactElement => {
  return (<div className={className} {...props}>{children}</div>);
};

export const CardImage = ({ src, alt, width, height }: ICardImage): React.ReactElement => {
  return (<Image src={src} alt={alt} width={width} height={height}/>);
};

export const CardContent = ({ children }: PropsWithChildren): React.ReactElement => {
  return (<div>{children}</div>);
};

export const CardButton = ({ children }: PropsWithChildren): React.ReactElement => {
  return (<div>{children}</div>);
};

export const CardProduct = ({ productName, price, descriptionShort, photo}: IProduct): React.ReactElement => {
  const id = slugify(productName);
  return (
    <Card className={styles.productCard as string}>
      <CardImage src={photo} alt={productName} width={278.1} height={228}/>
      <CardContent>
        <p className={styles.productName}>{productName}</p>
        <p className={styles.productName}>{descriptionShort}</p>
        <p className={styles.priceDiscounted}>
          <span style={{ textDecoration: "line-through" }}>
            R$ {formatPriceToBRL(price)}
          </span>
          <br />
          R$ {formatPriceToBRL(price)}
        </p>
        <p className={styles.priceInstallments}>
        ou 2x de {formatPriceToBRL(price/2)} sem juros
        </p>
        <p>Frete grátis</p>
      </CardContent>
      <CardButton>
        <Link href={`/product/${id}`}>
          <Button variant="blue">COMPRAR</Button>
        </Link>
      </CardButton>
    </Card>);
};
