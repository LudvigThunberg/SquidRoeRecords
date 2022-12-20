import { styled } from "../../stitches.config";

export const Box = styled("div", {
  background: "transparent",
  transition: "opacity 0.5s ease-in-out",
  variants: {
    isOpen: {
      true: {
        opacity: "0",
        overflowY: "hidden",
      },
      false: {
        right: "1",
      },
    },
  },
});
