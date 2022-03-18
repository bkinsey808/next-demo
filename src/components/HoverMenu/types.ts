export type MenuItemConfig<Data, MenuItemKeyType extends string> = {
  [key in MenuItemKeyType]: Data;
};

export type MenuButtonComponentType<KeyType> = ({
  activeKey,
}: {
  activeKey: KeyType;
}) => JSX.Element;

export type MenuItemComponentType<MenuItemConfigData> = ({
  itemKey,
  itemConfig,
  active,
  selected,
}: {
  itemKey: KeyType;
  itemConfig: MenuItemConfig<MenuItemConfigData, KeyType>;
  active: boolean;
  selected: boolean;
}) => JSX.Element;
