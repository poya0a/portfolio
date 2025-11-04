"use client";
// import { projects } from "@/data/projects";
// import ProjectCard from "@/components/ProjectCard.tsx";
import styles from "@/styles/pages/_home.module.scss"

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section id="title" className={styles.title}>
        <div className={styles.container}>
          <h1>KIM DO HA</h1>
          <h6>PORTFOLIO</h6>
        </div>
      </section>
      <section id="aboutMe" className={styles.aboutMe}>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.title}>이름</div>
            <div className={styles.content}>김도하</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>생년월일</div>
            <div className={styles.content}>1995.01.02</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>위치</div>
            <div className={styles.content}>서울특별시 영등포구</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>이메일</div>
            <div className={styles.content}>damdadodam_@naver.com</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>깃허브</div>
            <div className={styles.content}>https://github.com/poya0a</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>학력</div>
            <div className={styles.content}>
              한양사이버대학교<br />
              컴퓨터공학과 재학 2023
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className={styles.skills}>
        <div className={styles.container}>
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

        </div>
      </section>
      <section id="career" className={styles.career}>
        <div className={styles.container}>

        </div>
      </section>
    </div>
  );
}