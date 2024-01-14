import classNames from "classnames/bind";
import styles from "./headerMobile.module.scss";
const cx = classNames.bind(styles);

import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaAmazonPay } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { LuBadgeInfo } from "react-icons/lu";
import naverLogo from "@/assets/naver_logo.png";
import Image from "next/image";
import { useModal, useSearchHistory } from "@/util/zustand/store";
import { SlMagnifier } from "react-icons/sl";
import { useRouter } from "next/navigation";
import SearchFull from "./SearchFull";

const HeaderMobile = () => {
  // ZUSTAND
  const setSearchModal = useModal((state) => state.setSearchModal);

  return (
    <div className={cx("header-mobile-wrap")}>
      <div className={cx("top-button-area")}>
        <CiMenuBurger />
        <FaAmazonPay />
        <span style={{ flex: 1 }} />
        <MdOutlineMessage />
        <LuBadgeInfo />
      </div>
      <div
        className={cx("search-area-wrap")}
        onClick={() => setSearchModal(true)}
      >
        <div className={cx("search-area")}>
          <div className={cx("search-area-img")}>
            <Image src={naverLogo} alt="naver logo" width={25} height={25} />
          </div>
          <input
            type="text"
            className={cx("search-area-input")}
            placeholder="검색어를 입력하세요"
            value={""}
            readOnly
          />
          <SlMagnifier className={cx("search-button")} />
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
    </div>
  );
};

export default HeaderMobile;
