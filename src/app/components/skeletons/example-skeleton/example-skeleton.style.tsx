import { SHIMMER_ANIMATION } from "~/app/basics/constants/example.constant";

export const useExampleSkeletonStyle = () => {
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

  const card = [
    SHIMMER_ANIMATION,
    "relative",
    "overflow-hidden",
    "flex",
    "flex-col",
    "items-center",
    "gap-8",
    "p-4",
    "rounded-md",
    "text-center",
    "shadow-sw",
    "bg-gray-100",
  ].join(" ");

  const title = "bg-gray-200 rounded-md w-full h-7";
  const description = "bg-gray-200 rounded-md w-full h-28";
  const price = "bg-gray-200 rounded-md w-28 h-8 self-end";

  return { container, card, title, description, price };
};
