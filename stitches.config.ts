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
      whiteGray: "#DEDEDE",
      black: "#000000",
    },
  },
  media: {
    bp1: "(min-width: 400px)",
    bp2: "(min-width: 750px)",
    bp3: "(min-width: 1200px)",
  },
  utils: {},
});
