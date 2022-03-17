import { Menu } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { FC } from "react";

import { TernaryDarkModeEnum } from "./consts";
import { useDarkModeMenuItem } from "./useDarkModeMenuItem";

export const DarkModeMenuItem: FC<{
  ternaryDarkMode: TernaryDarkModeEnum;
  itemTernaryDarkMode: TernaryDarkModeEnum;
  getOnMenuItemButtonClick: (
    itemTernaryDarkMode: TernaryDarkModeEnum
  ) => () => void;
}> = ({ ternaryDarkMode, itemTernaryDarkMode, getOnMenuItemButtonClick }) => {
  const { Icon, buttonRef, activeAndSelected, label } = useDarkModeMenuItem({
    itemTernaryDarkMode,
    ternaryDarkMode,
  });

  return (
    <Menu.Item key={itemTernaryDarkMode}>
      {({ active }) => (
        <button
          ref={buttonRef}
          onClick={getOnMenuItemButtonClick(itemTernaryDarkMode)}
          className={clsx(
            "group flex rounded-md items-center w-full px-2 py-2 text-sm",
            {
              "bg-violet-500 text-white": active,
              "text-gray-900": !active,
            }
          )}
        >
          <CheckCircleIcon
            className={clsx("w-5 h-5 mr-2", {
              visible: activeAndSelected,
              invisible: !activeAndSelected,
            })}
          />
          <Icon className="w-5 h-5 mr-2" aria-hidden="true" />
          {label}
        </button>
      )}
    </Menu.Item>
  );
};
