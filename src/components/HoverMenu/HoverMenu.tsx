import { Menu } from "@headlessui/react";
import { Fragment } from "react";

import { DefaultTransitionComponent } from "./DefaultTransitionComponent";
import { HoverMenuItem } from "./HoverMenuItem";
import {
  MenuButtonComponentType,
  MenuItem,
  MenuItemComponentType,
  MenuItemsComponentType,
  TransitionComponentType,
  WrapperComponentType,
} from "./types";
import { useHoverMenu } from "./useHoverMenu";

interface Props<MenuItemKey extends string, MenuItemData> {
  activeKey?: MenuItemKey;
  items: readonly MenuItem<MenuItemKey, MenuItemData>[];
  WrapperComponent?: WrapperComponentType;
  MenuButtonComponent: MenuButtonComponentType<MenuItemKey, MenuItemData>;
  TransitionComponent?: TransitionComponentType;
  MenuItemsComponent: MenuItemsComponentType;
  MenuItemComponent: MenuItemComponentType<MenuItemKey, MenuItemData>;
  onSelect?: (key: MenuItemKey) => void;
  ariaLabel: string;
}

export const HoverMenu: <MenuItemKey extends string, MenuItemData>(
  props: Props<MenuItemKey, MenuItemData>
) => JSX.Element = <MenuItemKey extends string, MenuItemData>({
  items,
  activeKey,
  WrapperComponent = Fragment,
  MenuButtonComponent,
  TransitionComponent = DefaultTransitionComponent,
  MenuItemsComponent,
  MenuItemComponent,
  onSelect,
  ariaLabel,
}: Props<MenuItemKey, MenuItemData>) => {
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
    <WrapperComponent>
      <Menu as={Fragment}>
        <Menu.Button
          aria-label={ariaLabel}
          as="button"
          ref={menuButtonRef}
          onFocus={onFocus}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseDown={onMouseDown}
        >
          <MenuButtonComponent
            activeKey={activeKey}
            item={items.find((item) => item.key === activeKey)}
          />
        </Menu.Button>
        <TransitionComponent isActive={isActive && items.length > 0}>
          <Menu.Items onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <MenuItemsComponent>
              {items.map((item) => {
                return (
                  <HoverMenuItem
                    key={item.key}
                    activeKey={activeKey}
                    item={item}
                    getOnMenuItemButtonClick={getOnMenuItemButtonClick}
                    MenuItemComponent={MenuItemComponent}
                  />
                );
              })}
            </MenuItemsComponent>
          </Menu.Items>
        </TransitionComponent>
      </Menu>
    </WrapperComponent>
  );
};
