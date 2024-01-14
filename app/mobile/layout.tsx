"use client";

import SearchFull from "@/components/mobile/SearchFull";
import TopSearchbar from "@/components/mobile/TopSearchbar";
import { useModal, useSwiper } from "@/util/zustand/store";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const isMobile = window.matchMedia("(max-width: 1200px)").matches;

    if (!isMobile) {
      router.push("/");
    }
  }

  //zustand
  const SearchModal = useModal((state) => state.searchModal);
  const swiperCurrentIndex = useSwiper((state) => state.swiperCurrentIdx);

  const [scrollY, setScrollY] = useState(0);

  const isOpenTopSearchBar = useMemo(() => {
    return (
      (scrollY > 300 && swiperCurrentIndex === 4) || swiperCurrentIndex !== 4
    );
  }, [scrollY, swiperCurrentIndex]);

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll, true);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: any) => {
    setScrollY(e.target.scrollTop);
  };

  return (
    <>
      {SearchModal && <SearchFull />}
      {isOpenTopSearchBar && <TopSearchbar />}
      {children}
    </>
  );
}
