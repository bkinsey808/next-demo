/* istanbul ignore file */
import type { AppProps } from "next/app";

import { HoverMenuContext, useHoverMenuContext } from "@/components/HoverMenu";
import { NavBar } from "@/components/NavBar";
import { setCssCustomProperties } from "@/theme/utils";

import "../styles/globals.css";

// client side only
if (typeof window !== "undefined") {
  setCssCustomProperties();
}

function MyApp({ Component, pageProps }: AppProps) {
  const { activeHoverMenu, setActiveHoverMenu } = useHoverMenuContext();

  return (
    <HoverMenuContext.Provider value={{ activeHoverMenu, setActiveHoverMenu }}>
      <NavBar />
      <Component {...pageProps} />
    </HoverMenuContext.Provider>
  );
}

export default MyApp;
