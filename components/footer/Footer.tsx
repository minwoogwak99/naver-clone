import classNames from "classnames/bind";
import styles from "./footer.module.scss";
const cx = classNames.bind(styles);

import React from "react";

const Footer = () => {
  return (
    <footer className={cx("footer-wrap")}>
      <section className={cx("section-1")}>
        <div>
          <div>image1</div>
          <div>description1</div>
        </div>
        <div>
          <div>image2</div>
          <div>description2</div>
        </div>
        <div>
          <div>image3</div>
          <div>description3</div>
        </div>
      </section>
      <section className={cx("section-2")}>
        <div>Notice</div>
        <div>view all services</div>
      </section>
      <section className={cx("section-3")}>More Links1</section>
      <section className={cx("section-4")}>More Links2</section>
    </footer>
  );
};

export default Footer;
