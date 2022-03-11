import { DESIGN_TOKENS } from "./designTokens";

/** iterate thru design tokens and create css variables for each of them */
export const setCssVariablesFromDesignTokens = () => {
  const rootStyle = document.documentElement.style;

  for (const [key, value] of Object.entries(DESIGN_TOKENS)) {
    rootStyle.setProperty(`--${key}`, value);
  }
};
