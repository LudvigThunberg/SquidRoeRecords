import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { navIsOpen } from "../../atoms/navIsOpen";
import { ContactLinkObject } from "../../models/responseModels";
import { Box } from "../styledComponents/Box";
import { SocialMediaLink } from "./SocialMediaLink";

interface SocialLinksProps {
  data: { data: ContactLinkObject[] };
  onContact?: boolean;
}

export const SocialsLinks = ({ data, onContact }: SocialLinksProps) => {
  const isOpen = useRecoilValue(navIsOpen);

  const router = useRouter();
  /* const [onContact, setOnContact] = useState(false);

  useEffect(() => {
    if (router.pathname === "/contact" && onContact === false) {
      setOnContact(true);
    }
  }, []); */

  const socialLinks = data.data.map((link) => {
    return <SocialMediaLink key={link.id} link={link} onContact={onContact} />;
  });
  return (
    <Box
      isOnContact={onContact}
      isOpen={isOpen}
      css={{
        display: "flex",
        gap: "10px",
        background: "transparent",
        "@bp2": {
          gap: "20px",
        },
      }}
    >
      {socialLinks}
    </Box>
  );
};
