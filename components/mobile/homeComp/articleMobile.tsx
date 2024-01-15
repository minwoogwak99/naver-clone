import classNames from "classnames/bind";
import styles from "./articleMobile.module.scss";
const cx = classNames.bind(styles);

import React from "react";

const ArticleMobile = () => {
  return (
    <div className={cx("article-wrap")}>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div key={i} className={cx("article")}>
            <div className={cx("article-title")}>article {i}</div>
          </div>
        ))}
    </div>
  );
};

export default ArticleMobile;
