import React from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types/Project";
import { WorkTogether } from "@/components/generic/WorkTogether";

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const midIndex = Math.ceil(projects.length / 2);
  const leftContent = projects.slice(0, midIndex);
  const rightContent = projects.slice(midIndex);

  return (
    <div
      className="pt-8 grid gap-3 grid-cols-1 lg:grid-cols-2"
      style={{ alignItems: "start" }}
    >
      {/* Colonne de gauche */}
      <div className="space-y-3">
        {leftContent.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Colonne de droite */}
      <div className="space-y-3">
        {rightContent.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        <WorkTogether />
      </div>
    </div>
  );
};

export default ProjectsGrid;
