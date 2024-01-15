import classNames from "classnames/bind";
import styles from "./hamburgermodal.module.scss";
const cx = classNames.bind(styles);

import React from "react";

const HamburgerModal = () => {
  return (
    <div className={cx("hambuger-modal")}>
      <div
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          fontSize: "25px",
          textAlign: "start",
          padding: "20px",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        바로가기
      </div>
      <div className={cx("hamburger-content-wrap")}>
        <div>section2</div>
        <div>section3</div>
        <div>section3</div>
        <div>section3</div>
        <div>section3</div>
        <div>section3</div>
        <div>section3</div>
        <div>section3</div>
        <div>section3</div>
        <div>section3</div>
        <div>section3</div>
      </div>
    </div>
  );
};

export default HamburgerModal;
