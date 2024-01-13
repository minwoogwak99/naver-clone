import classNames from "classnames/bind";
import styles from "./headerMobile.module.scss";
const cx = classNames.bind(styles);

import React, { useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaAmazonPay } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { LuBadgeInfo } from "react-icons/lu";
import naverLogo from "@/assets/naver_logo.png";
import Image from "next/image";
import { useSearchHistory } from "@/util/zustand/store";
import { SlMagnifier } from "react-icons/sl";
import { useRouter } from "next/navigation";
import SearchFull from "./SearchFull";

const HeaderMobile = () => {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [isShowSearchFull, setIsShowSearchFull] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // ZUSTAND
  const addSearchHistory = useSearchHistory((state) => state.addSearchHistory);
  const deleteAllHistory = useSearchHistory((state) => state.deleteAllHistory);
  const deleteOneHistory = useSearchHistory((state) => state.deleteOneHistory);
  const setAutoSave = useSearchHistory((state) => state.setAutoSave);
  const searchHistories = useSearchHistory((state) => state.searchHistories);
  const autoSave = useSearchHistory((state) => state.autoSave);

  const handleSearchInputChange = () => {
    setInput(inputRef.current?.value!);
  };

  const handleSearch = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    gotoSearchPage();
  };

  const gotoSearchPage = () => {
    if (autoSave) addSearchHistory(input);
    router.push(`https://search.naver.com/search.naver?query=${input}`);
    setInput("");
  };

  const handleAutoSave = () => {
    if (autoSave && confirm("최근검색어 저장 기능을 사용 중지하시겠습니까?")) {
      setAutoSave(false);
      deleteAllHistory();
    } else if (
      !autoSave &&
      confirm("최근검색어 저장 기능을 사용 하시겠습니까?")
    ) {
      setAutoSave(true);
    }
  };

  return (
    <div>
      <div className={cx("top-button-area")}>
        <CiMenuBurger />
        <FaAmazonPay />
        <span style={{ flex: 1 }} />
        <MdOutlineMessage />
        <LuBadgeInfo />
      </div>
      <div className={cx("search-area-wrap")}>
        <div
          className={cx("search-area")}
          onClick={() => {
            setIsShowSearchFull(true);
          }}
        >
          <div className={cx("search-area-img")}>
            <Image src={naverLogo} alt="naver logo" width={25} height={25} />
          </div>
          <input
            type="text"
            className={cx("search-area-input")}
            placeholder="검색어를 입력하세요"
            value={""}
          />
          <SlMagnifier className={cx("search-button")} onClick={handleSearch} />
        </div>
        <div className={cx("icon-grid-wrap")}>
          <div className={cx("icon-grid")}>
            <CiMenuBurger />
            <FaAmazonPay />
            <MdOutlineMessage />
            <LuBadgeInfo />
            <LuBadgeInfo />
            <LuBadgeInfo />
            <LuBadgeInfo />
            <LuBadgeInfo />
          </div>
        </div>
      </div>
      {isShowSearchFull && (
        <SearchFull setIsShowSearchFull={setIsShowSearchFull} />
      )}
    </div>
  );
};

export default HeaderMobile;
