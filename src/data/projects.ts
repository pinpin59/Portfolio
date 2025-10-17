import type { Project } from "@/types/Project";
import react from "@/assets/react.svg";
import waves from "@/assets/waves.svg";
// Base de données des projets
export const projectsData: Project[] = [
  {
    id: "1",
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "Mon site portfolio personnel avec React et TypeScript",
    image: react,
    tools: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    fullDescription:
      "Ce portfolio a été créé pour présenter mes projets et compétences en développement web. Il utilise les dernières technologies frontend pour offrir une expérience utilisateur moderne et responsive.",
    images: [react, waves],
    githubUrl: "https://github.com/votre-username/portfolio",
    liveUrl: "https://votre-portfolio.com",
  },
  {
    id: "2",
    slug: "e-commerce-app",
    title: "E-commerce App",
    description: "Application e-commerce complète avec panier et paiement",
    image: waves,
    tools: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    fullDescription:
      "Application e-commerce full-stack permettant aux utilisateurs de parcourir des produits, les ajouter au panier et effectuer des achats sécurisés.",

    githubUrl: "https://github.com/votre-username/ecommerce",
    liveUrl: "https://votre-ecommerce.com",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((project) => project.slug === slug);
};

export const getAllProjects = (): Project[] => {
  return projectsData;
};
