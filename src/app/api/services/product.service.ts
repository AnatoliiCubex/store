import { api } from "~/app/api";

export const ProductService = {
  getProducts: async () => {
    return (await api.get("/products")).data;
  },
};
