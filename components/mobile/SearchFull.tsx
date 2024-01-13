import classNames from "classnames/bind";
import styles from "./searchFull.module.scss";
const cx = classNames.bind(styles);

import React from "react";

interface Props {
  setIsShowSearchFull: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchFull = ({ setIsShowSearchFull }: Props) => {
  return (
    <div className={cx("search-wrap")}>
      search full
      <button
        onClick={() => {
          setIsShowSearchFull(false);
        }}
      >
        close
      </button>
    </div>
  );
};

export default SearchFull;
