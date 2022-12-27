import { useRecoilValue } from "recoil";
import { navIsOpen } from "../atoms/navIsOpen";
import { Header } from "../components/basic/Header";
import { SocialsLinks } from "../components/basic/SocialsLinks";
import { ContentContainer } from "../components/styledComponents/ContentContainer";
import { Heading } from "../components/styledComponents/Heading";
import { AboutModel, ContactLinkResponse } from "../models/responseModels";
import { getAboutContent, getSoc } from "../services/requestService";
import Error from "next/error";
import { AboutSection } from "../components/basic/AboutSection";
import { Box } from "../components/styledComponents/Box";

interface AboutProps {
  links: ContactLinkResponse;
  about: AboutModel[];
  errorCode: number;
}

export default function About({ links, errorCode, about }: AboutProps) {
  const isOpen = useRecoilValue(navIsOpen);
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  console.log("links: ", about);

  const abouts = about.map((aboutSection) => {
    return (
      <Box css={{}} key={aboutSection.id}>
        <AboutSection aboutSection={aboutSection} />
      </Box>
    );
  });

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
        ABOUT
      </Heading>
      <Box
        variant="contentContainer"
        css={{
          display: "grid",
          gridGap: "10px",
          gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
          gridAutoFlow: "column",
          margin: "30px 0px 80px 00px",
          "@bp2": {
            maxWidth: "600px",
            gridTemplateRows: "1fr 1fr 1fr",
            gridTemplateColumns: "auto",
          },
          "@bp3": {
            maxWidth: "1000px",
            gridTemplateRows: "1fr 1fr",
            gridTemplateColumns: "auto",
          },
        }}
        isOpen={isOpen}
      >
        {abouts}
      </Box>
      <SocialsLinks data={links} />
    </ContentContainer>
  );
}

export async function getServerSideProps() {
  try {
    const res = Promise.all([
      getSoc(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string
      ),

      getAboutContent(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string
      ),
    ]);

    const [links, aboutUnsorted] = await res;

    const about = aboutUnsorted.data.sort(
      (a, b) => a.attributes.order - b.attributes.order
    );

    return { props: { errorCode: NaN, links, about } };
  } catch (error: any) {
    if (error.response.status) {
      return { props: { errorCode: error.response.status } };
    }
    return { props: { errorCode: 500 } };
  }
}
