import React from "react";
import { useRecoilValue } from "recoil";
import { navIsOpen } from "../atoms/navIsOpen";
import { Header } from "../components/basic/Header";
import { SocialsLinks } from "../components/basic/SocialsLinks";
import { ContentContainer } from "../components/styledComponents/ContentContainer";
import { Heading } from "../components/styledComponents/Heading";
import { ContactLinkResponse } from "../models/responseModels";
import { getSoc } from "../services/requestService";
import Error from "next/error";

interface HomeProps {
  res: ContactLinkResponse;
  errorCode: number;
}

export default function Home({ errorCode, res }: HomeProps) {
  const isOpen = useRecoilValue(navIsOpen);
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

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
  try {
    const res = await getSoc(
      process.env.NEXT_PUBLIC_BASE_URL as string,
      process.env.NEXT_PUBLIC_API_KEY as string
    );
    return { props: { errorCode: NaN, res } };
  } catch (error: any) {
    if (error.response.status) {
      return { props: { errorCode: error.response.status } };
    }
    return { props: { errorCode: 500 } };
  }
}
