// import { projects } from "@/data/projects";
// import ProjectCard from "@/components/ProjectCard.tsx";
import styles from "@/styles/pages/_home.module.scss"

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>김도하</h1>
      <p>프론트엔드 개발자 포트폴리오</p>


자기 소개
스킬
커리어 및 경력 기술서
프로젝트 (여기서 페이지 이동 처리)
메일 연락
      <div className="grid">
        {/* {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))} */}
      </div>
    </div>
  );
}