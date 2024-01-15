"use client";

import classNames from "classnames/bind";
import styles from "./header.module.scss";
const cx = classNames.bind(styles);

import React, { useEffect, useRef, useState } from "react";
import { FaAmazonPay } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { LuBadgeInfo } from "react-icons/lu";
import naverLogo from "@/assets/naver_logo.png";
import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { useSearchHistory } from "@/util/zustand/store";
import { IoMdClose } from "react-icons/io";
import OtherServices from "./otherServices/OtherServices";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const [searchPlaceholder, setSerchPlaceholder] = useState("");
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const [input, setInput] = useState("");
  const [isHanburgerOpen, setIsHanburgerOpen] = useState(false);

  const inputRef = useRef<HTMLDivElement>(null);
  const hambergerRef = useRef<HTMLButtonElement>(null);
  const inputTextRef = useRef<HTMLInputElement>(null);

  // ZUSTAND
  const addSearchHistory = useSearchHistory((state) => state.addSearchHistory);
  const deleteAllHistory = useSearchHistory((state) => state.deleteAllHistory);
  const deleteOneHistory = useSearchHistory((state) => state.deleteOneHistory);
  const setAutoSave = useSearchHistory((state) => state.setAutoSave);
  const searchHistories = useSearchHistory((state) => state.searchHistories);
  const autoSave = useSearchHistory((state) => state.autoSave);

  if (typeof window !== undefined) {
    var isTouchDevice = function () {
      return "ontouchstart" in window || "onmsgesturechange" in window;
    };
    var isDesktop = !isTouchDevice() ? true : false;

    !isDesktop && router.push("/mobile");
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsSearchFocus(false);
        setSerchPlaceholder("");
      }
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [inputRef]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        hambergerRef.current &&
        !hambergerRef.current.contains(e.target as Node)
      ) {
        setIsHanburgerOpen(false);
      }
    };
    window.addEventListener("mouseup", handleClick);
    return () => window.removeEventListener("mouseup", handleClick);
  }, [hambergerRef]);

  const onFocusHandler = () => {
    setSerchPlaceholder("검색어를 입력해 주세요.");
    setIsSearchFocus(true);
  };

  const handleSearchInputChange = () => {
    setInput(inputTextRef.current?.value!);
  };

  const handleSearch = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    gotoSearchPage();
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      gotoSearchPage();
    }
  };

  const gotoSearchPage = () => {
    if (autoSave) addSearchHistory(input);
    router.push(
      `https://search.naver.com/search.naver?query=${inputTextRef.current
        ?.value!}`
    );
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

  const handleHamburger = () => {
    setIsHanburgerOpen(true);
  };

  return (
    <header className={cx("header-wrap")}>
      <div className={cx("top-button-area")}>
        <button
          className={cx("menu-button")}
          onClick={handleHamburger}
          ref={hambergerRef}
        >
          <CiMenuBurger />
          {isHanburgerOpen && (
            <div className={cx("hambuger-modal")}>
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  backgroundColor: "#fff",
                  fontSize: "25px",
                  textAlign: "start",
                  padding: "20px",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                바로가기
              </div>
              <div className={cx("hamburger-content-wrap")}>
                <div>section2</div>
                <div>section3</div>
                <div>section3</div>
                <div>section3</div>
                <div>section3</div>
                <div>section3</div>
                <div>section3</div>
                <div>section3</div>
                <div>section3</div>
                <div>section3</div>
                <div>section3</div>
              </div>
            </div>
          )}
        </button>
        <button className={cx("pay-button")}>
          <FaAmazonPay />
        </button>
        <span style={{ flex: 1 }} />
        <button className={cx("message-button")}>
          <MdOutlineMessage />
        </button>
        <button className={cx("alarm-button")}>
          <LuBadgeInfo />
        </button>
        <Link
          href="/mobile"
          style={{
            position: "sticky",
            bottom: 0,
            right: 0,
            height: "40px",
            width: "60px",
            borderRadius: "10px",
            backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            color: "white",
          }}
        >
          모바일
        </Link>
      </div>

      <div className={cx({ "search-area-wrap": isSearchFocus })} ref={inputRef}>
        <div
          className={cx(isSearchFocus ? "search-area-focus" : "search-area")}
        >
          <div className={cx("search-area-img")}>
            <Image
              src={naverLogo}
              alt="naver logo"
              width={30}
              height={30}
              style={{ marginLeft: "8px" }}
            />
          </div>
          <input
            type="text"
            className={cx("search-area-input")}
            placeholder={searchPlaceholder}
            value={input}
            ref={inputTextRef}
            onFocus={onFocusHandler}
            onChange={handleSearchInputChange}
            onKeyDown={handlePressEnter}
          />
          <SlMagnifier className={cx("search-button")} onClick={handleSearch} />
        </div>
        {isSearchFocus && (
          <div
            className={cx(
              searchHistories.length > 0
                ? "search-history-wrap"
                : "search-history-wrap-empty"
            )}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {autoSave && searchHistories.length === 0 && (
                <>
                  <div>최근 검색어 내역이 없습니다.</div>
                  <div style={{ color: "rgba(0,0,0,0.5)" }}>
                    설정이 초기화 된다면 도움말을 확인해 주세요.
                  </div>
                </>
              )}
              {!autoSave && <div>자동저장이 꺼져 있습니다.</div>}
            </div>

            {searchHistories.length > 0 && autoSave && (
              <div className={cx("search-history-list-wrap")}>
                <ul className={cx("search-history-list")}>
                  <div style={{ display: "flex", padding: "0 20px 15px" }}>
                    <span>최근 검색어</span>
                    <span className={cx("spacer")} />
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteAllHistory()}
                    >
                      전체삭제
                    </span>
                  </div>
                  {searchHistories.map((item, idx) => {
                    return (
                      <li className={cx("search-list-item")}>
                        <SlMagnifier
                          style={{ marginRight: "10px", cursor: "pointer" }}
                        />
                        <span style={{ cursor: "pointer" }}>
                          {item.keyword}
                        </span>
                        <span style={{ flex: 1 }}></span>
                        <span
                          className={cx("item-delete-button")}
                          onClick={() => {
                            deleteOneHistory(idx);
                          }}
                        >
                          <IoMdClose />
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
        {isSearchFocus && (
          <div className={cx("search-history-footer")}>
            <span onClick={handleAutoSave}>
              {autoSave ? "자동저장 끄기" : "자동저장 켜기"}
            </span>
            <span>도움말</span>
            <span className={cx("spacer")}></span>
            <span onClick={() => setIsSearchFocus(false)}>닫기</span>
          </div>
        )}
      </div>

      <OtherServices />
    </header>
  );
};

export default Header;
