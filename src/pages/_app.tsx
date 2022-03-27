/* istanbul ignore file */
import type { AppProps } from "next/app";

import { HoverMenuContext, useHoverMenuContext } from "@/components/HoverMenu";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { activeHoverMenu, setActiveHoverMenu } = useHoverMenuContext();

  return (
    <HoverMenuContext.Provider value={{ activeHoverMenu, setActiveHoverMenu }}>
      <Component {...pageProps} />
    </HoverMenuContext.Provider>
  );
}

export default MyApp;
