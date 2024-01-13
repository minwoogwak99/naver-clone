import classNames from "classnames/bind";
import style from "./page.module.scss";
const cx = classNames.bind(style);

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
