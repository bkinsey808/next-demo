import { FC, useState } from "react";

import { HoverMenu } from "./HoverMenu";
import { MenuItemConfig } from "./types";

export interface ConfigData {
  label: string;
}

export const enum OptionEnum {
  GREEN = "green",
  YELLOW = "yellow",
  RED = "red",
}

export const ITEMS: OptionEnum[] = [
  OptionEnum.GREEN,
  OptionEnum.YELLOW,
  OptionEnum.RED,
];

export const ITEM_CONFIG: MenuItemConfig<ConfigData, OptionEnum> = {
  [OptionEnum.GREEN]: {
    label: "Green",
  },
  [OptionEnum.RED]: {
    label: "Red",
  },
  [OptionEnum.YELLOW]: {
    label: "Yellow",
  },
} as const;

export const HoverMenuSimpleExample: FC = () => {
  const [activeColor, setActiveColor] = useState<OptionEnum>(OptionEnum.GREEN);

  return (
    <HoverMenu<ConfigData, OptionEnum>
      activeKey={activeColor}
      items={ITEMS}
      itemConfig={ITEM_CONFIG}
      onSelect={(key) => setActiveColor(key)}
      ariaLabel={"Select Color"}
      MenuButtonComponent={({ activeKey }) => <div>{activeKey}</div>}
      MenuItemComponent={({ itemKey, itemConfig, active, selected }) => (
        <div>
          {itemConfig[itemKey]}: {JSON.stringify(active && selected)}
        </div>
      )}
    />
  );
};
