import React from "react";
import { useRecoilValue } from "recoil";
import { navIsOpen } from "../atoms/navIsOpen";
import { Header } from "../components/basic/Header";
import { SocialsLinks } from "../components/basic/SocialsLinks";
import { StaticBackgroundContainer } from "../components/basic/StaticBackgroundContainer";
import { ContentContainer } from "../components/styledComponents/ContentContainer";
import { Heading } from "../components/styledComponents/Heading";

export default function Home() {
  const isOpen = useRecoilValue(navIsOpen);
  return (
    <StaticBackgroundContainer>
      <Header />
      <ContentContainer isOpen={isOpen}>
        <Heading css={{
          paddingTop: "calc(50vh - 220px)",
          '@bp2': { fontSize: "50px" },
          '@bp3': {
            fontSize: "100px",
          },
        }}
        >
          SQUID ROE RECORDS
        </Heading>
        <SocialsLinks />
      </ContentContainer>
    </StaticBackgroundContainer>
  );
}
