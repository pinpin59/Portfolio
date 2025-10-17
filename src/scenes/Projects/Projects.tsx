import ProjectsGrid from "./components/ProjectsGrid";
import type { Project } from "@/types/Project";
import react from "@/assets/react.svg";
import waves from "@/assets/waves.svg";
import test from "@/assets/test.jpg";

const Projects = () => {
  const projects: Project[] = [
    {
      image: react,
      title: "Edulink",
      description: "A platform for parents to connect with teachers",
      tools: ["React Native", "Node.js", "Fastify", "PostgreSQL"],
    },
    {
      image: waves,
      title: "2",
      description: "A portfolio website template",
      tools: ["HTML", "SASS", "Javascript", "Gulp.js"],
    },
    {
      image: test,
      title: "3",
      description: "A portfolio website template",
      tools: ["HTML", "SASS", "Javascript", "Gulp.js"],
    },
    {
      image: waves,
      title: "4",
      description: "A portfolio website template",
      tools: ["HTML", "SASS", "Javascript", "Gulp.js"],
    },
  ];

  return (
    <section className="flex flex-col items-center p-2">
      <h1>My Projects</h1>
      <p>Here you will find a selection of projects I have worked on.</p>
      <div className="w-full max-w-7xl">
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
