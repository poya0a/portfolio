"use client";
// import { projects } from "@/data/projects";
// import ProjectCard from "@/components/ProjectCard.tsx";
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
          <div className={styles.container}>
            <p>About Me</p>
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
          <div className={styles.container}>
            <p>Skills</p>
            <div className={styles.category}>
              <div className={styles.name}>Language</div>
              <div className={styles.items}></div>
            </div>
            <div className={styles.category}>
              <div className={styles.name}>Frontend</div>
              <div className={styles.items}></div>
            </div>
            <div className={styles.category}>
              <div className={styles.name}>Backend</div>
              <div className={styles.items}></div>
            </div>
            <div className={styles.category}>
              <div className={styles.name}>DevOps</div>
              <div className={styles.items}></div>
            </div>
          </div>
        </section>
        <section id="projects" className={styles.projects}>
          <div className={styles.container}>
            <p>Projects</p>
          </div>
        </section>
        <section id="career" className={styles.career}>
          <div className={styles.container}>
            <p>Career</p>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}