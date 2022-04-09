import clsx from "clsx";
import { FC } from "react";

import { NavMenu } from "../NavBar/NavMenu";
import { NavItem } from "./types";

export const NavMenus: FC<{ navItems: NavItem[]; isOpen: boolean }> = ({
  navItems,
  isOpen,
}) => {
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
          sm:mt-0 
          sm:flex-row
        `,
        {
          hidden: !isOpen,
        }
      )}
    >
      {navItems.map((navItem) => (
        <NavMenu key={navItem.key} navItem={navItem} />
      ))}
    </div>
  );
};
