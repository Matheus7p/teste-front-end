"use client";

import { JSX } from "react";

import { Button } from "@/app/components/ui/button/button.ui";
import { Icon } from "@/app/components/ui/icon/icon.ui";
import { useQuantity } from "@/app/hooks/useQuantity";
import { IProduct } from "@/app/types/products.type";
import { formatPriceToBRL } from "@/app/utils/price-format.utils";

import styles from "./modal-product.module.scss";

interface IModalProduct {
  product: IProduct;
}

export const ModalProduct = ({ product}: IModalProduct): JSX.Element => {
  const { quantity, increaseQuantity, decreaseQuantity } = useQuantity(1);

  return(
    <div className={styles.modalProductContent}>
      <div className={styles.imageColumn}>
        <img src={product.photo} alt={product.productName} />
      </div>
      <div className={styles.textColumn}>
        <h2>{product.productName}</h2>
        <p>R$ {formatPriceToBRL(product.price)}</p>
        <small>{product.descriptionShort}</small>
        <br />
        <a>Veja mais detalhes do produto &gt;</a>
        <div className={styles.buttonsModal}>
          <div className={styles.quantityButtons}>
            <Button variant="quantity" onClick={decreaseQuantity}>
              <Icon type="Minus" />
            </Button>
            <span>{quantity}</span>
            <Button variant="quantity" onClick={increaseQuantity}>
              <Icon type="Plus" />
            </Button>
          </div>

          <Button variant="yellow">
              COMPRAR
          </Button>
        </div>
      </div>
    </div>
  );
};
