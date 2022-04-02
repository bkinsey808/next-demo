import { Transition } from "@headlessui/react";
import cntl from "cntl";
import { FC } from "react";

export const DefaultTransitionComponent: FC<{ isActive: boolean }> = ({
  children,
  isActive,
}) => (
  <Transition
    show={isActive}
    as="div"
    className={cntl`absolute`}
    enter={cntl`transition ease-out duration-100`}
    enterFrom={cntl`transform opacity-0 scale-95`}
    enterTo={cntl`transform opacity-100 scale-100`}
    leave={cntl`transition ease-in duration-75`}
    leaveFrom={cntl`transform opacity-100 scale-100`}
    leaveTo={cntl`transform opacity-0 scale-95`}
  >
    {children}
  </Transition>
);
