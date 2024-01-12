import classNames from "classnames/bind";
import styles from "./main.module.scss";
const cx = classNames.bind(styles);

import React from "react";

const Main = () => {
  return (
    <main className={cx("main-wrap")}>
      <div className={cx("section-left-wrap")}>
        <section className={cx("left-section1")}>Ad</section>
        <section className={cx("left-section2")}>News</section>
        <section className={cx("left-section3")}>Shopping</section>
        <section className={cx("left-section4")}>ETC</section>
      </div>
      <div className={cx("section-right-wrap")}>
        <section className={cx("right-section1")}>Login</section>
        <section className={cx("right-section2")}>Ad</section>
        <section className={cx("right-section3")}>Weather</section>
        <section className={cx("right-section4")}>Finance</section>
        <section className={cx("right-section5")}>Widget Board</section>
        <section className={cx("right-section6")}>carousel</section>
      </div>
    </main>
  );
};

export default Main;
