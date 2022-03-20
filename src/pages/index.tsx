import type { NextPage } from "next";

import { HomeContent } from "@/components/HomeContent";
import { setCssCustomProperties } from "@/theme/utils";

// client side only
if (typeof window !== "undefined") {
  setCssCustomProperties();
  // seems like tw-elements has to be imported like this because it references document
  // import("tw-elements");
}

const Home: NextPage = () => {
  return <HomeContent />;
};

export default Home;
