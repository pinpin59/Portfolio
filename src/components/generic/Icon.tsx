import type { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  color?: string;
  className?: string;
}

export function Icon({
  icon: LucideIcon,
  size = 36,
  color,
  className = "text-foreground",
}: IconProps) {
  return <LucideIcon size={size} color={color} className={`${className}`} />;
}
