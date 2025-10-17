import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { ModeToggle } from "../ModeToggle";

const Navbar: React.FC = () => {
  return (
    <NavigationMenu className="bg-[rgb(var(--color-bg))] text-[rgb(var(--color-text))] shadow-md dark:shadow-lg py-3">
      <NavigationMenuList className="gap-6">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/">Home</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/projects">Projects</a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="#contact">Contact</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div>
        <ModeToggle />
      </div>
    </NavigationMenu>
  );
};

export default Navbar;
