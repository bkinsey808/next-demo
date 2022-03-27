import clsx from "clsx";
import cntl from "cntl";
import { Dispatch, FC, SetStateAction } from "react";

const genericHamburgerLineCN = (isOpen: boolean) =>
  clsx(
    cntl`h-1 w-6 my-1 rounded-full bg-black transition ease-in transform duration-300`,
    {
      [cntl`opacity-50 group-hover:opacity-100`]: !isOpen,
    }
  );

export const AnimatedHamburgerMenu: FC<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="group flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-black"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={clsx(`${genericHamburgerLineCN(isOpen)}`, {
          "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100": isOpen,
        })}
      />
      <div
        className={clsx(`${genericHamburgerLineCN(isOpen)}`, {
          "opacity-0": isOpen,
        })}
      />
      <div
        className={clsx(`${genericHamburgerLineCN(isOpen)}`, {
          "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100":
            isOpen,
        })}
      />
    </button>
  );
};
