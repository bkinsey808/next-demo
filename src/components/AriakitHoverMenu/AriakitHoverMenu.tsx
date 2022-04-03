import {
  Combobox,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxItem,
  ComboboxList,
  ComboboxSeparator,
  useComboboxState,
  MenuButton,
  MenuButtonProps,
  MenuItem,
  MenuButtonArrow,
  Menu,
  useMenuState,
} from "ariakit";
import { forwardRef, Fragment, ReactChild, useMemo } from "react";

type Items = Array<{ value: string; items?: Items }>;

const items: Items = [
  { value: "Delete" },
  { value: "Duplicate" },
  {
    value: "Turn into",
    items: [
      { value: "Text" },
      { value: "Heading 1" },
      { value: "Heading 2" },
      { value: "Heading 3" },
      { value: "Page" },
      { value: "To-do list" },
      { value: "Bulleted list" },
      { value: "Numbered list" },
      { value: "Toggle list" },
      { value: "Code" },
      { value: "Quote" },
      { value: "Callout" },
      { value: "Block equation" },
      { value: "Synced block" },
    ],
  },
  { value: "Copy link" },
  { value: "---" },
  { value: "Move to" },
  { value: "---" },
  { value: "Comment" },
  { value: "---" },
  {
    value: "Color",
    items: [
      { value: "Default" },
      { value: "Gray" },
      { value: "Brown" },
      { value: "Orange" },
      { value: "Yellow" },
      { value: "Green" },
      { value: "Blue" },
      { value: "Purple" },
      { value: "Pink" },
      { value: "Red" },
    ],
  },
];

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeString(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function match(value: string, itemValue: string) {
  value = normalizeString(value);
  const regex = new RegExp(escapeRegExp(value), "i");
  return regex.test(normalizeString(itemValue));
}

function filterItems(value: string, innerItems: Items) {
  const filtered: Items = [];
  for (const item of innerItems) {
    if (item.items) {
      const subFiltered = filterItems(value, item.items);
      if (subFiltered.length > 0) {
        filtered.push({ ...item, items: subFiltered });
      }
    } else if (match(value, item.value)) {
      filtered.push(item);
    }
  }
  return filtered;
}

type SubmenuProps = Omit<MenuButtonProps, "state"> & { label: ReactChild };

const Submenu = forwardRef<HTMLButtonElement, SubmenuProps>(
  ({ label, ...props }, ref) => {
    const menu = useMenuState({ gutter: 8, shift: -8 });
    return (
      <>
        <MenuButton {...props} state={menu} ref={ref}>
          {label}
          <MenuButtonArrow />
        </MenuButton>
        <Menu state={menu} portal>
          {props.children}
        </Menu>
      </>
    );
  }
);
Submenu.displayName = "Submenu";

export default function ComboboxWithMenu() {
  const combobox = useComboboxState();
  const menu = useMenuState(combobox);

  const matches = useMemo(
    () => (combobox.value ? filterItems(combobox.value, items) : []),
    [combobox.value]
  );

  return (
    <>
      <MenuButton state={menu}>Actions</MenuButton>
      <Menu state={menu} portal composite={false}>
        <Combobox
          state={combobox}
          autoComplete="list"
          placeholder="Filter actions"
          autoSelect
        />
        <ComboboxList state={combobox}>
          {matches.length
            ? matches.map((item, i) => {
                if (item.items) {
                  return (
                    <Fragment key={item.value}>
                      {i > 0 && !matches[i - 1]?.items && <ComboboxSeparator />}
                      <ComboboxGroup>
                        <ComboboxGroupLabel>{item.value}</ComboboxGroupLabel>
                        {item.items.map((subItem) => (
                          <ComboboxItem
                            as={MenuItem}
                            setValueOnClick={false}
                            key={subItem.value}
                            value={subItem.value}
                          />
                        ))}
                      </ComboboxGroup>
                      {i < matches.length - 1 && <ComboboxSeparator />}
                    </Fragment>
                  );
                } else {
                  return (
                    <ComboboxItem
                      as={MenuItem}
                      setValueOnClick={false}
                      key={item.value}
                      value={item.value}
                    />
                  );
                }
              })
            : !combobox.value
            ? items.map((item, i) => {
                if (item.value === "---") {
                  return <ComboboxSeparator key={i} />;
                }
                if (item.items) {
                  return (
                    <ComboboxItem
                      setValueOnClick={false}
                      hideOnClick={false}
                      key={item.value}
                    >
                      {(props) => (
                        <MenuItem as={Submenu} {...props} label={item.value}>
                          {item.items?.map((subItem) => (
                            <MenuItem key={subItem.value}>
                              {subItem.value}
                            </MenuItem>
                          ))}
                        </MenuItem>
                      )}
                    </ComboboxItem>
                  );
                } else {
                  return (
                    <ComboboxItem
                      as={MenuItem}
                      key={item.value}
                      value={item.value}
                      setValueOnClick={false}
                    />
                  );
                }
              })
            : "No results"}
        </ComboboxList>
      </Menu>
    </>
  );
}
