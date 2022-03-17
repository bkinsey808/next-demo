import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";

import { DarkModeMenuItem } from "./DarkModeMenuItem";
import { ITEMS } from "./consts";
import { useDarkModeControl } from "./useDarkModeControl";

export const DarkModeControl: FC = () => {
  const {
    withTimeoutOpen,
    withTimeoutClose,
    MenuButtonIcon,
    show,
    ternaryDarkMode,
    onMouseDown,
    onFocus,
    getOnMenuItemButtonClick,
    menuButtonRef,
  } = useDarkModeControl();

  return (
    <div className="w-64 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div onMouseDown={onMouseDown}>
          <Menu.Button
            ref={menuButtonRef}
            onFocus={onFocus}
            onMouseEnter={withTimeoutOpen}
            onMouseLeave={withTimeoutClose}
            className="
              inline-flex 
              justify-center 
              w-full
              px-4 py-2 
              text-sm 
              font-medium
              text-white
              bg-black 
              rounded-md 
              bg-opacity-20 hover:bg-opacity-30                
              focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
            "
          >
            {MenuButtonIcon && <MenuButtonIcon className="w-5 h-5" />}
          </Menu.Button>
        </div>
        <Transition
          show={show}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            onMouseEnter={withTimeoutOpen}
            onMouseLeave={withTimeoutClose}
            className="
              absolute 
              right-0 
              w-64 
              mt-2 
              origin-top-right 
              bg-white divide-y 
              divide-gray-100 
              rounded-md 
              shadow-lg 
              ring-1 ring-black ring-opacity-5 
              focus:outline-none
            "
          >
            <div className="px-1 py-1 ">
              {ITEMS.map((itemTernaryDarkMode) => {
                return (
                  <DarkModeMenuItem
                    key={itemTernaryDarkMode}
                    ternaryDarkMode={ternaryDarkMode}
                    itemTernaryDarkMode={itemTernaryDarkMode}
                    getOnMenuItemButtonClick={getOnMenuItemButtonClick}
                  />
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
