import type { Metadata } from "next";
import { Quicksand, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Lì Xì Online — Xé Bao Nhận Lộc | Tết Bính Ngọ 2026",
  description: "Nhận lì xì online — xé bao nhận lộc, chúc mừng năm mới Bính Ngọ 2026!",
  keywords: ["lì xì", "bao lì xì", "tết", "chúc mừng năm mới", "nhận lộc", "năm ngọ", "2026"],
  openGraph: {
    title: "Lì Xì Online — Xé Bao Nhận Lộc",
    description: "Bạn có một bao lì xì đang chờ! Xé bao để nhận lộc nào!",
    type: "website",
  },
};

import { BackgroundMusic } from "./components/BackgroundMusic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${quicksand.variable} ${cormorant.variable} antialiased`}
      >
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
