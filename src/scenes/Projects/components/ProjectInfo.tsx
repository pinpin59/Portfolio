import type { Project } from "@/types/Project";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectTechnologies } from "./ProjectTechnologies";
import { ProjectLinks } from "./ProjectLinks";

interface ProjectInfoProps {
  project: Project;
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <div className="mt-8 w-full 2xl:basis-[30%] space-y-10">
      <ProjectHeader title={project.title} description={project.description} />

      {/* Description complète */}
      <div>
        <h2 className="text-xl md:text-2xl ">What Is It ?</h2>
        <p className=" md:text-lg mt-4 text-muted-foreground">
          {project.fullDescription || project.description}
        </p>
      </div>

      <div className="bg-border h-[1px] w-full"></div>

      <ProjectTechnologies tools={project.tools} />

      <div className="shrink-0 bg-border h-[1px] w-full"></div>

      <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
    </div>
  );
}
