import DESIGN_TOKENS from "./designTokens";

export type DesignTokens = keyof typeof DESIGN_TOKENS;

/** iterate thru design tokens and create css variables for each of them */
export const setCssCustomProperties = () => {
  const rootStyle = document.documentElement.style;

  for (const [key, value] of Object.entries(DESIGN_TOKENS)) {
    rootStyle.setProperty(`--${key}`, value);
  }
};
