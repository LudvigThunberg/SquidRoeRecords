import { useRecoilValue } from "recoil";
import { navIsOpen } from "../atoms/navIsOpen";
import { Albums } from "../components/basic/Albums";
import { Header } from "../components/basic/Header";
import { SocialsLinks } from "../components/basic/SocialsLinks";
import { StaticBackgroundContainer } from "../components/basic/StaticBackgroundContainer";
import { ContentContainer } from "../components/styledComponents/ContentContainer";
import { Heading } from "../components/styledComponents/Heading";
import {
  AlbumModelResponse,
  ContactLinkResponse,
  IconModelResponse,
} from "../models/responseModels";
import { getIcons, getReleases, getSoc } from "../services/landingService";

interface HomeProps {
  links: ContactLinkResponse;
  releases: AlbumModelResponse;
  icons: IconModelResponse;
}

export default function Releases({ links, releases, icons }: HomeProps) {
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
        RELEASES
      </Heading>
      <Albums releases={releases} icons={icons} />
      <SocialsLinks data={links} />
    </ContentContainer>
  );
}

export async function getServerSideProps() {
  const links = await getSoc(
    process.env.NEXT_PUBLIC_BASE_URL as string,
    process.env.NEXT_PUBLIC_API_KEY as string
  );

  const releases = await getReleases(
    process.env.NEXT_PUBLIC_BASE_URL as string,
    process.env.NEXT_PUBLIC_API_KEY as string
  );

  const icons = await getIcons(
    process.env.NEXT_PUBLIC_BASE_URL as string,
    process.env.NEXT_PUBLIC_API_KEY as string
  );

  return { props: { links, releases, icons } };
}
