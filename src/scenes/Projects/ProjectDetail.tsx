import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "@/data/projects";
import { ProjectCarousel } from "./components/ProjectCarousel";
import { ProjectInfo } from "./components/ProjectInfo";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <p className="text-gray-600 mb-4">
            Le projet que vous cherchez n'existe pas.
          </p>
          <Link to="/projects" className="text-blue-600 hover:text-blue-800">
            ← Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 pt-20 flex justify-center items-center">
      <div className="flex flex-col 2xl:flex-row max-w-7xl mx-auto w-full gap-11">
        {/* Section Carousel */}
        <div className="flex justify-center items-center  rounded-lg relative w-full 2xl:basis-[70%] aspect-[4/3]">
          <ProjectCarousel project={project} />
        </div>

        <ProjectInfo project={project} />
      </div>
    </div>
  );
};

export default ProjectDetail;
