import * as NextImage from "next/image";

import "../src/styles/globals.css";
import { setCssCustomProperties } from "../src/theme/utils";

export const decorators = [
  (Story) => {
    setCssCustomProperties();
    return <Story />;
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
