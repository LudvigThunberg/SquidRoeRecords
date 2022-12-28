import { useRecoilValue, useSetRecoilState } from "recoil";
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

  return (
    <ContentContainer isOpen={isOpen}>
      <Header />
      <Heading
        isOpen={isOpen}
        as="h2"
        css={{
          paddingTop: "20px",
          "@bp2": { fontSize: "30px", paddingTop: "40px" },
          "@bp3": {
            fontSize: "70px",
          },
        }}
      >
        CONTACT
      </Heading>

      <SocialsLinks data={links} />
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
