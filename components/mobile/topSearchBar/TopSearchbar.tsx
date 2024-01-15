import classNames from "classnames/bind";
import style from "./topSearchbar.module.scss";
const cx = classNames.bind(style);

import React, { useEffect, useRef } from "react";
import { SlMagnifier } from "react-icons/sl";
import naverLogo from "@/assets/naver_logo.png";
import Image from "next/image";
import { searchServices } from "@/consts/serchBarServices";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useModal, useSwiper } from "@/util/zustand/store";

const TopSearchbar = () => {
  const searchbarCurrIdxRef = useRef<SwiperRef>(null);

  const setSearchModal = useModal((state) => state.setSearchModal);
  const currentSwiperIndex = useSwiper((state) => state.swiperCurrentIdx);
  const setCurrentIdx = useSwiper((state) => state.setSwierCurrentIdx);

  useEffect(() => {
    if (searchbarCurrIdxRef.current === null) return;
    searchbarCurrIdxRef.current.swiper.slideTo(currentSwiperIndex);
  }, [currentSwiperIndex]);

  return (
    <div>
      <div className={cx("top-search-wrap")}>
        <div className={cx("search-area")} onClick={() => setSearchModal(true)}>
          <Image
            className={cx("naver-logo")}
            src={naverLogo}
            alt="naver logo"
            width={25}
            height={25}
          />
          <span className={cx("search-area-input")}>검색어를 입력해주세요</span>
          <SlMagnifier className={cx("search-button")} />
        </div>
        <Swiper
          spaceBetween={18}
          slidesPerView={"auto"}
          nested={true}
          className={cx("services-wrap")}
          freeMode={true}
          centeredSlides={true}
          ref={searchbarCurrIdxRef}
        >
          {searchServices.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                className={cx("services-slide-wrap")}
                onClick={() => setCurrentIdx(i)}
              >
                <span>{item}</span>
                <span
                  className={cx({ indicator: currentSwiperIndex === i })}
                ></span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSearchbar;
