import Image from "next/image";
import { FC, useRef, useState } from "react";

import { DarkModeHoverMenu } from "../DarkModeHoverMenu";
import { AnimatedHamburgerMenu } from "./AnimatedHamburgerMenu";
import { NavMenus } from "./NavMenus";
import { NavItem } from "./types";

const navItems: NavItem[] = [
  {
    key: "/",
    data: { label: "Home" },
    items: [],
  },
  {
    key: "/features",
    data: { label: "Features" },
    items: [
      {
        key: "/features/nextjs",
        data: { label: "NextJs" },
      },
      {
        key: "/features/typescript",
        data: { label: "TypeScript" },
      },
    ],
  },
];

export const NavBar: FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex h-spacingHeaderHeight">
      <nav ref={navRef} className="relative flex w-full flex-row">
        <div className="flex">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
        <NavMenus isOpen={isOpen} navItems={navItems} />
        <div className="ml-auto flex">
          <DarkModeHoverMenu />
          <AnimatedHamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </header>
  );
};
