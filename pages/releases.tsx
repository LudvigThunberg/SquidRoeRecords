import { useRecoilState, useRecoilValue } from "recoil";
import { navIsOpen } from "../atoms/navIsOpen";
import { Albums } from "../components/basic/Albums";
import { Header } from "../components/basic/Header";
import { SocialsLinks } from "../components/basic/SocialsLinks";
import { ContentContainer } from "../components/styledComponents/ContentContainer";
import { Heading } from "../components/styledComponents/Heading";
import {
  AlbumModel,
  ContactLinkResponse,
  IconModelResponse,
} from "../models/responseModels";
import { getIcons, getReleases, getSoc } from "../services/requestService";
import Error from "next/error";

interface HomeProps {
  links: ContactLinkResponse;
  releases: AlbumModel[];
  icons: IconModelResponse;
  errorCode: number;
}

export default function Releases({
  errorCode,
  links,
  releases,
  icons,
}: HomeProps) {
  const isOpen = useRecoilValue(navIsOpen);
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <ContentContainer isOpen={isOpen}>
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
        RELEASES
      </Heading>
      <Albums releases={releases} icons={icons} />
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
      getReleases(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string
      ),
      getIcons(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string
      ),
    ]);

    const [links, releasesUnsorted, icons] = await res;

    const releases = releasesUnsorted.data.sort(
      (a, b) =>
        parseInt(b.attributes.releaseDate) - parseInt(a.attributes.releaseDate)
    );

    return { props: { errorCode: NaN, links, releases, icons } };
  } catch (error: any) {
    if (error.response.status) {
      return { props: { errorCode: error.response.status } };
    }
    return { props: { errorCode: 500 } };
  }
}
