import { FC } from "react";

export type MenuItem<MenuItemKey, ConfigData> = {
  key: MenuItemKey;
  data: ConfigData;
};

export type WrapperComponentType = FC;

export type MenuButtonComponentType<
  MenuItemKey extends string,
  MenuItemData
> = ({
  activeKey,
  item,
}: {
  activeKey: MenuItemKey;
  item?: MenuItem<MenuItemKey, MenuItemData>;
}) => JSX.Element;

export type TransitionComponentType = FC<{ isActive: boolean }>;

export type MenuItemsComponentType = FC;

export type MenuItemComponentType<MenuItemKey extends string, MenuItemData> = ({
  item,
  active,
  selected,
}: {
  item: MenuItem<MenuItemKey, MenuItemData>;
  active: boolean;
  selected: boolean;
}) => JSX.Element;
