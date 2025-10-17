import type { Metadata } from "next";

import "@/app/sass/style.scss";
import { Poppins, Outfit, Work_Sans } from "next/font/google";
import { ReactElement } from "react";

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
  description: "Ofertas imperdíveis em iPhones na Econverse. Confira nossa ampla gama de categorias, como moda, fitness e bebidas.",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable} ${workSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
