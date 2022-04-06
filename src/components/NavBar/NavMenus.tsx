import { FC } from "react";

import { NavMenu } from "../NavBar/NavMenu";
import { NavItem } from "./types";

export const NavMenus: FC<{ navItems: NavItem[] }> = ({ navItems }) => (
  <div className="absolute right-0 mt-spacingHeaderHeight flex w-32 flex-col sm:relative sm:mt-0 sm:flex-row">
    {navItems.map((navItem) => (
      <NavMenu key={navItem.key} navItem={navItem} />
    ))}
  </div>
);
