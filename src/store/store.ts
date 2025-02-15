import { StateCreator } from "zustand";
import { GlobalState } from "./types";

export const createAppState: StateCreator<GlobalState> = (set) => ({
  langData: null,
  loadingLang: false,
  lang: "en",
  setDataLang: (data) => set(() => ({ langData: data })),
  setLang: (lang) => set(() => ({ lang })),
  setLoadingLang: (value) => set(() => ({ loadingLang: value })),
});
