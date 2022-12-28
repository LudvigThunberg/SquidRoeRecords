import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ContactLinkObject } from "../../models/responseModels";
import { Box } from "../styledComponents/Box";
import { Img } from "../styledComponents/Img";
import { StyledALink } from "../styledComponents/StyledALink";
import { StyledContactPageLink } from "../styledComponents/StyledContactPageLink";

interface SocialMediaLinkProps {
  link: ContactLinkObject;
  onContact: boolean;
}

export const SocialMediaLink = ({ link, onContact }: SocialMediaLinkProps) => {
  const { contactLink, iconUrl, email } = link.attributes;

  return (
    <>
      {onContact && email ? (
        <StyledContactPageLink href={`mailto:${email}`}>
          <Img
            css={{
              width: "100%",
              borderRadius: "50%",
            }}
            src={iconUrl}
          />
        </StyledContactPageLink>
      ) : onContact && contactLink ? (
        <StyledContactPageLink href={contactLink} target="_blank">
          <Img
            css={{
              width: "100%",
              borderRadius: "50%",
            }}
            src={iconUrl}
          />
        </StyledContactPageLink>
      ) : (
        contactLink && (
          <StyledALink href={contactLink} target="_blank">
            <Img
              css={{
                width: "100%",
                borderRadius: "50%",
              }}
              src={iconUrl}
            />
          </StyledALink>
        )
      )}
    </>
  );
};
