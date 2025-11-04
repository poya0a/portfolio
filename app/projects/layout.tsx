import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";

export const metadata: Metadata = {
    title: "Projects",
    description: "",
};

export default function ProjectsLayout({
    children,
}: {
children: React.ReactNode;
}) {
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
