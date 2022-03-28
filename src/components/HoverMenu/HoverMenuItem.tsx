import { Menu } from "@headlessui/react";

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
          className="focus:outline-none focus-visible:outline-none"
          onClick={getOnMenuItemButtonClick(itemKey)}
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
