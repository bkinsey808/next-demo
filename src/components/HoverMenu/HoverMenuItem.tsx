import { Menu } from "@headlessui/react";
import clsx from "clsx";
import { useEffect, useRef } from "react";

import { MenuItemComponentType, MenuItemConfig } from "./types";

export const HoverMenuItem = <MenuItemConfigData,>({
  activeKey,
  itemKey,
  itemConfig,
  getOnMenuItemButtonClick,
  MenuItemComponent,
}: {
  activeKey: string;
  itemKey: string;
  itemConfig: MenuItemConfig<MenuItemConfigData>;
  getOnMenuItemButtonClick: (key: string) => () => void;
  MenuItemComponent: MenuItemComponentType<MenuItemConfigData>;
}) => {
  const activeAndSelected = activeKey === itemKey;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeAndSelected) {
      buttonRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Menu.Item key={itemKey}>
      {({ active }) => (
        <button
          ref={buttonRef}
          onClick={getOnMenuItemButtonClick(itemKey)}
          className={clsx(
            `
              group 
              flex 
              rounded-md 
              items-center 
              w-full 
              text-sm 
              px-2 py-2 
              focus:outline-none focus-visible:outline-none
            `,
            {
              "bg-violet-500 text-white": active,
              "text-gray-900": !active,
            }
          )}
        >
          <MenuItemComponent
            itemKey={itemKey}
            itemConfig={itemConfig}
            active={active}
            selected={activeAndSelected}
          />
        </button>
      )}
    </Menu.Item>
  );
};
