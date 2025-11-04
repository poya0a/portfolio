"use client";
import styles from "@/styles/pages/_notFound.module.scss";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className={styles.notFound}>
            <h1>페이지를 찾을 수 없습니다.</h1>
            <div className={styles.goToHome}>
                <button
                type="button"
                className={`button ${styles.homeButton}`}
                onClick={() => router.push("/")}
                >
                홈으로
                </button>
            </div>
        </div>
    );
}