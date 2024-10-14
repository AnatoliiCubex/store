export const useProductViewStyle = () => {
  const container = [
    "flex",
    "justify-center",
    "items-center",
    "px-10",
    "xl:px-44",
    "py-10",
    "w-full",
  ].join(" ");

  const card = [
    "bg-purple-500/60",
    "backdrop-blur-sm",
    "border-none",
    "w-full",
    "text-white",
  ].join(" ");

  const cardContent = ["flex", "lg:flex-row", "flex-col", "gap-7", "p-7"].join(
    " "
  );

  const leftSide = [
    "flex",
    "flex-col",
    "lg:max-w-[450px]",
    "justify-center",
    "lg:justify-start",
    "lg:items-start",
    "items-center",
  ].join(" ");

  const mainImageContainer = [
    "relative",
    "mb-2",
    "sm:w-[450px]",
    "sm:h-[450px]",
    "w-[250px]",
    "h-[250px]",
  ].join(" ");

  const mainImage = ["rounded-lg", "object-fill"].join(" ");

  const imageThumbnails = ["w-[450px]", "gap-2", "hidden", "sm:flex"].join(" ");

  const singleThumbnailContainer = ["relative", "w-[160px]", "h-[120px]"].join(
    " "
  );

  const rightSide = ["flex", "flex-col", "gap-4", "grow"].join(" ");

  const cardTitle = ["text-2xl", "uppercase"].join(" ");

  const cardDescription = ["text-lg", "text-white"].join(" ");

  const ratingContainer = ["flex", "items-center"].join(" ");

  const starContainer = ["flex", "gap-1"].join(" ");

  const starIcon = (filled: boolean) =>
    `w-7 h-7 ${filled ? "text-yellow-300" : "text-gray-300"}`;

  const ratingText = ["ml-2", "text-xl"].join(" ");

  const priceContainer = ["flex", "items-center", "gap-4"].join(" ");

  const price = ["font-bold", "text-3xl", "text-yellow-300"].join(" ");

  const addToCartButton = ["w-fit", "text-black"].join(" ");

  const cartIcon = ["mr-2", "w-5", "h-5"].join(" ");

  return {
    container,
    card,
    cardContent,
    leftSide,
    mainImageContainer,
    mainImage,
    imageThumbnails,
    singleThumbnailContainer,
    rightSide,
    cardTitle,
    cardDescription,
    ratingContainer,
    starContainer,
    starIcon,
    ratingText,
    priceContainer,
    price,
    addToCartButton,
    cartIcon,
  };
};
