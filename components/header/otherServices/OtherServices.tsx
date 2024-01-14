import classNames from "classnames/bind";
import styles from "./otherServices.module.scss";
const cx = classNames.bind(styles);
//
import React from "react";
import { services } from "@/consts/servicesLink";
import { useRouter } from "next/navigation";

const OtherServices = () => {
  const router = useRouter();

  const handleServiceClick = (item: string) => {
    const url = services[item];
    router.push(url);
  };
  return (
    <section className={cx("services-wrap")}>
      {Object.keys(services).map((item, idx) => {
        return (
          <div
            key={idx}
            className={cx("service-item")}
            onClick={() => {
              handleServiceClick(item);
            }}
          >
            {item}
          </div>
        );
      })}
    </section>
  );
};

export default OtherServices;
