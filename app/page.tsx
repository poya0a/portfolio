"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShootingStarsCanvas from "@/components/ShootingStarsCanvas";
import { projects } from "@/data/projects";
import styles from "@/styles/pages/_home.module.scss"

export default function HomePage() {
  const [showAlert, setShowAlert] = useState<string>("");

  const copyToClipboard = (text: string) => {
    if (!navigator.clipboard) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setShowAlert("이메일 주소가 복사되었습니다.");
      } catch (err) {
        setShowAlert("이메일 주소 복사에 실패했습니다.");
        alert(err);
      }
      document.body.removeChild(textarea);
      return;
    }

    navigator.clipboard.writeText(text).then(
      () => {
        setShowAlert("이메일 주소가 복사되었습니다.");
      },
      () => {
        setShowAlert("이메일 주소 복사에 실패했습니다.");
      }
    );
  };

  useEffect(() => {
    if (showAlert && showAlert !== "") {
      const timer = setTimeout(() => setShowAlert(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

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
            <div className={`${styles.item} ${styles.email}`} onClick={() => copyToClipboard("damdadodam_@naver.com")}>
              <div className={styles.itemTitle}>이메일</div>
              <div className={styles.itemContent}>damdadodam_@naver.com</div>
            </div>
            <div className={`${styles.item} ${styles.github}`} onClick={() => window.open("https://github.com/poya0a", "_blank")}>
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
            {projects.map((project) => (
              <div key={project.id} className={styles.card} onClick={() => window.open(project.url)}>
                <div className={styles.header}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className={styles.stack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.details}>
                  {project.details.split("  ").map((line, i) => (
                    <p key={i}>{line.trim()}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="career" className={styles.career}>
          <p>Career</p>
          <div className={styles.container}>
            <div className={styles.job}>
              <button 
                className={`button ${styles.company}`}
                onClick={() => window.open("https://www.notion.so/poya0a/Career-Description-1f14c6b18bc180a78305c1fde4f79d51?source=copy_link", "_blank")}
                >
                <p className={styles.companyName}>(주) 비알아이티</p>
                <p className={styles.period}>2022.10 - 2025.04 (2년 7개월)</p>
                <p className={styles.position}>솔루션개발2팀 / 프론트엔드 개발자</p>
              </button>

              <div className={styles.careerProjectsList}>
                <div className={styles.careerProject}>
                  <p className={styles.projectName}>BRIT / INSPLANET 홈페이지 리뉴얼</p>
                  <p className={styles.period}>2022.10 - 2023.01</p>
                  <aside className={styles.tip}>React, JavaScript, Styled Component</aside>
                  <ul>
                    <li>Styled Components를 활용한 프로젝트 환경 설정 및 퍼블리싱 작업</li>
                    <li>입사 지원 및 문의 폼 기능과 게시판 개발</li>
                    <li>디자이너와 협력하여 Figma 요구사항을 반영한 UI/UX 구현</li>
                  </ul>
                </div>
                <div className={styles.careerProject}>
                  <p className={styles.projectName}>전기 트럭 GSG T4K</p>
                  <p className={styles.period}>2023.01 - 2023.03</p>
                  <aside className={styles.tip}>React, JavaScript, Redux Toolkit, Node</aside>
                  <ul>
                    <li>Redux Toolkit을 활용한 상태 관리 최적화 및 구조 설계</li>
                    <li>상태 업데이트로 인한 불필요한 리렌더링 문제 해결 및 성능 개선</li>
                    <li>useMemo를 활용한 컴포넌트 최적화</li>
                  </ul>
                </div>
                <div className={styles.careerProject}>
                  <p className={styles.projectName}>운동 예약 웹 / 앱 및 관리자 페이지 개발</p>
                  <p className={styles.period}>2023.04 - 2023.08 / 2024.01 - 2024.04</p>
                  <aside className={styles.tip}>React, TypeScript, Redux Toolkit, JSP, SCSS, Node</aside>
                  <ul>
                    <li>JSP를 활용한 Admin 페이지에서 권한 관리 및 CRUD 기능 개발</li>
                    <li>입사 지원 및 문의 폼 기능과 게시판 개발</li>
                    <li>React Calendar 라이브러리 도입으로 퍼블리싱 공수 절감 및 UX 향상</li>
                  </ul>
                </div>
                <div className={styles.careerProject}>
                  <p className={styles.projectName}>BLGES 표준 리포트</p>
                  <p className={styles.period}>2023.05 - 2023.06</p>
                  <aside className={styles.tip}>HTML, JavaScript, CSS</aside>
                  <ul>
                    <li>기존 리포트 CRUD 기능 유지 보수를 담당하며, 폼 데이터에 이미지 추가 기능 개발</li>
                    <li>기존 코드와 공통 기능을 분석 및 활용해 코드 재사용성과 확장성 증가</li>
                    <li>HTML 기반의 구현 한계를 극복하기 위해 동료와 협업하며 효율적인 방식으로 문제 해결</li>
                  </ul>
                </div>
                <div className={styles.careerProject}>
                  <p className={styles.projectName}>채팅 프로그램</p>
                  <p className={styles.period}>2023.05 - 2023.12</p>
                  <aside className={styles.tip}>Flutter, Dart, Firebase, Redis, Web Socket</aside>
                  <ul>
                    <li>lutter와 Dart를 활용한 하이브리드 앱 개발</li>
                    <li>Redis와 WebSocket을 활용한 실시간 메시지 송수신 및 알림 기능 구현</li>
                    <li>회원 관리 시스템 설계 및 데이터베이스 구조 최적화</li>
                  </ul>
                </div>
                <div className={styles.careerProject}>
                  <p className={styles.projectName}>게시판</p>
                  <p className={styles.period}>2024.05 - 2025.02</p>
                  <aside className={styles.tip}>Next.js, TypeScript, Zustand, TipTap Editor, NextApi, SQL, Supabase, Vercel</aside>
                  <ul>
                    <li>Next.js와 TypeScript를 활용하여 SEO 최적화된 게시판 구현</li>
                    <li>Supabase와 SQL을 활용한 데이터베이스 관리 및 API 설계</li>
                    <li>SSR과 SSG를 병행하여 Vercel 배포 시 빌드 시간 및 호환성 문제 해결</li>
                  </ul>
                </div>
                <div className={styles.careerProject}>
                  <p className={styles.projectName}>로봇 관리 사이트 KT RBrain 리뉴얼</p>
                  <p className={styles.period}>2024.10 -2024.12</p>
                  <aside className={styles.tip}>React, JavaScript, Zustand, React Query, SCSS</aside>
                  <ul>
                    <li>Vue 기반 사이트를 React로 재구축하며 리포트 조회·다운로드, 권한 관리 등 기능 개발</li>
                    <li>React Query를 활용하며 API 호출 최적화 및 조건부 데이터 페칭을 구현해 성능 문제 해결</li>
                    <li>개발 과정에서 속도와 꼼꼼함의 균형을 위해 시나리오 정리 및 반복 점검</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {showAlert && showAlert !== "" &&
          <div className={styles.alert}>
            <p>{showAlert}</p>
          </div>
        }
      </div>
      <Footer/>
    </>
  );
}