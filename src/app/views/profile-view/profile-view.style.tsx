export const useProfileViewStyle = () => {
  const container = [
    "flex",
    "justify-center",
    "items-center",
    "px-10",
    "py-10",
    "w-full",
  ].join(" ");

  const card = [
    "bg-purple-500/60",
    "backdrop-blur-sm",
    "border-none",
    "w-full",
    "max-w-[1000px]",
    "text-white",
  ].join(" ");

  const cardContent = ["flex", "flex-col", "gap-7", "p-7"].join(" ");

  const mainImageContainer = [
    "relative",
    "mb-2",
    "sm:w-[150px]",
    "sm:h-[150px]",
    "w-[100px]",
    "h-[100px]",
  ].join(" ");

  const mainImage = ["rounded-lg", "object-fill"].join(" ");

  const userInfoContainer = [
    "flex",
    "flex-col",
    "gap-2",
    "[&>*:first-child]:text-2xl",
    "[&>*:nth-child(2)]:text-xl",
  ].join(" ");

  return {
    container,
    card,
    cardContent,
    mainImageContainer,
    mainImage,
    userInfoContainer,
  };
};
