import classNames from "classnames/bind";
import styles from "./searchFull.module.scss";
const cx = classNames.bind(styles);

import React, { useEffect, useRef, useState } from "react";
import { useModal, useSearchHistory } from "@/util/zustand/store";
import { SlMagnifier } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { IoMdArrowBack, IoMdClose } from "react-icons/io";

const SearchFull = () => {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [isHistoryEmpty, setIsHistoryEmpty] = useState(false);
  const [isComposing, setComposing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // ZUSTAND
  const addSearchHistory = useSearchHistory((state) => state.addSearchHistory);
  const deleteAllHistory = useSearchHistory((state) => state.deleteAllHistory);
  const deleteOneHistory = useSearchHistory((state) => state.deleteOneHistory);
  const setAutoSave = useSearchHistory((state) => state.setAutoSave);
  const searchHistories = useSearchHistory((state) => state.searchHistories);
  const autoSave = useSearchHistory((state) => state.autoSave);
  const setSearchModal = useModal((state) => state.setSearchModal);
  useEffect(() => {
    if (searchHistories.length === 0) setIsHistoryEmpty(true);
    if (searchHistories.length > 0) setIsHistoryEmpty(false);
  }, [searchHistories]);

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
    } else if (
      !autoSave &&
      confirm("최근검색어 저장 기능을 사용 하시겠습니까?")
    ) {
      setAutoSave(true);
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isComposing || e.keyCode === 229) return;
    if (e.key === "Enter") {
      gotoSearchPage();
    }
  };

  return (
    <div className={cx("search-wrap")}>
      <div className={cx("search-area")}>
        <button
          className={cx("search-close-button")}
          onClick={() => {
            setSearchModal(false);
          }}
        >
          <IoMdArrowBack
            style={{
              verticalAlign: "middle",
              fontSize: "20px",
              cursor: "pointer",
            }}
          />
        </button>
        <input
          type="text"
          className={cx("search-area-input")}
          placeholder="검색어를 입력해주세요"
          ref={inputRef}
          value={input}
          onChange={handleSearchInputChange}
          onKeyDown={handleKeydown}
          onCompositionStart={() => setComposing(true)}
          onCompositionEnd={() => setComposing(false)}
        />
        <SlMagnifier className={cx("search-button")} onClick={handleSearch} />
      </div>
      <div className={cx("search-history-wrap")}>
        {!autoSave && (
          <div className={cx("search-history-empty-wrap")}>
            <div>검색어 저장 기능이 꺼져 있습니다.</div>
            <div style={{ fontSize: "14px", color: "rgba(0,0,0,0.4)" }}>
              설정이 초기화된다면 도움말을 확인해주세요
            </div>
          </div>
        )}
        <div className={cx("search-history-area")}>
          {autoSave && (
            <>
              {isHistoryEmpty && (
                <div className={cx("search-history-empty-wrap")}>
                  <div>검색 기록이 없습니다.</div>
                  <div style={{ fontSize: "14px", color: "rgba(0,0,0,0.4)" }}>
                    설정이 초기화된다면 도움말을 확인해주세요
                  </div>
                </div>
              )}
              {!isHistoryEmpty && (
                <>
                  <div
                    style={{
                      display: "flex",
                      height: "25px",
                      fontSize: "15px",
                    }}
                  >
                    <span>최근 검색어</span>
                    <span style={{ flex: 1 }} />
                    <span onClick={() => deleteAllHistory()}>전체삭제</span>
                  </div>
                  {searchHistories.map((history, i) => {
                    return (
                      <div
                        className={cx("history-item")}
                        style={{ height: "40px" }}
                        key={i}
                      >
                        <SlMagnifier />
                        <span
                          className={cx("history-item-text")}
                          onClick={() => {
                            router.push(
                              "https://search.naver.com/search.naver?query=" +
                                history.keyword
                            );
                          }}
                        >
                          {history.keyword}
                        </span>
                        <span style={{ flex: 1 }} />
                        <IoMdClose onClick={() => deleteOneHistory(i)} />
                      </div>
                    );
                  })}
                </>
              )}
            </>
          )}
          {}
        </div>
        <div className={cx("button-area")}>
          <span onClick={handleAutoSave} style={{ cursor: "pointer" }}>
            {autoSave ? "자동저장 끄기" : "자동저장 켜기"}
          </span>
          <span>도움말</span>
          <span style={{ flex: 1 }} />
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSearchModal(false);
            }}
          >
            닫기
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchFull;
