import { nextApiRoute } from "~/api";

import type { Product } from "~/basics/types/product.type";

export const useProductsViewLogic = async () => {
  const products = (await nextApiRoute.get<Product[]>("")).data;

  return { data: { products }, state: {}, setState: {}, handlers: {} };
};
