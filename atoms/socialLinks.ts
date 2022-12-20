import { atom } from "recoil";
import { ContactLinkObject } from "../models/responseModels";

export const socialLinks = atom({
  key: "socialLinks",
  default: [] as ContactLinkObject[],
});
