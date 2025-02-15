import { axiosClient } from "..";
import { LangResponse } from "./types";

export const getLang = (lang: string): Promise<LangResponse> => {
  return axiosClient({
    method: "GET",
    url: `/v1/pages`,
    params: { lang },
  });
};
