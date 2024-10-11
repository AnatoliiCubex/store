import { ProductService } from "~/api/services/product.service";

export const useProductsViewLogic = async () => {
  const products = await ProductService.getProducts();

  return { data: { products }, state: {}, setState: {}, handlers: {} };
};
