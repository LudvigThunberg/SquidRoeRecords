import { styled } from "../../stitches.config";

export const Heading = styled("h1", {
  color: "$whiteGray",
  background: "transparent",
  transition: "opacity 0.5s ease-in-out",
  variants: {
    isOpen: {
      true: {
        opacity: "0",
      },
      false: {
        right: "1",
      },
    },
  },
});
