export const formatPriceToBRL = (value: number): string => {
  return new Intl.NumberFormat("pt-BR").format(value);
};
