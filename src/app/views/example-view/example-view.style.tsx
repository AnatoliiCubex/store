export const useExampleViewStyle = () => {
  const container = [
    "gap-4",
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-3",
    "lg:grid-cols-4",
    // "sm:pl-52",
    "p-8",
    "sm:p-10",
    "pb-20",
    "min-h-screen",
  ].join(" ");

  const card = [
    "flex",
    "flex-col",
    "items-center",
    "gap-7",
    "p-4",
    "text-center",
  ].join(" ");

  const cardFooter = [
    "flex",
    "justify-end",
    "items-center",
    "gap-4",
    "mt-auto",
    "p-0",
    "w-full",
    "font-bold",
  ].join(" ");

  return {
    container,
    card,
    cardFooter,
  };
};
