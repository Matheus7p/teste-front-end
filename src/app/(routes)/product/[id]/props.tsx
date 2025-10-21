export type ProductPageProps = {
  params: Promise<{ id: string }>;
}

export type ProductLayoutProps = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}
