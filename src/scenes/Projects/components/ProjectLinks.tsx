import { Icon } from "@/components/generic/Icon";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Github } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectLinksProps {
  githubUrl?: string;
  liveUrl?: string;
}
export function ProjectLinks({ githubUrl, liveUrl }: ProjectLinksProps) {
  return (
    <div className="space-y-4">
      {liveUrl && (
        <Button className="w-full" variant={"outline"} asChild>
          <a href={liveUrl}>
            <Icon icon={Eye} />
            Visit Project
          </a>
        </Button>
      )}

      {githubUrl && (
        <Button className="w-full" variant={"outline"} asChild>
          <a href={githubUrl}>
            <Icon icon={Github} />
            View on Github
          </a>
        </Button>
      )}

      <div className="bg-border h-[1px] w-full"></div>

      <Button className="w-full" variant={"outline"} asChild>
        <Link to="/projects">
          <Icon icon={ArrowLeft} />
          Back to Projects
        </Link>
      </Button>
    </div>
  );
}
