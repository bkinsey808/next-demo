import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";
import { useTernaryDarkMode } from "usehooks-ts";

import { setCssCustomProperties } from "@/theme/utils";

// client side only
if (typeof window !== "undefined") {
  setCssCustomProperties();
}

const Body: FC = () => {
  const { isDarkMode } = useTernaryDarkMode();

  return (
    <body className={isDarkMode ? "dark" : ""}>
      <Main />
      <NextScript />
    </body>
  );
};

const Document: FC = () => {
  return (
    <Html lang="en" className="scrollbar-gutter-stable">
      <Head />
      <Body />
    </Html>
  );
};

export default Document;
