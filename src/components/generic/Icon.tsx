import { type LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  size?: number;
  color?: string;
  className?: string;
};

export const Icon = ({
  icon: IconComponent,
  size = 24,
  color = "var(--color-primary)",
  className,
}: IconProps) => {
  return <IconComponent size={size} color={color} className={className} />;
};
