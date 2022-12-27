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
    variant: {
      contentContainer: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderRadius: "3px",
        background: "$solidGray",
        maxWidth: "320px",
        "@bp2": {
          maxWidth: "740px",
        },
      },
    },
  },
});
