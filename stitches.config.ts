import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      whiteGray: "#DEDEDE", //"#FCE205"
      black: "#000000",
      gray: "#666666",
      transparentGray: "rgba(102, 102, 102, 0.7)",
      solidGray: "#2F2F2F",
    },
  },
  media: {
    bp1: "(min-width: 400px)",
    bp2: "(min-width: 750px)",
    bp3: "(min-width: 1200px)",
  },
  utils: {},
});
