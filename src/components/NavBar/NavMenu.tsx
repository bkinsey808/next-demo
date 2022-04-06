import { Transition } from "@headlessui/react";
import clsx from "clsx";
import cntl from "cntl";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment } from "react";

import { HoverMenu } from "../HoverMenu";
import {
  MenuButtonComponentType,
  MenuItem,
  MenuItemComponentType,
  MenuItemsComponentType,
  TransitionComponentType,
  WrapperComponentType,
} from "../HoverMenu/types";
import { NavItem } from "./types";

export interface PrimaryNavItem {
  key: string;
  data: NavItemData;
  items: MenuItem<string, NavItemData>[];
}

export interface NavItemData {
  label: string;
}

const WrapperComponent: WrapperComponentType = ({ children }) => (
  <div className="relative inline-block">{children}</div>
);

const getMenuButtonComponent = (navItem: NavItem) => {
  const MenuButtonComponent: MenuButtonComponentType<
    string,
    NavItemData
  > = () => (
    <Link href={navItem.key}>
      <a
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
        {navItem.data.label}
      </a>
    </Link>
  );

  return MenuButtonComponent;
};

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
      divide-y-4
      divide-transparent
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

const MenuItemComponent: MenuItemComponentType<string, NavItemData> = ({
  item,
  active,
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
    {item?.data?.label}
  </div>
);

export const NavMenu: FC<{ navItem: NavItem }> = ({ navItem }) => {
  const router = useRouter();

  return (
    <HoverMenu
      activeKey={router.asPath}
      items={navItem.items}
      onSelect={(url) => {
        router.push(url);
      }}
      ariaLabel={"Select Link"}
      WrapperComponent={WrapperComponent}
      MenuButtonComponent={getMenuButtonComponent(navItem)}
      TransitionComponent={TransitionComponent}
      MenuItemsComponent={MenuItemsComponent}
      MenuItemComponent={MenuItemComponent}
    />
  );
};
