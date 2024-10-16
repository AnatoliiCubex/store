export const useHeaderStyle = () => {
  const container =
    "top-0 right-0 left-0 z-50 fixed flex justify-between items-center border-white bg-transparent backdrop-blur-lg backdrop-filter p-4 border-b";

  const clickablesContainer = "flex items-center gap-5";

  const linkButton = "p-0 font-bold text-white";

  return {
    container,
    clickablesContainer,
    linkButton,
  };
};
