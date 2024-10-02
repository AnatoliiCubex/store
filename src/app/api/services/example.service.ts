import { api } from "~/app/api";

export const ExampleService = {
  getExample: async () => {
    return (await api.get("/products")).data;
  },
};
