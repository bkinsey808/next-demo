import Image from "next/image";

import { HoverMenuSimpleExample } from "../HoverMenu/HoverMenuSimpleExample";

export const NavBar = () => {
  return (
    <div className="flex">
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <div>
        <HoverMenuSimpleExample />
        <HoverMenuSimpleExample />
        <HoverMenuSimpleExample />
        <HoverMenuSimpleExample />
      </div>
    </div>
  );
};
