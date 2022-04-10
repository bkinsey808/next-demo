import clsx from "clsx";
import cntl from "cntl";
import { Dispatch, FC, SetStateAction } from "react";

const hamburgerMenuLineIsOpenCNs = [
  cntl`translate-y-3 rotate-45 opacity-50 group-hover:opacity-100`,
  cntl`opacity-0`,
  cntl`-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100`,
];

export const AnimatedHamburgerMenu: FC<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      aria-label="Site Menu"
      className="group flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-black sm:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {hamburgerMenuLineIsOpenCNs.map((isOpenCN, index) => (
        <div
          key={index}
          className={clsx(
            "my-1 h-1 w-6 transform rounded-full bg-black transition duration-300 ease-in",
            {
              [isOpenCN]: isOpen,
              "opacity-50 group-hover:opacity-100": !isOpen,
            }
          )}
        />
      ))}
    </button>
  );
};
