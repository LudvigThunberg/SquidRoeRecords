import { useRecoilValue } from "recoil";
import { navIsOpen } from "../atoms/navIsOpen";
import { Header } from "../components/basic/Header";
import { ContentContainer } from "../components/styledComponents/ContentContainer";
import { getPlaylists, getSoc } from "../services/requestService";
import Error from "next/error";
import { ContactLinkResponse, PlaylistModel } from "../models/responseModels";
import { Heading } from "../components/styledComponents/Heading";
import { SocialsLinks } from "../components/basic/SocialsLinks";
import { AllPlaylists } from "../components/basic/AllPlaylists";

interface PlaylistsProps {
  errorCode: number;
  links: ContactLinkResponse;
  playlists: PlaylistModel[];
}

export default function Playlists({
  errorCode,
  links,
  playlists,
}: PlaylistsProps) {
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
          paddingTop: "20px",
          "@bp2": { fontSize: "30px", paddingTop: "40px" },
          "@bp3": {
            fontSize: "70px",
          },
        }}
      >
        PLAYLISTS
      </Heading>
      <AllPlaylists playlists={playlists} />
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
      getPlaylists(
        process.env.NEXT_PUBLIC_BASE_URL as string,
        process.env.NEXT_PUBLIC_API_KEY as string
      ),
    ]);

    const [links, playlistsUnsorted] = await res;

    const playlists = playlistsUnsorted.data.sort(
      (a, b) => a.attributes.order - b.attributes.order
    );

    return { props: { errorCode: NaN, links, playlists } };
  } catch (error: any) {
    if (error.response.status) {
      return { props: { errorCode: error.response.status } };
    }
    return { props: { errorCode: 500 } };
  }
}
