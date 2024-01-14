export type HistoryState = {
  searchHistories: { keyword: string; searchedDate: Date }[];
  autoSave: boolean;
};

export type HistoryAction = {
  addSearchHistory: (searchInput: string) => void;
  deleteAllHistory: () => void;
  deleteOneHistory: (idx: number) => void;
  setAutoSave: (bool: boolean) => void;
};

export type ModalState = {
  searchModal: boolean;
};

export type ModalAction = {
  setSearchModal: (bool: boolean) => void;
};
