import { useRecoilValue } from "recoil";
import { navIsOpen } from "../atoms/navIsOpen";
import { Header } from "../components/basic/Header";
import { SocialsLinks } from "../components/basic/SocialsLinks";
import { StaticBackgroundContainer } from "../components/basic/StaticBackgroundContainer";
import { ContentContainer } from "../components/styledComponents/ContentContainer";
import { Heading } from "../components/styledComponents/Heading";
import { ContactLinkResponse } from "../models/responseModels";
import { getReleases, getSoc } from "../services/landingService";

interface HomeProps {
  res: ContactLinkResponse;
}

export default function Releases({ res, releases }: HomeProps) {
  const isOpen = useRecoilValue(navIsOpen);
  return (
    <StaticBackgroundContainer>
      <Header />
      <ContentContainer isOpen={isOpen}>
        <Heading css={{
          paddingTop: "20px",
          '@bp2': { fontSize: "30px", paddingTop: "40px" },
          '@bp3': {
            fontSize: "70px",
          },
        }}
        >
          RELEASES
        </Heading>
        <SocialsLinks data={res} />
      </ContentContainer>
    </StaticBackgroundContainer>
  );
}

export async function getServerSideProps() {
  const res = await getSoc(
    process.env.NEXT_PUBLIC_BASE_URL as string,
    process.env.NEXT_PUBLIC_API_KEY as string,
  );

  const releases = await getReleases(
    process.env.NEXT_PUBLIC_BASE_URL as string,
    process.env.NEXT_PUBLIC_API_KEY as string,
  );

  return { props: { res, releases } };
}
