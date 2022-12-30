import router from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useRecoilValue } from "recoil";
import { navIsOpen } from "../atoms/navIsOpen";
import { EmailForm } from "../components/basic/EmailForm";
import { Header } from "../components/basic/Header";
import { SocialsLinks } from "../components/basic/SocialsLinks";
import { ContentContainer } from "../components/styledComponents/ContentContainer";
import { Heading } from "../components/styledComponents/Heading";
import { ContactLinkResponse } from "../models/responseModels";
import { getSoc } from "../services/requestService";

interface ContactProps {
  links: ContactLinkResponse;
}

export default function Contact({ links }: ContactProps) {
  const isOpen = useRecoilValue(navIsOpen);
  const [onIndex, setOnIndex] = useState(false);
  const [onContact, setOnContact] = useState(false);

  useEffect(() => {
    if (router.pathname === "/contact" && onIndex === false) {
      setOnIndex(true);
    }
    if (router.pathname === "/contact" && onContact === false) {
      setOnContact(true);
    }
  }, []);

  return (
    <ContentContainer isOnIndex={onIndex} isOpen={isOpen}>
      <Header />
      <Heading
        isOpen={isOpen}
        as="h2"
        css={{
          "@bp2": { fontSize: "30px" },
          "@bp3": {
            fontSize: "70px",
          },
        }}
      >
        CONTACT
      </Heading>

      <SocialsLinks onContact={onContact} data={links} />
      <EmailForm />
    </ContentContainer>
  );
}

export async function getServerSideProps() {
  try {
    const links = await getSoc(
      process.env.NEXT_PUBLIC_BASE_URL as string,
      process.env.NEXT_PUBLIC_API_KEY as string
    );
    return { props: { errorCode: NaN, links } };
  } catch (error: any) {
    if (error.response.status) {
      return { props: { errorCode: error.response.status } };
    }
    return { props: { errorCode: 500 } };
  }
}
