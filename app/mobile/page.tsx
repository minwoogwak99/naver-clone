"use client";

import classNames from "classnames/bind";
import style from "./mobile.module.scss";
const cx = classNames.bind(style);
import "swiper/css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const MobileVersion = () => {
  return (
    <>
      <Swiper className={cx("test")}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </>
  );
};

export default MobileVersion;
