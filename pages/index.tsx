import React from "react";
import { useRecoilValue } from "recoil";
import { navIsOpen } from "../atoms/navIsOpen";
import { Header } from "../components/basic/Header";
import { SocialsLinks } from "../components/basic/SocialsLinks";
import { StaticBackgroundContainer } from "../components/basic/StaticBackgroundContainer";
import { ContentContainer } from "../components/styledComponents/ContentContainer";
import { Heading } from "../components/styledComponents/Heading";
import { ContactLinkResponse } from "../models/responseModels";
import { getSoc } from "../services/landingService";

interface HomeProps {
  res: ContactLinkResponse;
}

export default function Home({ res }: HomeProps) {
  const isOpen = useRecoilValue(navIsOpen);

  return (
    <ContentContainer isOpen={isOpen}>
      <Header />
      <Heading
        isOpen={isOpen}
        css={{
          "@bp2": { fontSize: "50px" },
          "@bp3": {
            fontSize: "100px",
          },
        }}
      >
        SQUID ROE RECORDS
      </Heading>
      <SocialsLinks data={res} />
    </ContentContainer>
  );
}

export async function getServerSideProps() {
  const res = await getSoc(
    process.env.NEXT_PUBLIC_BASE_URL as string,
    process.env.NEXT_PUBLIC_API_KEY as string
  );

  return { props: { res } };
}
