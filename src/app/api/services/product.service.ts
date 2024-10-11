import { api } from "~/api";

import type { Product } from "~/basics/types/product.type";

export const ProductService = {
  getProducts: async (): Promise<Product[]> => {
    return (await api.get("/products")).data;
  },

  getProduct: async (id: number) => {
    return (await api.get(`/products/${id}`)).data;
  },
};
