import { keyframes, styled } from "../../stitches.config";

const grow = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.05)" },
  "100%": { transform: "scale(1)" },
});

export const StyledALink = styled("a", {
  background: "transparent",
  transition: "all .2s ease-in-out",
  "&:hover": {
    animation: `${grow} 400ms linear`,
  },
});
