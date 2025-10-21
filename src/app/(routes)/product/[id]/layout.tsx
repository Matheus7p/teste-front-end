import { Metadata } from "next";
import { ReactNode } from "react";

import Home from "@/app/(routes)/page";
import { getProductById } from "@/app/actions/product.actions";

import { ProductLayoutProps } from "./props";

async function generateMetadata ({ params }: ProductLayoutProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) return {};

  return {
    title: `Econverse - ${product.productName}`,
    description: `${product.descriptionShort}`,
    openGraph: {
      siteName: `Econverse - ${product.productName}`,
      images: { url: `${product.photo}` },
      description: `${product.descriptionShort}`,
    },
  };
}

function ProductModalLayout ({ children }: Readonly<{ children: React.ReactNode }>): ReactNode {
  return (
    <>
      <Home />
      {children}
    </>
  );
}

export { generateMetadata };
export default ProductModalLayout;
