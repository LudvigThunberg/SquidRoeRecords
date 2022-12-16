import { styled } from "../../stitches.config";

export const InvisibleButton = styled("button", {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  marginLeft: "auto",
  marginRight: "40px",
  zIndex: "2",
  variants: {
    hamburger: {
      menu: {
        '@bp2': {
          display: "none",
        },
      },
    },
  },
});
