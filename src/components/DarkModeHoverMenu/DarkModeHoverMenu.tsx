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
  return <>{MenuButtonIcon && <MenuButtonIcon className="w-5 h-5" />}</>;
};

const MenuItemComponent: MenuItemComponentType<DarkModeMenuItemConfigData> = ({
  itemKey,
  itemConfig,
  active,
  selected,
}) => {
  const { label, Icon } = itemConfig[itemKey];
  const activeAndSelected = active && selected;

  return (
    <>
      <CheckCircleIcon
        className={clsx("w-5 h-5 mr-2", {
          visible: activeAndSelected,
          invisible: !activeAndSelected,
        })}
      />
      <Icon className="w-5 h-5 mr-2" aria-hidden="true" />
      {label}
    </>
  );
};

export const DarkModeHoverMenu: FC = () => {
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();
  const onSelect = (selectedKey: string) => {
    setTernaryDarkMode(selectedKey as TernaryDarkModeEnum);
  };

  return (
    <HoverMenu<DarkModeMenuItemConfigData, TernaryDarkModeEnum>
      activeKey={ternaryDarkMode as TernaryDarkModeEnum}
      items={ITEMS}
      itemConfig={ITEM_CONFIG}
      MenuButtonComponent={MenuButtonComponent}
      MenuItemComponent={MenuItemComponent}
      onSelect={onSelect}
    />
  );
};
