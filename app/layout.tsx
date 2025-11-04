import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";

export const metadata: Metadata = {
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
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
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
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
