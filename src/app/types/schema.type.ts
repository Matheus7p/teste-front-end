export interface IGraph {
  "@context": string;
  "@graph": Array<IWebSite | IOrganization | ICollectionPage>;
}

export interface IWebSite {
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  description: string;
  inLanguage: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    query: string;
  };
  publisher?: {
    "@id": string;
  };
}

export interface IOrganization {
  "@type": "Organization";
  "@id": string;
  name: string;
  url: string;
  logo: {
    "@type": "ImageObject";
    url: string;
    width: string;
    height: string;
  };
}

export interface ICollectionPage {
  "@type": "CollectionPage";
  "@id": string;
  name: string;
  description: string;
  url: string;
  isPartOf: {
    "@id": string;
  };
  about?: {
    "@type": string;
    name: string;
    description: string;
  };
}
