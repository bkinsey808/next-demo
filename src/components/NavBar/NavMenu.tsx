import { Transition } from "@headlessui/react";
import clsx from "clsx";
import cntl from "cntl";
import { FC, Fragment, useState } from "react";

import { HoverMenu } from "../HoverMenu";
import {
  MenuButtonComponentType,
  MenuItem,
  MenuItemComponentType,
  MenuItemsComponentType,
  TransitionComponentType,
  WrapperComponentType,
} from "../HoverMenu/types";

export interface NavItemData {
  label: string;
}

export const enum ColorEnum {
  GREEN = "green",
  YELLOW = "yellow",
  RED = "red",
}

export const ITEMS: readonly MenuItem<ColorEnum, NavItemData>[] = [
  { key: ColorEnum.GREEN, data: { label: "Green" } },
  { key: ColorEnum.YELLOW, data: { label: "Yellow" } },
  { key: ColorEnum.RED, data: { label: "Red" } },
] as const;

const WrapperComponent: WrapperComponentType = ({ children }) => (
  <div className="relative inline-block">{children}</div>
);

const MenuButtonComponent: MenuButtonComponentType<ColorEnum, NavItemData> = ({
  item,
}) => (
  <div
    className="
      justify-left
      inline-flex 
      w-full
      rounded-md 
      bg-black 
      bg-opacity-20 
      px-4 py-2
      text-sm 
      font-medium 
      text-white 
      hover:bg-opacity-30                
      focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
  "
  >
    {item?.data?.label}
  </div>
);

const TransitionComponent: TransitionComponentType = ({
  children,
  isActive,
}) => (
  <Transition
    show={isActive}
    as={Fragment}
    enter={cntl`transition ease-out duration-100`}
    enterFrom={cntl`transform opacity-0 scale-95`}
    enterTo={cntl`transform opacity-100 scale-100`}
    leave={cntl`transition ease-in duration-75`}
    leaveFrom={cntl`transform opacity-100 scale-100`}
    leaveTo={cntl`transform opacity-0 scale-95`}
  >
    {children}
  </Transition>
);

const MenuItemsComponent: MenuItemsComponentType = ({ children }) => (
  <div
    className="
      left-0
      inline-flex 
      w-full
      origin-top-right 
      flex-col
      divide-y
      divide-gray-100
      rounded-md
      bg-white
      px-1
      py-1
      shadow-lg
      ring-1
      ring-black
      ring-opacity-5
      focus:outline-none sm:absolute sm:z-10
      sm:w-64
    "
  >
    {children}
  </div>
);

const MenuItemComponent: MenuItemComponentType<ColorEnum, NavItemData> = ({
  item,
  active,
  selected,
}) => (
  <div
    className={clsx(
      `
      overflow-hidden
      whitespace-normal
      break-words
      rounded-md
      px-2
      py-2 text-sm
    `,
      {
        "bg-violet-500 text-white": active,
        "text-gray-900": !active,
      }
    )}
  >
    {item?.data?.label}: {JSON.stringify({ active, selected })}
  </div>
);

export const NavMenu: FC = () => {
  const [activeColor, setActiveColor] = useState<ColorEnum>(ColorEnum.GREEN);

  return (
    <HoverMenu
      activeKey={activeColor}
      items={ITEMS}
      onSelect={setActiveColor}
      ariaLabel={"Select Color"}
      WrapperComponent={WrapperComponent}
      MenuButtonComponent={MenuButtonComponent}
      TransitionComponent={TransitionComponent}
      MenuItemsComponent={MenuItemsComponent}
      MenuItemComponent={MenuItemComponent}
    />
  );
};
