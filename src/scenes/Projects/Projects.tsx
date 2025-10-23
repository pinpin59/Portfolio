import ProjectsGrid from "./components/ProjectsGrid";
import { getAllProjects } from "@/data/projects";

const Projects = () => {
  const projects = getAllProjects();

  return (
    <section className="flex flex-col items-center p-2 mt-20">
      <h1>My Projects</h1>
      <p>Here you will find a selection of projects I have worked on.</p>
      <div className="w-full max-w-7xl">
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
