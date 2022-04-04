import Image from "next/image";
import { FC, useRef, useState } from "react";

import { DarkModeHoverMenu } from "../DarkModeHoverMenu";
import { AnimatedHamburgerMenu } from "./AnimatedHamburgerMenu";
import { NavMenus } from "./NavMenus";

export const NavBar: FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex">
      <nav ref={navRef} className="flex w-full flex-row">
        <div className="flex">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
        <NavMenus />
        <div className="ml-auto flex">
          <DarkModeHoverMenu />
          <AnimatedHamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </header>
  );
};
