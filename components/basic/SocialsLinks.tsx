import { useRecoilValue } from "recoil";
import { navIsOpen } from "../../atoms/navIsOpen";
import { ContactLinkObject } from "../../models/responseModels";
import { Box } from "../styledComponents/Box";
import { SocialMediaLink } from "./SocialMediaLink";

interface SocialLinksProps {
  data: { data: ContactLinkObject[] };
}

export const SocialsLinks = ({ data }: SocialLinksProps) => {
  const isOpen = useRecoilValue(navIsOpen);
  const socialLinks = data.data.map((link) => {
    return <SocialMediaLink key={link.id} link={link} />;
  });
  return (
    <Box
      isOpen={isOpen}
      css={{
        display: "flex",
        gap: "10px",
        background: "transparent",
        paddingBottom: "80px",
        "@bp2": {
          paddingBottom: "200px",
          gap: "20px",
        },
      }}
    >
      {socialLinks}
    </Box>
  );
};
