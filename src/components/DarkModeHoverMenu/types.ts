import { SVGProps } from "react";

export type SVGIconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export interface DarkModeMenuItemConfigData {
  Icon: SVGIconType;
  label: string;
}
