import { notFound } from "next/navigation";
import { JSX } from "react";

import { getProductById } from "@/app/actions/product.actions";
import { ModalProduct } from "@/app/components/modal-product/modal-product.component";
import { Modal } from "@/app/components/ui/modal/modal.ui";

import { Props } from "./props";

export default async function PageProductModal ({ params }: Props): Promise<JSX.Element> {
  const product = await getProductById(params.id);
  if (!product) notFound();

  return (
    <Modal>
      <ModalProduct product={product} />
    </Modal>
  );
}
