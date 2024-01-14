import { create } from "zustand";
import { HistoryAction, HistoryState, ModalState, ModalAction } from "./type";
import { createJSONStorage, persist } from "zustand/middleware";

export const useModal = create<ModalState & ModalAction>()((set) => ({
  searchModal: false,
  setSearchModal: (bool) => set(() => ({ searchModal: bool })),
}));

export const useSearchHistory = create<HistoryState & HistoryAction>()(
  persist(
    (set, get) => ({
      searchHistories: [],
      autoSave: true,
      addSearchHistory: (searchInput) =>
        set(() => ({
          searchHistories: [
            { keyword: searchInput, searchedDate: new Date() },
            ...get().searchHistories,
          ],
        })),
      deleteAllHistory: () =>
        set(() => {
          localStorage.setItem("search_history", "[]");
          return {
            searchHistories: [],
          };
        }),
      deleteOneHistory: (idx) =>
        set(() => {
          return {
            searchHistories: get().searchHistories.filter((_, i) => i !== idx),
          };
        }),
      setAutoSave: (
        bool: boolean // Changed here
      ) =>
        set(() => {
          return { autoSave: bool };
        }),
    }),
    {
      name: "search_history",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
