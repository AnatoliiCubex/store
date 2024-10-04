import { nextApiRoute } from "~/app/api";

import type { Product } from "~/app/basics/types/product.type";

export const useHomeViewLogic = async () => {
  const products = (await nextApiRoute.get<Product[]>("")).data;

  return { data: { products }, state: {}, setState: {}, handlers: {} };
};
