export const useHomeViewStyle = () => {
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
    "gap-2",
    "p-4",
    "pt-8",
    "relative",
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

  const imageContainer = ["relative", "w-full", "h-40"].join(" ");

  return {
    container,
    card,
    cardFooter,
    productCategory,
    imageContainer,
  };
};
