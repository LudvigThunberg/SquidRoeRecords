import Image from "next/image";
import React from "react";
import { StyledHeader } from "../styledComponents/StyledHeader";
import { StyledLink } from "../styledComponents/StyledLink";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink href="/">
        <Image src="/assets/SquidRoeLogo.png" alt="Squid Roe Records Logo" width={70} height={70} style={{ borderRadius: "50%" }} />
      </StyledLink>
    </StyledHeader>
  );
};
