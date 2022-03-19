import { CheckCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { FC } from "react";
import { useTernaryDarkMode } from "usehooks-ts";

import {
  HoverMenu,
  MenuButtonComponentType,
  MenuItemComponentType,
} from "../HoverMenu";
import { ITEMS, ITEM_CONFIG, TernaryDarkModeEnum } from "./consts";
import { DarkModeMenuItemConfigData } from "./types";

const MenuButtonComponent: MenuButtonComponentType<TernaryDarkModeEnum> = ({
  activeKey,
}) => {
  const MenuButtonIcon = ITEM_CONFIG[activeKey].Icon;
  return <MenuButtonIcon className="h-5 w-5" />;
};

const MenuItemComponent: MenuItemComponentType<
  DarkModeMenuItemConfigData,
  TernaryDarkModeEnum
> = ({ itemKey, itemConfig, active, selected }) => {
  const { label, Icon } = itemConfig[itemKey];
  const activeAndSelected = active && selected;

  return (
    <>
      <CheckCircleIcon
        className={clsx("mr-2 h-5 w-5", {
          visible: activeAndSelected,
          invisible: !activeAndSelected,
        })}
      />
      <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
      {label}
    </>
  );
};

export const DarkModeHoverMenu: FC = () => {
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();
  const onSelect = (selectedKey: TernaryDarkModeEnum) => {
    setTernaryDarkMode(selectedKey);
  };

  return (
    <HoverMenu<DarkModeMenuItemConfigData, TernaryDarkModeEnum>
      activeKey={ternaryDarkMode as TernaryDarkModeEnum}
      items={ITEMS}
      itemConfig={ITEM_CONFIG}
      MenuButtonComponent={MenuButtonComponent}
      MenuItemComponent={MenuItemComponent}
      onSelect={onSelect}
      ariaLabel={"Select dark/light mode"}
    />
  );
};
