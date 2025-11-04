"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/components/_header.module.scss";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("title");
    const headerRef = useRef<HTMLElement>(null); 

    const sections = ["title", "aboutMe", "skills", "projects", "career"];

    const handleScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;

        sections.forEach((id) => {
        const sec = document.getElementById(id);
        if (sec && sec.offsetTop <= scrollPos && scrollPos < sec.offsetTop + sec.offsetHeight) {
            setActive(id);
        }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <header ref={headerRef} className={styles.header}>
            <div className={styles.container}>
                <button className={`button ${styles.logo}`} onClick={() => scrollToSection("title")}>
                    <Image
                        src="/images/logo_blue.png"
                        width={80}
                        height={80}
                        alt="LOGO"
                    />
                </button>
                <button className={`button ${styles.menu}`} onClick={() => setMenuOpen((prev) => !prev)}>
                    <div className={styles.inner}>
                        <span className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`}></span>
                        <span className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`}></span>
                        <span className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`}></span>
                    </div>
                </button>
            </div>
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                <ul>
                    <li
                        className={active === "aboutMe" ? styles.active : ""}
                        onClick={() => scrollToSection("aboutMe")}
                    >
                        About Me
                    </li>
                    <li
                        className={active === "skills" ? styles.active : ""}
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className={active === "projects" ? styles.active : ""}
                        onClick={() => scrollToSection("projects")}
                    >
                        Projects
                    </li>
                    <li
                        className={active === "career" ? styles.active : ""}
                        onClick={() => scrollToSection("career")}
                    >
                        Career
                    </li>
                </ul>
            </nav>
        </header>
    );
}