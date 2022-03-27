import { useState } from "react";

export const useHoverMenuContext = () => {
  const [activeHoverMenu, setActiveHoverMenu] =
    useState<HTMLButtonElement | null>(null);

  return {
    activeHoverMenu,
    setActiveHoverMenu: (innerActiveHoverMenu: HTMLButtonElement | null) => {
      setActiveHoverMenu(innerActiveHoverMenu);
    },
  };
};
