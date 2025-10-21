"use server";

import { IProduct } from "@/app/types/products.type";

interface IApiResponse {
  success: boolean;
  products: IProduct[];
}

interface IGetProductResponse {
  products: IProduct[];
  error: string | null;
}

export async function getProduct (): Promise<IGetProductResponse> {
  try{
    const response = await fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json");
    if(!response.ok) throw new Error(`Erro de HTTP: Status ${response.status}`);
      
    const data: IApiResponse = await response.json();
    return {products: data.products, error : null};
    
  } catch (error) {
    console.log(error);
    return {
      products: [], 
      error: "Não foi possível carregar os produtos.", 
    };
  }
}
