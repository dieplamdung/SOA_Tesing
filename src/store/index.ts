import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { GlobalState } from "./types";
import { createAppState } from "./store";

export const useGlobalStore = create<GlobalState>()(
  devtools(
    persist(
        (set, get, store) => ({
            ...createAppState(set, get, store),
          }),
      {
        name: "global-storage",
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) => !["loadingLang"].includes(key)
            )
          ),
      }
    )
  )
);