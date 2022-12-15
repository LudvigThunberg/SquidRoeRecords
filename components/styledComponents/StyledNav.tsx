import { styled } from "../../stitches.config";

export const StyledNav = styled("nav", {
  width: "100%",
  height: "100vh",
  position: "absolute",
  top: "0",
  right: "-100%",
  background: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "right 0.5s ease-in-out",
  '@bp2': {
    position: "unset",
  },
  variants: {
    isOpen: {
      true: {
        right: "0",
      },
      false: {
        right: "-100vw",
      },
    },
  },
});
