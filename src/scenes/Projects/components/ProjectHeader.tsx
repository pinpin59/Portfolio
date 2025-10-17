interface ProjectHeaderProps {
  title: string;
  description: string;
}

export function ProjectHeader({ title, description }: ProjectHeaderProps) {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">{title}</h1>
      <p className="text-sm md:text-base text-muted-foreground ">
        {description}
      </p>
      <div className="bg-border h-[1px] w-full mt-4"></div>
    </div>
  );
}
