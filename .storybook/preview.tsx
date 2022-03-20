import * as NextImage from "next/image";

import "../src/styles/globals.css";
import { setCssCustomProperties } from "../src/theme/utils";

export const decorators = [
  (Story) => {
    // set css custom properties for every story
    setCssCustomProperties();
    return <Story />;
  },
];

export const parameters = {
  // @see https://storybook.js.org/docs/react/essentials/actions
  actions: { argTypesRegex: "^on[A-Z].*" },
  // @see https://storybook.js.org/docs/react/essentials/controls#custom-control-type-matchers
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// @see https://storybook.js.org/blog/get-started-with-storybook-and-next-js/
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
