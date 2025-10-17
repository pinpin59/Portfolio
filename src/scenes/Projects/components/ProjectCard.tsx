import type { Project } from "@/types/Project";
import React from "react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { image, title, description, tools, slug } = project;

  return (
    <Link
      to={`/projects/${slug}`}
      className="relative group overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] bg-white dark:bg-gray-900 block"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="p-3 sm:p-4 md:p-6 w-full">
          <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-tight mb-1 sm:mb-2">
            {title}
          </h1>
          <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {tools?.map((tool, index) => (
              <div
                key={index}
                className="inline-flex items-center rounded-full border px-2 sm:px-2.5 py-0.5 text-xs font-medium transition-colors border-transparent bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
