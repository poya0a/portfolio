// import { projects } from "@/data/projects";
// import ProjectCard from "@/components/ProjectCard.tsx";

export default function HomePage() {
  return (
    <div className="container">
      <h1>도○○의 포트폴리오</h1>
      <p>React · Next.js · Flutter · Firebase</p>

      <div className="grid">
        {/* {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))} */}
      </div>
    </div>
  );
}