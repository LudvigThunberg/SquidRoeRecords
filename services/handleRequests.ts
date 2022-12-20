import axios from "axios";

export const get = async <T>(url: string, apiKey: string) => {
  const res = await axios.get(url, { headers: { Authorization: apiKey } });
  return res.data as T;
};
