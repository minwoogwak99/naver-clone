import classNames from "classnames/bind";
import style from "./homeMobile.module.scss";
const cx = classNames.bind(style);

import React, { useEffect, useRef, useState } from "react";
import HeaderMobile from "../HeaderMobile";
import ArticleMobile from "../articleMobile";

const HomeMobile = () => {
  return (
    <div className={cx("home-wrap")}>
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
