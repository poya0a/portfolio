"use client";
// import { projects } from "@/data/projects";
// import ProjectCard from "@/components/ProjectCard.tsx";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShootingStarsCanvas from "@/components/ShootingStarsCanvas";
import styles from "@/styles/pages/_home.module.scss"

export default function HomePage() {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <section id="title" className={styles.title}>
          <div className={styles.container}>
            <h1>
              <span>KIM</span>
              <span>DO</span>
              <span>HA</span>
            </h1>
            <h3>FRONTEND</h3>
            <h6>PORTFOLIO</h6>
          </div>
          <ShootingStarsCanvas />
        </section>
        <section id="aboutMe" className={styles.aboutMe}>
          <p>About Me</p>
          <div className={styles.container}>
            <div className={`${styles.item} ${styles.name}`}>
              <div className={styles.itemTitle}>이름</div>
              <div className={styles.itemContent}>김도하</div>
            </div>
            <div className={`${styles.item} ${styles.birth}`}>
              <div className={styles.itemTitle}>생년월일</div>
              <div className={styles.itemContent}>1995.01.02</div>
            </div>
            <div className={`${styles.item} ${styles.location}`}>
              <div className={styles.itemTitle}>위치</div>
              <div className={styles.itemContent}>서울특별시 영등포구</div>
            </div>
            <div className={`${styles.item} ${styles.email}`}>
              <div className={styles.itemTitle}>이메일</div>
              <div className={styles.itemContent}>damdadodam_@naver.com</div>
            </div>
            <div className={`${styles.item} ${styles.github}`}>
              <div className={styles.itemTitle}>깃허브</div>
              <div className={styles.itemContent}>https://github.com/poya0a</div>
            </div>
            <div className={`${styles.item} ${styles.education}`}>
              <div className={styles.itemTitle}>학력</div>
              <div className={styles.itemContent}>
                한양사이버대학교<br />
                컴퓨터공학과 재학 2023
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className={styles.skills}>
          <p>Skills</p>
          <div className={styles.container}>
            <div className={styles.category}>
              <div className={styles.name}>
                <Image
                  src="/images/icons_language.png"
                  width={40}
                  height={40}
                  alt="language"
                />
                <p>Language</p>
              </div>
              <div className={styles.items}>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#3178C6"}}>
                  TypeScript
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#F7DF1E", color: "#000"}}>
                  JavaScript
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#0769AD"}}>
                  jQuery
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#0175C2"}}>
                  Dart
                </button>
              </div>
            </div>
            <div className={styles.category}>
              <div className={styles.name}>
                <Image
                  src="/images/icons_frontend.png"
                  width={40}
                  height={40}
                  alt="frontend"
                />
                <p>Frontend</p>
              </div>
              <div className={styles.items}>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#E34F26"}}>
                  Html
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#61DAFB", color: "#000"}}>
                  React
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#000000"}}>
                  Next.js
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#02569B"}}>
                  Flutter
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#764ABC"}}>
                  Redux
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#3B82F6"}}>
                  Zustand
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#3578E5"}}>
                  Recoil
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#FF4154"}}>
                  React-Query
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#EC5990"}}>
                  React-Hook-Form
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#1572B6"}}>
                  Css
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#CD6799"}}>
                  Scss
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#DB7093"}}>
                  Styled-Components
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#646CFF"}}>
                  Vite
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#8DD6F9", color: "#000"}}>
                  Webpack
                </button>
              </div>
            </div>
            <div className={styles.category}>
              <div className={styles.name}>
                <Image
                  src="/images/icons_backend.png"
                  width={40}
                  height={40}
                  alt="backend"
                />
                <p>Backend</p>
              </div>
              <div className={styles.items}>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#4479A1"}}>
                  MySQL
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#777BB3"}}>
                  PHP
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#339933"}}>
                  Node.js/Express
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#FFCA28", color: "#000"}}>
                  Firebase
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#3ECF8E", color: "#000"}}>
                  Supabase
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#FF6B6B"}}>
                  RESTful API
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#3178C6"}}>
                  TypeORM
                </button>
              </div>
            </div>
            <div className={styles.category}>
              <div className={styles.name}>
                <Image
                  src="/images/icons_database.png"
                  width={40}
                  height={40}
                  alt="database"
                />
                <p>DevOps</p>
              </div>
              <div className={styles.items}>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#000000"}}>
                  Vercel
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#2088FF"}}>
                  Github Actions
                </button>
                <button className={`button ${styles.itemButton}`} style={{backgroundColor: "#FC6D26"}}>
                  GitLab CI
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className={styles.projects}>
          <p>Projects</p>
          <div className={styles.container}>
          </div>
        </section>
        <section id="career" className={styles.career}>
          <p>Career</p>
          <div className={styles.container}>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}