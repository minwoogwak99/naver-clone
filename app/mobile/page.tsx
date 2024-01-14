"use client";

import classNames from "classnames/bind";
import style from "./mobile.module.scss";
const cx = classNames.bind(style);
import "swiper/css";

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import HomeMobile from "@/components/mobile/homeComp/HomeMobile";
import { useSwiper } from "@/util/zustand/store";
import { searchServices } from "@/consts/serchBarServices";

const HOMEINDEX = 4;

const MobileVersion = () => {
  const slideRef = useRef<SwiperRef>(null);

  const setSwiperCurrentIndex = useSwiper((state) => state.setSwierCurrentIdx);
  const swiperCurrentIdx = useSwiper((state) => state.swiperCurrentIdx);

  useEffect(() => {
    if (slideRef.current === null) return;
    slideRef.current.swiper.slideTo(swiperCurrentIdx);
  }, [swiperCurrentIdx]);

  return (
    <Swiper
      className={cx("swiper-wrap")}
      initialSlide={HOMEINDEX}
      onRealIndexChange={(i) => setSwiperCurrentIndex(i.activeIndex)}
      ref={slideRef}
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
