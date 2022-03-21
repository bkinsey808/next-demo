import { FC, useState } from "react";

import { HoverMenu } from "./HoverMenu";
import { MenuItemConfig } from "./types";

export interface ConfigData {
  label: string;
}

export const enum ColorEnum {
  GREEN = "green",
  YELLOW = "yellow",
  RED = "red",
}

export const ITEMS: ColorEnum[] = [
  ColorEnum.GREEN,
  ColorEnum.YELLOW,
  ColorEnum.RED,
];

export const ITEM_CONFIG: MenuItemConfig<ConfigData, ColorEnum> = {
  [ColorEnum.GREEN]: {
    label: "Green",
  },
  [ColorEnum.RED]: {
    label: "Red",
  },
  [ColorEnum.YELLOW]: {
    label: "Yellow",
  },
} as const;

export const HoverMenuSimpleExample: FC = () => {
  const [activeColor, setActiveColor] = useState<ColorEnum>(ColorEnum.GREEN);

  return (
    <HoverMenu<ConfigData, ColorEnum>
      activeKey={activeColor}
      items={ITEMS}
      itemConfig={ITEM_CONFIG}
      onSelect={(key) => setActiveColor(key)}
      ariaLabel={"Select Color"}
      MenuButtonComponent={({ activeKey }) => (
        <div>{ITEM_CONFIG[activeKey].label}</div>
      )}
      MenuItemComponent={({ itemKey, itemConfig, active, selected }) => (
        <div>
          {itemConfig[itemKey].label}: {JSON.stringify(active && selected)}
        </div>
      )}
    />
  );
};
