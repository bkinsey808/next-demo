import { createContext } from "react";

export const HoverMenuContext = createContext({
  activeHoverMenu: null as HTMLButtonElement | null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setActiveHoverMenu: (activeHoverMenu: HTMLButtonElement | null) => {},
});
