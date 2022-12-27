import { ContactLinkObject } from "../../models/responseModels";
import { Img } from "../styledComponents/Img";
import { StyledALink } from "../styledComponents/StyledALink";

interface SocialMediaLinkProps {
  link: ContactLinkObject;
}

export const SocialMediaLink = ({ link }: SocialMediaLinkProps) => {
  const { contactLink, iconUrl } = link.attributes;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {contactLink && (
        <StyledALink
          css={{
            background: "transparent",
            width: "35px",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: "1",
            transition: "box-shadow 0.5s ease",
            "&:hover": {},
            "@bp2": {
              width: "55px",
            },
          }}
          href={contactLink}
          target="_blank"
        >
          <Img
            css={{
              width: "100%",
              borderRadius: "50%",
            }}
            src={iconUrl}
          />
        </StyledALink>
      )}
    </>
  );
};
