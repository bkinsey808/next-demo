import Image from "next/image";
import { FC, useRef, useState } from "react";

import { HoverMenuSimpleExample } from "../HoverMenu";
import { AnimatedHamburgerMenu } from "./AnimatedHamburgerMenu";

export const NavBar: FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex">
      <nav ref={navRef} className="flex w-full flex-col">
        <div className="flex">
          <AnimatedHamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
        <div className="inline-flex flex-row justify-start">
          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap justify-start">
              <HoverMenuSimpleExample />
            </div>
            <div className="flex flex-row flex-wrap justify-start">
              <HoverMenuSimpleExample />
            </div>
            <div className="flex flex-row flex-wrap justify-start">
              <HoverMenuSimpleExample />
            </div>
            <div className="flex flex-row flex-wrap justify-start">
              <HoverMenuSimpleExample />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
