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
    <Swiper className={cx("swiper-wrap")}>
      <SwiperSlide>
        <HomeMobile />
      </SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>
  );
};

export default MobileVersion;
