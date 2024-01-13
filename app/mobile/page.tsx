"use client";

import classNames from "classnames/bind";
import style from "./mobile.module.scss";
const cx = classNames.bind(style);
import "swiper/css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeMobile from "@/components/mobile/homeComp/HomeMobile";

const MobileVersion = () => {
  return (
    <Swiper className={cx("swiper-wrap")} initialSlide={2} loop>
      <SwiperSlide>쇼핑 2</SwiperSlide>
      <SwiperSlide>쇼핑 1</SwiperSlide>
      <SwiperSlide>
        <HomeMobile />
      </SwiperSlide>
      <SwiperSlide>뉴스 1</SwiperSlide>
      <SwiperSlide>스포츠</SwiperSlide>
    </Swiper>
  );
};

export default MobileVersion;
