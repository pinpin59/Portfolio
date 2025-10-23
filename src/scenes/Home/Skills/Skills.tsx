import { Icon } from "@/components/generic/Icon";
import SkillCardGrid from "@/scenes/Home/Skills/components/SkillCardGrid";
import { Button } from "@/components/ui/button";
import type { Skill } from "@/types/Skill";
import { Code, Wrench, Lightbulb } from "lucide-react";

const Skills = () => {
  const skills: Skill[] = [
    {
      title: "What I Do",
      description: "My expertise and services",
      icon: <Icon className="text-chart-1" icon={Code} size={46} />,
      cardContent: [
        "Full Stack Development",
        "Javascript Applications",
        "REST & APIs",
        "Database Architecture",
        "UI/UX Design",
        "Performance Optimization",
      ],
    },
    {
      title: "My Tools",
      description: "Technologies I use",
      icon: <Icon className="text-chart-1" icon={Wrench} size={46} />,
      cardContent: [
        "React, Angular, TypeScript",
        "Node.js, Express, NestJS",
        "PostgreSQL, MongoDB",
        "Git, Docker, VS Code",
      ],
    },
    {
      title: "My Approach",
      description: "How I work & deliver value",
      icon: <Icon className="text-chart-1" icon={Lightbulb} size={46} />,
      cardContent: [
        "Clean Code & Best Practices",
        "Agile & Collaborative",
        "User-Centered Design",
        "Continuous Learning",
        "Problem-Solving Mindset",
        "Scalable Solutions",
      ],
    },
  ];

  const navigateToProjects = () => {
    window.location.href = "/projects";
  };

  return (
    <section className="p-4 sm:p-10 md:p-20 mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Building Projects & Ideas
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
        I specialize in scalable architecture and user experience, designing
        quality applications that meet real needs of users and businesses.
      </p>
      <div className="mt-20">
        <SkillCardGrid skills={skills} />
        <div className="mt-10 flex justify-end">
          <Button onClick={navigateToProjects} variant={"outline"}>
            View my projects
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Skills;
