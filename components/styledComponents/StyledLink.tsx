import Link from "next/link";
import { styled } from "../../stitches.config";

export const StyledLink = styled(Link, {
  borderRadius: "50%",
  cursor: "pointer",
  background: "transparent",
  textDecoration: "none",
  fontSize: "27px",
  color: "$whiteGray",
  position: "relative",
  zIndex: "2",
  "@bp2": {
    fontSize: "18px",
  },
  variants: {
    type: {
      navLink: {
        "&:after": {
          content: "''",
          position: "absolute",
          background: "$whiteGray",
          height: "2px",
          width: "0",
          left: "0",
          bottom: "-3px",
          borderRadius: "5px",
          transition: "0.3s",
        },
        "&:hover:after": {
          width: "100%",
        },
      },
    },
  },
});
