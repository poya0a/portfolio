"use client";
import { Metadata } from "next";
import NotFoundClient from "@/components/NotFoundClient.tsx";

export const metadata: Metadata = {
    title: "페이지를 찾을 수 없습니다",
    description: "Not Found Page",
};

export default function NotFound() {
    return <NotFoundClient />;
}