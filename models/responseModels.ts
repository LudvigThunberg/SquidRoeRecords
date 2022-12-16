export interface ContactLinkObject {
  attributes: {
    email?: string;
    contactLink?: string;
    iconUrl: string;
    title: string;
  }
  id: number;
}

export interface ContactLinkResponse {
  data: ContactLinkObject[];
}
