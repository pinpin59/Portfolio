import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import type { Skill } from "@/types/Skill";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }: SkillCardProps) => {
  return (
    <Card className="h-full flex flex-col text-secondary border border-secondary-foreground/20">
      <CardHeader>
        <div className="flex items-center space-x-5">
          <CardTitle>{skill.icon}</CardTitle>
          <CardTitle className="text-2xl text-foreground">
            {skill.title}
          </CardTitle>
        </div>
        <CardDescription className="text-secondary-foreground/50">
          {skill.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="list-disc list-inside space-y-1 text-secondary-foreground/90">
          {skill.cardContent.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
