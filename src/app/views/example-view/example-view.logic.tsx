import { nextApiRoute } from "~/app/api";

import type { ExampleType } from "~/app/basics/types/example.type";

export const useExampleViewLogic = async () => {
  const products = (await nextApiRoute.get<ExampleType[]>("")).data;

  return { data: { products }, state: {}, setState: {}, handlers: {} };
};
