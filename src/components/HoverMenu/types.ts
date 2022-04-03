export type MenuItemConfig<Data, MenuItemKeyType extends string> = {
  [key in MenuItemKeyType]: Data;
};

export type MenuButtonComponentType<
  MenuItemConfigData,
  MenuItemKeyType extends string
> = ({
  activeKey,
  itemConfig,
}: {
  activeKey: MenuItemKeyType;
  itemConfig: MenuItemConfig<MenuItemConfigData, MenuItemKeyType>;
}) => JSX.Element;

export type MenuItemComponentType<
  MenuItemConfigData,
  MenuItemKeyType extends string
> = ({
  itemKey,
  itemConfig,
  active,
  selected,
}: {
  itemKey: MenuItemKeyType;
  itemConfig: MenuItemConfig<MenuItemConfigData, MenuItemKeyType>;
  active: boolean;
  selected: boolean;
}) => JSX.Element;
