import classNames from "classnames/bind";
import style from "./topSearchbar.module.scss";
const cx = classNames.bind(style);

import React from "react";
import { SlMagnifier } from "react-icons/sl";
import naverLogo from "@/assets/naver_logo.png";
import Image from "next/image";
import { services } from "@/consts/servicesLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { useModal } from "@/util/zustand/store";

const TopSearchbar = () => {
  const setSearchModal = useModal((state) => state.setSearchModal);

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
          slidesPerView={7}
          nested={true}
          className={cx("services-wrap")}
        >
          {Object.keys(services).map((item, i) => {
            return (
              <SwiperSlide key={i} className={cx("services-slide-wrap")}>
                <div>{item}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSearchbar;
