import { Menu, Transition } from "@headlessui/react";
import cntl from "cntl";
import { FC, Fragment } from "react";

import { HoverMenuItem } from "./HoverMenuItem";
import {
  MenuButtonComponentType,
  MenuItemComponentType,
  MenuItemConfig,
} from "./types";
import { useHoverMenu } from "./useHoverMenu";

export const HoverMenu = <MenuItemConfigData, MenuItemKeyType extends string>({
  items,
  itemConfig,
  activeKey,
  MenuButtonComponent,
  MenuItemsComponent,
  MenuItemComponent,
  onSelect,
  ariaLabel,
}: {
  activeKey: MenuItemKeyType;
  items: MenuItemKeyType[];
  itemConfig: MenuItemConfig<MenuItemConfigData, MenuItemKeyType>;
  MenuButtonComponent: MenuButtonComponentType<MenuItemKeyType>;
  MenuItemsComponent: FC;
  MenuItemComponent: MenuItemComponentType<MenuItemConfigData, MenuItemKeyType>;
  onSelect?: (key: MenuItemKeyType) => void;
  ariaLabel: string;
}) => {
  const {
    onMouseEnter,
    onMouseLeave,
    isActive,
    onMouseDown,
    onFocus,
    getOnMenuItemButtonClick,
    menuButtonRef,
  } = useHoverMenu({ onSelect });

  return (
    <Menu as={Fragment}>
      <Menu.Button
        aria-label={ariaLabel}
        as="button"
        ref={menuButtonRef}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        className="w-full"
      >
        <MenuButtonComponent activeKey={activeKey} />
      </Menu.Button>
      <Transition
        show={isActive}
        as={"div"}
        className="absolute"
        enter={cntl`transition ease-out duration-100`}
        enterFrom={cntl`transform opacity-0 scale-95`}
        enterTo={cntl`transform opacity-100 scale-100`}
        leave={cntl`transition ease-in duration-75`}
        leaveFrom={cntl`transform opacity-100 scale-100`}
        leaveTo={cntl`transform opacity-0 scale-95`}
      >
        <Menu.Items onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <MenuItemsComponent>
            {items.map((itemKey) => {
              return (
                <HoverMenuItem
                  key={itemKey}
                  itemKey={itemKey}
                  activeKey={activeKey}
                  itemConfig={itemConfig}
                  getOnMenuItemButtonClick={getOnMenuItemButtonClick}
                  MenuItemComponent={MenuItemComponent}
                />
              );
            })}
          </MenuItemsComponent>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
