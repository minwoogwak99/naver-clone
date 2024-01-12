import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naver clone",
  description: "Simple Naver clone coding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
