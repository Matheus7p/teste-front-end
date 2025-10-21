import { Metadata } from "next";
import { ReactNode } from "react";

import Home from "@/app/(routes)/page";
import { getProductById } from "@/app/actions/product.actions";


async function generateMetadata ({ params}: { params: { id: string}}): Promise<Metadata> {
  const product = await getProductById(params.id);

  if(!product) return {};
  
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

export { generateMetadata };

export default function ProductModalLayout ({ children }: Readonly<{ children: React.ReactNode }>): ReactNode {
  return (
    <>
      <Home />
      {children}
    </>
  );
}
