import { FC } from "react";

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
  return (
    <HoverMenu<ConfigData, OptionEnum>
      activeKey={OptionEnum.RED}
      items={ITEMS}
      itemConfig={ITEM_CONFIG}
      MenuButtonComponent={({ activeKey }) => {
        return <div>{activeKey}</div>;
      }}
      MenuItemComponent={({ itemKey, itemConfig, active, selected }) => {
        const { label } = itemConfig[itemKey];
        const activeAndSelected = active && selected;

        return (
          <div>
            {label}: {activeAndSelected}
          </div>
        );
      }}
      ariaLabel={"Select "}
    />
  );
};
