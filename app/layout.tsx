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
          maxWidth: "90%",
          margin: "0 auto",
          minWidth: "1200px", // Set a minimum width for the body
        }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
