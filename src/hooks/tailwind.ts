import create from "@kodingdotninja/use-tailwind-breakpoint";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config = resolveConfig(tailwindConfig as any);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const { useBreakpoint } = create(config.theme.screens as any);
