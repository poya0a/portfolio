import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "김도하 포트폴리오",
  description: "프론트엔드 개발자 포트폴리오",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "김도하 포트폴리오",
    description: "프론트엔드 개발자 포트폴리오",
    url: "https://portfolio.vercel.app",
    siteName: "김도하 포트폴리오",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
