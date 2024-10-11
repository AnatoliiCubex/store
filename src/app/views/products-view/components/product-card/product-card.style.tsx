export const useProductCardStyle = () => {
  const card = [
    "flex",
    "flex-col",
    "items-center",
    "gap-2",
    "p-4",
    "pt-8",
    "relative",
    "text-center",
    "hover:shadow-md",
    "hover:scale-105",
    "duration-300",
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

  const productCategory = [
    "top-2",
    "right-2",
    "absolute",
    "bg-white",
    "px-2",
    "py-1",
    "rounded-md",
    "text-sm",
  ].join(" ");

  const imageContainer = ["relative", "w-full", "h-40", "mt-5"].join(" ");

  const ratingContaner = ["flex", "items-center", "mb-2", "text-gray-400"].join(
    " "
  );

  return {
    card,
    cardFooter,
    productCategory,
    imageContainer,
    ratingContaner,
  };
};
