import type { NextPage } from "next";

import { HomeContent } from "@/components/HomeContent";
import { setCssCustomProperties } from "@/theme/utils";

// client side only
if (typeof window !== "undefined") {
  setCssCustomProperties();
}

const Home: NextPage = () => {
  return <HomeContent />;
};

export default Home;
