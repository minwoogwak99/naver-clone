//HISTORY RELATED
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

//M MODAL RELATED
export type ModalState = {
  searchModal: boolean;
};

export type ModalAction = {
  setSearchModal: (bool: boolean) => void;
};

// SWIPER INDEX
export type SwiperState = {
  swiperCurrentIdx: number;
};

export type SwiperAction = {
  setSwierCurrentIdx: (idx: number) => void;
};
