import { DesktopComputerIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";

export const enum TernaryDarkModeEnum {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

export const ITEMS = [
  TernaryDarkModeEnum.DARK,
  TernaryDarkModeEnum.SYSTEM,
  TernaryDarkModeEnum.LIGHT,
] as const;

export const ITEM_CONFIG = {
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

export const TIMEOUT_DURATION = 200 as const;
