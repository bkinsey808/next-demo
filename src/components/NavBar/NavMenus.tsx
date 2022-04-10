import clsx from "clsx";
import { FC } from "react";

import { useBreakpoint } from "@/hooks/tailwind";

import { NavMenu } from "../NavBar/NavMenu";
import { NavItem } from "./types";

export const NavMenus: FC<{ navItems: NavItem[]; isOpen: boolean }> = ({
  navItems,
  isOpen,
}) => {
  const isSmBreakpoint = useBreakpoint("sm");

  return (
    <div
      className={clsx(
        `
          absolute 
          right-0 
          top-spacingHeaderHeight 
          flex
          w-32 
          flex-col 
          sm:relative 
          sm:top-0 
          sm:mt-0
          sm:flex-row
        `,
        {
          hidden: !isOpen && !isSmBreakpoint,
        }
      )}
    >
      {navItems.map((navItem) => (
        <NavMenu key={navItem.key} navItem={navItem} />
      ))}
    </div>
  );
};
