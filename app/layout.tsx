import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mason Events - 中国品牌海外推广合作伙伴",
  description:
    "Mason Events专注于中国品牌海外推广，提供专业的展览策划、品牌推广和国际市场拓展服务。助力中国企业走向世界。",
  keywords: "中国品牌海外推广,展览策划,国际市场拓展,品牌推广,Mason Events",
  authors: [{ name: "Mason Events" }],
  creator: "Mason Events",
  publisher: "Mason Events",
  robots: "index, follow",
  openGraph: {
    title: "Mason Events - 中国品牌海外推广合作伙伴",
    description: "专业的中国品牌海外推广服务，助力企业国际化发展",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mason Events - 中国品牌海外推广合作伙伴",
    description: "专业的中国品牌海外推广服务，助力企业国际化发展",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
