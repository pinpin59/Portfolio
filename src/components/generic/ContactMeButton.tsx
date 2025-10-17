import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Icon } from "./Icon";

interface ContactMeButtonProps {
  /** Classes CSS personnalisées pour le bouton */
  className?: string;
  /** Couleur de l'icône */
  iconColor?: string;
  /** Taille de l'icône */
  iconSize?: number;
  /** Email de destination */
  email?: string;
  /** Texte du bouton */
  text?: string;
  /** Variante du bouton */
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export const ContactMeButton = ({
  className = "",
  iconColor,
  iconSize = 18,
  email = "kevinpintar59160@gmail.com",
  text = "Contact me",
  variant = "outline",
}: ContactMeButtonProps) => {
  return (
    <Button variant={variant} className={className} asChild>
      <a href={`mailto:${email}`} className="flex items-center gap-2">
        <Icon icon={Mail} color={iconColor} size={iconSize} />
        {text}
      </a>
    </Button>
  );
};
