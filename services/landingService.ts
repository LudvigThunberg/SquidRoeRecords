import { ContactLinkResponse } from "../models/responseModels";
import { get } from "./handleRequests";

export const getSoc = async (baseUrl: string, apiKey: string) => {
  const res = await get<ContactLinkResponse>(`${baseUrl}contact-links`, apiKey);

  return res;
};

export const getReleases = async (baseUrl: string, apiKey: string) => {
  const res = await get(`${baseUrl}albums`, apiKey);
  return res;
};
