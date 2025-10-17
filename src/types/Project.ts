export interface Project {
  id: string; // ✅ Identifiant unique pour la route
  slug: string; // ✅ URL-friendly identifier
  image: string;
  title: string;
  description: string;
  tools: string[];
  // ✅ Données supplémentaires pour la page détaillée
  fullDescription?: string;
  githubUrl?: string;
  liveUrl?: string;
  images?: string[]; // Galerie d'images
}
