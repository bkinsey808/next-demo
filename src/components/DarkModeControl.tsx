import { Menu, Transition } from "@headlessui/react";
import {
  DesktopComputerIcon,
  MoonIcon,
  SunIcon,
  CheckCircleIcon,
} from "@heroicons/react/solid";
import { FC, Fragment } from "react";
import { useTernaryDarkMode } from "usehooks-ts";

const enum TernaryDarkModeEnum {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

const ITEMS = [
  TernaryDarkModeEnum.LIGHT,
  TernaryDarkModeEnum.SYSTEM,
  TernaryDarkModeEnum.DARK,
] as const;

const ITEM_CONFIG = {
  [TernaryDarkModeEnum.LIGHT]: {
    iconType: SunIcon,
    label: "Light Mode",
  },
  [TernaryDarkModeEnum.SYSTEM]: {
    iconType: DesktopComputerIcon,
    label: "System Light/Dark Mode",
  },
  [TernaryDarkModeEnum.DARK]: {
    iconType: MoonIcon,
    label: "Dark Mode",
  },
} as const;

export const DarkModeControl: FC = () => {
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();
  const MenuButtonIcon = ITEM_CONFIG[ternaryDarkMode].iconType;

  return (
    <div className="w-64 text-right fixed top-16">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
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
              focus:outline-none 
              focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
            "
          >
            <MenuButtonIcon className="w-5 h-5" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
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
                const item = ITEM_CONFIG[itemTernaryDarkMode];
                const Icon = item.iconType;

                return (
                  <Menu.Item key={itemTernaryDarkMode}>
                    {({ active }) => (
                      <button
                        onClick={() => setTernaryDarkMode(itemTernaryDarkMode)}
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        }
                        group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        <CheckCircleIcon
                          className={`w-5 h-5 mr-2 ${
                            ternaryDarkMode === itemTernaryDarkMode
                              ? "visible"
                              : "invisible"
                          }`}
                        />
                        <Icon className="w-5 h-5 mr-2" aria-hidden="true" />
                        {item.label}
                      </button>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
