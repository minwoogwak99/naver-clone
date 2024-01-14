import classNames from "classnames/bind";
import style from "./homeMobile.module.scss";
const cx = classNames.bind(style);

import React, { useEffect, useRef, useState } from "react";
import HeaderMobile from "../HeaderMobile";
import ArticleMobile from "../articleMobile";
import TopSearchbar from "../TopSearchbar";

const HomeMobile = () => {
  const [scrollY, setScrollY] = useState(0);
  const homeWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (homeWrapRef.current === null) return;
    const handleScroll = () => {
      setScrollY(homeWrapRef.current?.scrollTop!);
    };

    const homeWrap = homeWrapRef.current;
    homeWrap?.addEventListener("scroll", handleScroll, true);

    return () => {
      homeWrap?.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <div className={cx("home-wrap")} ref={homeWrapRef}>
      {/* {scrollY > 300 && <TopSearchbar />} */}
      <section>
        <HeaderMobile />
      </section>
      <section>
        <ArticleMobile />
      </section>
    </div>
  );
};

export default HomeMobile;
