"use client";

import SearchFull from "@/components/mobile/SearchFull";
import TopSearchbar from "@/components/mobile/TopSearchbar";
import { useModal } from "@/util/zustand/store";
import { use, useEffect, useState } from "react";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //zustand
  const SearchModal = useModal((state) => state.searchModal);
  const setSearchModal = useModal((state) => state.setSearchModal);

  const [scrollY, setScrollY] = useState(0);
  function handleScroll(e: any) {
    setScrollY(e.target.scrollTop);
  }

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll, true);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {SearchModal && <SearchFull />}
      {scrollY > 300 && <TopSearchbar />}
      {children}
    </>
  );
}
