import { IProduct } from "@/app/types/products.type";
import { slugify } from "@/app/utils/slugify.util";

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

export async function getProductById (id: string): Promise<IProduct | undefined> {
  try {
    const response = await fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json");

    if(!response.ok) throw new Error(`Erro de HTTP: Status ${response.status}`);

    const data: IApiResponse = await response.json();
    const allProducts: IProduct[] = data.products;

    return allProducts.find((p) => slugify(p.productName) === id);
  } catch (error) {
    console.error("Falha ao buscar produto por id:", error);
    return undefined;
  }
}
