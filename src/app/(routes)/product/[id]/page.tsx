import { notFound } from "next/navigation";
import { JSX } from "react";

import { getProductById } from "@/app/actions/product.actions";
import { ModalProduct } from "@/app/components/modal-product/modal-product.component";
import { Modal } from "@/app/components/ui/modal/modal.ui";

import { ProductPageProps } from "./props";

export default async function PageProductModal ({ params }: ProductPageProps): Promise<JSX.Element> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) notFound();

  return (
    <Modal>
      <ModalProduct product={product} />
    </Modal>
  );
}
