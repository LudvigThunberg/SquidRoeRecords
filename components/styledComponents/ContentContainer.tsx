import { styled } from "../../stitches.config";

export const ContentContainer = styled("div", {
  width: "100vw",
  height: "calc(100vh - 155px)",
  display: "flex",
  justifyContent: "center",
  background: "transparent",
  opacity: "1",
  transition: "opacity 0.3s ease-out",
  variants: {
    isOpen: {
      true: {
        opacity: "0",
      },
      false: {
        opacity: "1",
      },
    },
  },
});
