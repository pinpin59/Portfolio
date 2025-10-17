interface ProjectTechnologiesProps {
  tools: string[];
}

export function ProjectTechnologies({ tools }: ProjectTechnologiesProps) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl ">Tools & Technologies</h2>
      <div className="flex flex-wrap gap-2 mt-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs md:text-sm font-semibold bg-foreground text-primary-foreground"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
}
