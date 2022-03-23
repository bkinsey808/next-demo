import { useEffect, useRef } from "react";

export const useHoverMenuItem = <MenuItemKeyType>({
  activeKey,
  itemKey,
}: {
  activeKey: MenuItemKeyType;
  itemKey: MenuItemKeyType;
}) => {
  const selected = activeKey === itemKey;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selected) {
      buttonRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    buttonRef,
    selected,
  };
};
