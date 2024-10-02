export type ExampleType = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export type ApiResponse<T> = {
  data: T[];
};
