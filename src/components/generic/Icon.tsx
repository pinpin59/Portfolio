import type { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  color?: string;
  className?: string;
  /** Description accessible de l'icône pour les lecteurs d'écran */
  ariaLabel?: string;
  /** Titre de l'icône qui apparaît au survol */
  title?: string;
  /** Si true, l'icône est purement décorative et sera ignorée par les lecteurs d'écran */
  decorative?: boolean;
  /** ID unique pour l'icône (utile pour les références) */
  id?: string;
  /** URL de destination si l'icône est cliquable */
  href?: string;
  /** Ouvre le lien dans un nouvel onglet */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /** Relation du lien (ex: "noopener noreferrer" pour les liens externes) */
  rel?: string;
  /** Fonction de callback au clic */
  onClick?: () => void;
  /** Classes CSS pour l'effet de survol */
  hoverClassName?: string;
}

export function Icon({
  icon: LucideIcon,
  size = 36,
  color,
  className = "text-foreground",
  ariaLabel,
  title,
  decorative = false,
  id,
  href,
  target,
  rel,
  onClick,
  hoverClassName = "",
}: IconProps) {
  const iconProps = {
    id,
    size,
    color,
    className: `${className} ${
      hoverClassName ? `transition-all duration-200 ${hoverClassName}` : ""
    }`,
    "aria-label": decorative ? undefined : ariaLabel,
    "aria-hidden": decorative ? true : undefined,
    role: decorative ? ("presentation" as const) : ("img" as const),
  };

  const IconElement = title ? (
    <span title={title}>
      <LucideIcon {...iconProps} />
    </span>
  ) : (
    <LucideIcon {...iconProps} />
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        onClick={onClick}
        className={`inline-block ${hoverClassName ? "group" : ""}`}
        aria-label={ariaLabel}
      >
        {IconElement}
      </a>
    );
  }

  // Si c'est un bouton cliquable
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`inline-block bg-transparent border-none p-0 cursor-pointer ${
          hoverClassName ? "group" : ""
        }`}
        aria-label={ariaLabel}
        type="button"
      >
        {IconElement}
      </button>
    );
  }

  // Icône simple
  return IconElement;
}
