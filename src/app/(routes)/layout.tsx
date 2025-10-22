import type { Metadata } from "next";

import "@/app/sass/style.scss";
import { Poppins, Outfit, Work_Sans } from "next/font/google";
import Script from "next/script";
import { ReactElement } from "react";

import { Header } from "@/app/components/header/header.component";
import { generateHomeJsonLDSchema } from "@/app/lib/json-ld/home-schema";

const poppins = Poppins({
  subsets: ["latin"],
  weight : ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight : ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight : ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Econverse",
  applicationName: "Econverse",
  keywords: ["iphones", "celulares", "smartphones", "econverse", "ofertas"],
  description: "Ofertas imperdíveis em iPhones na Econverse. Confira nossa ampla gama de categorias, como Iphones entre outros.",
  openGraph: {
    siteName: "Econverse",
    images: { url: "/images/og-img.jpg" },
  },
  twitter: {
    card: "summary",
    images: { url: "/images/og-img.jpg" },
  },

};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  const jsonLd = generateHomeJsonLDSchema();
  
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable} ${workSans.variable}`}>
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
