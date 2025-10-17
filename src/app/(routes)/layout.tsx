import type { Metadata } from "next";

import { ReactElement } from "react";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
