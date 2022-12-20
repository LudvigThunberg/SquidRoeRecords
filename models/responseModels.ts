export interface ContactLinkObject {
  attributes: {
    email?: string;
    contactLink?: string;
    iconUrl: string;
    title: string;
  };
  id: number;
}

export interface ContactLinkResponse {
  data: ContactLinkObject[];
}

export interface AlbumModel {
  attributes: {
    applemusicLink?: string;
    artist: string;
    bandcampLink?: string;
    beatportLink?: string;
    deezerLink?: string;
    coverLink: string;
    releaseDate: string;
    bandcampEmbed: string;
    soundcloudLink: string;
    spotifyLink?: string;
    title: string;
    traxsourceLink?: string;
  };
  id: number;
}

export interface AlbumModelResponse {
  data: AlbumModel[];
}

export interface IconModel {
  attributes: {
    name: string;
    imageUrl: string;
  };
}

export interface IconModelResponse {
  data: IconModel[];
}
