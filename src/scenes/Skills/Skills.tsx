import { Icon } from "@/components/generic/Icon";
import SkillCardGrid from "@/scenes/Skills/components/SkillCardGrid";
import { Button } from "@/components/ui/button";
import type { Skill } from "@/types/Skill";
import { Layers } from "lucide-react";

const Skills = () => {
  const skills: Skill[] = [
    {
      title: "Card 1",
      description: "This is a placeholder description for card 1.",
      icon: <Icon icon={Layers} size={46} />,
      cardContent: [
        "Placeholder item 1",
        "Placeholder item 2",
        "Placeholder item 3",
        "Placeholder item 4",
      ],
    },
    {
      title: "Card 2",
      description: "This is a placeholder description for card 2.",
      icon: <Icon icon={Layers} size={46} />,
      cardContent: [
        "Placeholder item A",
        "Placeholder item B",
        "Placeholder item C",
        "Placeholder item D",
      ],
    },
    {
      title: "Card 3",
      description: "This is a placeholder description for card 3.",
      icon: <Icon icon={Layers} size={46} />,
      cardContent: [
        "Placeholder content X",
        "Placeholder content Y",
        "Placeholder content Z",
      ],
    },
  ];

  return (
    <section className="p-4 sm:p-10 md:p-20 mt-20">
      <h2>Title Component</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        deserunt, nemo dolores saepe laboriosam accusantium aut voluptatibus
        consectetur, omnis velit nam sed soluta, at eaque? Quas illo aperiam
        corrupti esse.
      </p>
      <div className="mt-20">
        <SkillCardGrid skills={skills} />
        <div className="mt-10 flex justify-end">
          <Button variant={"outline"}>View my projects</Button>
        </div>
      </div>
    </section>
  );
};
export default Skills;
