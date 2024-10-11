import { ProductService } from "~/api/services/product.service";

export const useProductViewLogic = async (id: number) => {
  const product = await ProductService.getProduct(id);

  return { data: { product }, state: {}, setState: {}, handlers: {} };
};
