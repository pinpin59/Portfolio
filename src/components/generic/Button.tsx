import * as React from "react";
import { Button as ShadButton } from "@/components/ui/button";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <ShadButton type={type} onClick={onClick} className={`${className}`}>
      {title}
    </ShadButton>
  );
};
