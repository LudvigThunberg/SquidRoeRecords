import { useRecoilValue } from "recoil";
import { navIsOpen } from "../../atoms/navIsOpen";
import { PlaylistModel } from "../../models/responseModels";
import { Box } from "../styledComponents/Box";
import { Playlist } from "./Playlist";

interface AllPlaylistsProps {
  playlists: PlaylistModel[];
}
export const AllPlaylists = ({ playlists }: AllPlaylistsProps) => {
  const isOpen = useRecoilValue(navIsOpen);
  const allPlaylists = playlists.map((playlist) => {
    return <Playlist key={playlist.id} playlist={playlist} />;
  });

  return (
    <Box
      isOpen={isOpen}
      css={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Box
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "30px 0px 100px 0px",
          "@bp2": {
            maxWidth: "800px",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          },
        }}
      >
        {allPlaylists}
      </Box>
    </Box>
  );
};
