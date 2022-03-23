import { Menu } from "@headlessui/react";
import clsx from "clsx";

import { MenuItemComponentType, MenuItemConfig } from "./types";
import { useHoverMenuItem } from "./useHoverMenuItem";

export const HoverMenuItem = <
  MenuItemConfigData,
  MenuItemKeyType extends string
>({
  activeKey,
  itemKey,
  itemConfig,
  getOnMenuItemButtonClick,
  MenuItemComponent,
}: {
  activeKey: MenuItemKeyType;
  itemKey: MenuItemKeyType;
  itemConfig: MenuItemConfig<MenuItemConfigData, MenuItemKeyType>;
  getOnMenuItemButtonClick: (key: MenuItemKeyType) => () => void;
  MenuItemComponent: MenuItemComponentType<MenuItemConfigData, MenuItemKeyType>;
}) => {
  const { buttonRef, selected } = useHoverMenuItem<MenuItemKeyType>({
    activeKey,
    itemKey,
  });

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
          <MenuItemComponent
            itemKey={itemKey}
            itemConfig={itemConfig}
            active={active}
            selected={selected}
          />
        </button>
      )}
    </Menu.Item>
  );
};
