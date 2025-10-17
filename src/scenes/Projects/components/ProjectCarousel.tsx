import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { Project } from "@/types/Project";

interface ProjectCarouselProps {
  project: Project;
}

export function ProjectCarousel({ project }: ProjectCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-play avec retour au début
  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Écouter les changements d'image pour mettre à jour le background
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });

    const intervalId = setInterval(() => {
      const totalSlides = api.scrollSnapList().length;
      const currentSlide = api.selectedScrollSnap();

      if (currentSlide === totalSlides - 1) {
        // Si on est à la dernière image, revenir à la première
        api.scrollTo(0);
      } else {
        // Sinon, passer à l'image suivante
        api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  // Si aucune image n'est fournie, on n'affiche rien
  if (!project.images || project.images.length === 0) {
    return null;
  }

  const currentImage = project.images[currentIndex];

  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-lg border-1  transition-all duration-500 ease-in-out relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 rounded-lg"
        style={{
          backgroundImage: currentImage ? `url(${currentImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: currentImage
            ? "blur(120px) saturate(2) brightness(0.4) contrast(1.5)"
            : "none",
        }}
      />

      <Carousel setApi={setApi} className="w-full relative">
        <CarouselContent>
          {project.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="p-0">
                  <CardContent className="p-0">
                    <div className="w-full h-[400px] flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-4 mt-4">
          <CarouselPrevious className="relative left-0 top-0 translate-y-0" />
          <CarouselNext className="relative right-0 top-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
