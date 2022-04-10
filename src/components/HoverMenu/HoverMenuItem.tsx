import { Menu } from "@headlessui/react";

import { MenuItem, MenuItemComponentType } from "./types";
import { useHoverMenuItem } from "./useHoverMenuItem";

export const HoverMenuItem = <MenuItemKey extends string, MenuItemData>({
  activeKey,
  item,
  getOnMenuItemButtonClick,
  MenuItemComponent,
}: {
  activeKey?: MenuItemKey;
  item: MenuItem<MenuItemKey, MenuItemData>;
  getOnMenuItemButtonClick: (key: MenuItemKey) => () => void;
  MenuItemComponent: MenuItemComponentType<MenuItemKey, MenuItemData>;
}) => {
  const itemKey = item.key;
  const { buttonRef, selected } = useHoverMenuItem<MenuItemKey>({
    activeKey,
    itemKey,
  });

  return (
    <Menu.Item key={item.key}>
      {({ active }) => (
        <button
          ref={buttonRef}
          className="focus:outline-none focus-visible:outline-none"
          onClick={() => {
            getOnMenuItemButtonClick(itemKey)();
          }}
        >
          <MenuItemComponent item={item} active={active} selected={selected} />
        </button>
      )}
    </Menu.Item>
  );
};
