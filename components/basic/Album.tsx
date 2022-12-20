import { pairLinkAndIcons } from "../../helpers/linkIconPairingHelper";
import { IconLinkModel } from "../../models/helperModels";
import { AlbumModel, IconModelResponse } from "../../models/responseModels";
import { Box } from "../styledComponents/Box";
import { Heading } from "../styledComponents/Heading";
import { Img } from "../styledComponents/Img";
import { StyledALink } from "../styledComponents/StyledALink";

interface AlbumProps {
  album: AlbumModel;
  icons: IconModelResponse;
}

export const Album = ({ album, icons }: AlbumProps) => {
  const { artist, coverLink, releaseDate, bandcampEmbed, title } =
    album.attributes;

  const allIconLinks: IconLinkModel[] = [];

  icons.data.forEach((icon) => {
    const iconLink = pairLinkAndIcons(icon, album);
    if (iconLink) {
      allIconLinks.push(iconLink);
    }
  });

  const iconLinks = allIconLinks.map((iconLink, index) => {
    return (
      <StyledALink
        key={index}
        target="_blank"
        href={iconLink.link}
        css={{ background: "transparent", width: "30px" }}
      >
        <Img src={iconLink.icon} alt={iconLink.name} />
      </StyledALink>
    );
  });

  return (
    <Box
      css={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderRadius: "3px",
        background: "$solidGray",
        maxWidth: "320px",
        "@bp2": {
          flexDirection: "row",
          flexWrap: "wrap",
        },
      }}
    >
      <Box css={{ paddingBottom: "10px" }}>
        <Heading as="h3" css={{ fontSize: "11px" }}>
          {artist} - {title}
        </Heading>
      </Box>
      <Box
        css={{
          maxWidth: "320px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "124px 124px",
          "@bp3": {
            maxWidth: "800px",
          },
        }}
      >
        <Box
          css={{
            minWidth: "80px",
            maxWidth: "124px",
            gridColumn: "1 span 1",
            gridRow: "1",
            justifySelf: "end",
          }}
        >
          <Img css={{ borderRadius: "2px" }} src={coverLink} />
        </Box>
        <Box
          css={{
            gridColumn: "2 span 1",
            gridRow: "1",
            maxHeight: "124",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifySelf: "start",
          }}
        >
          {iconLinks}
        </Box>
        <Box
          css={{
            gridRow: "2",
            gridColumnStart: "1",
            gridColumnEnd: "3",
            justifySelf: "center",
            "@bp1": {},
          }}
        >
          <Box
            css={{
              gridColumn: "1 3",
              maxWidth: "399px",
              minWidth: "250px",
            }}
            dangerouslySetInnerHTML={{ __html: bandcampEmbed }}
          />
        </Box>
      </Box>
    </Box>
  );
};
