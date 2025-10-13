import React from "react";
import SkillCard from "./SkillCard";
import type { Skill } from "@/types/Skill";

interface SkillCardGridProps {
  skills: Skill[];
}

const SkillCardGrid: React.FC<SkillCardGridProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {skills.map((skill) => (
        <div className="w-full h-full" key={skill.title}>
          <SkillCard skill={skill} />
        </div>
      ))}
    </div>
  );
};

export default SkillCardGrid;
