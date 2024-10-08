import { api } from "~/api";

export const ProductService = {
  getProducts: async () => {
    return (await api.get("/products")).data;
  },
};
