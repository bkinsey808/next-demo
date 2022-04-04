import { DesktopComputerIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";

import { MenuItem } from "../HoverMenu/types";
import { DarkModeMenuItemConfigData } from "./types";

export const enum TernaryDarkModeEnum {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

export const ITEMS: readonly MenuItem<
  TernaryDarkModeEnum,
  DarkModeMenuItemConfigData
>[] = [
  { key: TernaryDarkModeEnum.DARK, data: { Icon: MoonIcon, label: "Dark" } },
  {
    key: TernaryDarkModeEnum.SYSTEM,
    data: { Icon: DesktopComputerIcon, label: "System" },
  },
  { key: TernaryDarkModeEnum.LIGHT, data: { Icon: SunIcon, label: "Light" } },
];
