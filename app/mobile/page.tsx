"use client";

import classNames from "classnames/bind";
import style from "./mobile.module.scss";
const cx = classNames.bind(style);
import "swiper/css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeMobile from "@/components/mobile/homeComp/HomeMobile";
import { useModal, useSwiper } from "@/util/zustand/store";
import { searchServices } from "@/consts/serchBarServices";

export const HOMEINDEX = 4;

const MobileVersion = () => {
  const setSwiperCurrentIndex = useSwiper((state) => state.setSwierCurrentIdx);

  return (
    <Swiper
      className={cx("swiper-wrap")}
      initialSlide={HOMEINDEX}
      loop
      onRealIndexChange={(i) => setSwiperCurrentIndex(i.activeIndex)}
    >
      {searchServices.map((service, i) => (
        <SwiperSlide
          key={i}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {i === HOMEINDEX ? <HomeMobile /> : service}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileVersion;
