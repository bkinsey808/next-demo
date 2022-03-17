import { useEffect, useRef } from "react";

import { ITEM_CONFIG, TernaryDarkModeEnum } from "./consts";

export const useDarkModeMenuItem = ({
  itemTernaryDarkMode,
  ternaryDarkMode,
}: {
  itemTernaryDarkMode: TernaryDarkModeEnum;
  ternaryDarkMode: TernaryDarkModeEnum;
}) => {
  const item = ITEM_CONFIG[itemTernaryDarkMode];
  const { label, Icon } = item;
  const activeAndSelected = ternaryDarkMode === itemTernaryDarkMode;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeAndSelected) {
      buttonRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { Icon, buttonRef, activeAndSelected, label };
};
