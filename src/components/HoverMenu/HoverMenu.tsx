import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

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
  MenuItemComponent,
  onSelect,
  ariaLabel,
}: {
  activeKey: MenuItemKeyType;
  items: MenuItemKeyType[];
  itemConfig: MenuItemConfig<MenuItemConfigData, MenuItemKeyType>;
  MenuButtonComponent: MenuButtonComponentType<MenuItemKeyType>;
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
    width,
  } = useHoverMenu({ onSelect });

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div onMouseDown={onMouseDown}>
        <Menu.Button
          aria-label={ariaLabel}
          as="button"
          ref={menuButtonRef}
          onFocus={onFocus}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="
            inline-flex 
            w-full 
            justify-center
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
          <MenuButtonComponent activeKey={activeKey} />
        </Menu.Button>
      </div>
      <Transition
        show={isActive}
        as={Fragment}
        enter="transition ease-out duration-1000"
        enterFrom="transform opacity-0 scale-50"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={`
            absolute
            top-0 
            z-10 
            w-64 
            origin-top-left 
            divide-y 
            divide-gray-100 
            rounded-md 
            bg-white 
            shadow-lg ring-1 ring-black 
            ring-opacity-5
            focus:outline-none
          `}
          style={{ left: `${width}px` }}
        >
          <div className="px-1 py-1">
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
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
