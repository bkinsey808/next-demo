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
  return (
    <MenuButtonIcon
      className="
        justify-left
        relative
        inline-flex 
        h-7
        rounded-md 
        bg-black 
        bg-opacity-20 px-4
        py-2 
        text-left 
        text-sm 
        font-medium                
        text-white hover:bg-opacity-30 focus-visible:ring-2        
        focus-visible:ring-white focus-visible:ring-opacity-75
      "
    />
  );
};

const MenuItemsComponent: FC = ({ children }) => (
  <div
    className="
      absolute
      left-0
      z-10 mt-2
      flex
      w-64 
      origin-top-right 
      flex-col 
      divide-y 
      divide-gray-100 
      rounded-md 
      bg-white 
      px-1 
      py-1 
      shadow-lg 
      ring-1 ring-black ring-opacity-5 
      focus:outline-none          
    "
  >
    {children}
  </div>
);

const MenuItemComponent: MenuItemComponentType<
  DarkModeMenuItemConfigData,
  TernaryDarkModeEnum
> = ({ itemKey, itemConfig, active, selected }) => {
  const { label, Icon } = itemConfig[itemKey];
  const activeAndSelected = active && selected;

  return (
    <div
      className={clsx(
        `
        group 
        flex 
        w-full 
        items-center 
        rounded-md 
        px-2 
        py-2 text-sm 
        focus:outline-none focus-visible:outline-none
      `,
        {
          "bg-violet-500 text-white": active,
          "text-gray-900": !active,
        }
      )}
    >
      <CheckCircleIcon
        className={clsx("mr-2 h-5 w-5", {
          visible: activeAndSelected,
          invisible: !activeAndSelected,
        })}
      />
      <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
      {label}
    </div>
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
      MenuItemsComponent={MenuItemsComponent}
      MenuItemComponent={MenuItemComponent}
      onSelect={onSelect}
      ariaLabel={"Select dark/light mode"}
    />
  );
};
