export const useProductsViewStyle = () => {
  const container = [
    "gap-4",
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "lg:grid-cols-4",
    "p-8",
    "sm:p-10",
    "pb-20",
    "min-h-screen",
  ].join(" ");

  return {
    container,
  };
};
