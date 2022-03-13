import type { NextPage } from "next";
import HomeContent from "@/components/HomeContent";

import { setCssVariablesFromDesignTokens } from "@/theme/utils";

// client side only
if (typeof window !== "undefined") {
  setCssVariablesFromDesignTokens();
}

const Home: NextPage = () => {
  return <HomeContent />;
};

export default Home;
