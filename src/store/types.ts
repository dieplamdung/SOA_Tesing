import { DataLang } from "../api";

export type Lang = "en" | "fr";

export interface GlobalState {
  langData: DataLang | null;
  loadingLang: boolean;
  lang: Lang;
  setDataLang: (data: DataLang) => void;
  setLang: (lang: Lang) => void;
  setLoadingLang: (value: boolean) => void;
}
