import type { Project } from "@/types/Project";
import theBalconyOne from "@/assets/projects/the-balcony-1.webp";
import theBalconyTwo from "@/assets/projects/the-balcony-2.webp";
import construction from "@/assets/construction.png";
// Base de données des projets
export const projectsData: Project[] = [
  {
    id: "1",
    slug: "portfolio-le-balcon",
    title: "The Balcony",
    description:
      "Website for a Parisian fine dining restaurant with an interactive menu and online reservation.",
    image: theBalconyOne,
    images: [theBalconyOne, theBalconyTwo],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    fullDescription:
      "Website for Le Balcon, a fictional fine dining restaurant perched above Paris. The project features a bilingual experience (FR/EN), an interactive menu with starters, mains and desserts, and a reservation form. The interface embraces a clean and modern aesthetic in line with the restaurant's high-end culinary identity.",
    githubUrl: "https://github.com/pinpin59/le-balcon-restaurant",
    liveUrl: "https://le-balcon-restaurant.vercel.app/",
  },
  {
    id: "2",
    slug: "e-commerce-app",
    title: "E-commerce App",
    description:
      "Full-stack e-commerce application with cart and secure payment.",
    image: construction,
    images: [construction],
    tools: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    fullDescription:
      "Full-stack e-commerce application allowing users to browse products, add them to a cart, and complete secure purchases.",

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
