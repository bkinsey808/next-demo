import { DesktopComputerIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";

import { MenuItemConfig } from "../HoverMenu";
import { DarkModeMenuItemConfigData } from "./types";

export const enum TernaryDarkModeEnum {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

export const ITEMS: TernaryDarkModeEnum[] = [
  TernaryDarkModeEnum.DARK,
  TernaryDarkModeEnum.SYSTEM,
  TernaryDarkModeEnum.LIGHT,
];

export const ITEM_CONFIG: MenuItemConfig<
  DarkModeMenuItemConfigData,
  TernaryDarkModeEnum
> = {
  [TernaryDarkModeEnum.LIGHT]: {
    Icon: SunIcon,
    label: "Light Mode",
  },
  [TernaryDarkModeEnum.SYSTEM]: {
    Icon: DesktopComputerIcon,
    label: "System Light/Dark Mode",
  },
  [TernaryDarkModeEnum.DARK]: {
    Icon: MoonIcon,
    label: "Dark Mode",
  },
} as const;
