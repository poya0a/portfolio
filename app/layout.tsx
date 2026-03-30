import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "@/styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://poya.vercel.app"),
  title: {
    template: "%s | 김도하 포트폴리오",
    default: "김도하 포트폴리오",
  },
  description: "프론트엔드 개발자 포트폴리오",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "김도하 포트폴리오",
    description: "프론트엔드 개발자 포트폴리오",
    url: "https://poya.vercel.app",
    locale: "ko_KR",
    type: "website",
    siteName: "김도하 포트폴리오",
    images: [
      {
        url: "https://poya.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김도하 포트폴리오",
    description: "프론트엔드 개발자 포트폴리오",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" id="html">
      <body id="body">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
