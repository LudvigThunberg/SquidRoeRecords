import Link from "next/link";
import { styled } from "../../stitches.config";

export const StyledLink = styled(Link, {
  borderRadius: "50%",
  cursor: "pointer",
  background: "transparent",
  paddingLeft: "40px",
  '@bp1': {

  },
});
