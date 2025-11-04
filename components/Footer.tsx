"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/components/_footer.module.scss";

export default function Footer() {
    const [showPopup, setShowPopup] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => setShowPopup(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [showPopup]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className={styles.footer}>
            <button
                className={`button ${styles.copyright}`}
                onClick={() => setShowPopup(true)}
            >
                © 2025. Kim Do Ha. All rights reserved.
            </button>
            <button
                className={`button ${styles.moveToTop} ${showButton ? "" : styles.hide}`}
                onClick={scrollToTop}
            >
            </button>
            {showPopup && 
                <div className={styles.popup}>
                <p>감사합니다.</p>
                <Image
                    src="/images/popup.jpeg"
                    width={100}
                    height={100}
                    alt="THANK YOU!"
                />
            </div>
        }
        </footer>
    );
}