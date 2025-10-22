import { IGraph, IWebSite, IOrganization, ICollectionPage } from "@/app/types/schema.type";

export const generateHomeJsonLDSchema = (): IGraph => {
  const websiteUrl = "https://teste-front-end-xi.vercel.app/";
  const logoUrl = `${websiteUrl}/images/Logo.SVG`;

  const websiteSchema: IWebSite = {
    "@type": "WebSite",
    "@id": `${websiteUrl}/#website`,
    url: websiteUrl,
    name: "Econverse",
    description: "Ofertas imperdíveis em iPhones na Econverse. Confira nossa ampla gama de categorias, como Iphones entre outros.",
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${websiteUrl}/search?q={search_term_string}`,
      query: "required name=search_term_string",
    },
    publisher: {
      "@id": `${websiteUrl}/#organization`,
    },
  };

  const orgSchema: IOrganization = {
    "@type": "Organization",
    "@id": `${websiteUrl}/#organization`,
    name: "Econverse",
    url: websiteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: "200",
      height: "200",
    },
  };

  const collectionPageSchema: ICollectionPage = {
    "@type": "CollectionPage",
    "@id": `${websiteUrl}/#homepage`,
    name: "Econverse - Ofertas em iPhones e Smartphones",
    description: "Navegue e compre milhares de produtos. Descubra novos lançamentos, produtos em promoção e ofertas especiais.",
    url: websiteUrl,
    isPartOf: {
      "@id": `${websiteUrl}/#website`,
    },
    about: {
      "@type": "Thing",
      name: "Smartphones e Eletrônicos",
      description: "Loja online de iPhones, celulares, smartphones e eletrônicos com as melhores ofertas",
    },
  };

  const graphSchema: IGraph = {
    "@context": "https://schema.org",
    "@graph": [websiteSchema, orgSchema, collectionPageSchema],
  };

  return graphSchema;
};
