import { useState, MouseEventHandler, useRef } from "react";
import { useEventListener } from "usehooks-ts";

import { TIMEOUT_DURATION } from "./consts";

export const useHoverMenu = <MenuItemKeyType>({
  onSelect,
}: {
  onSelect?: (itemKey: MenuItemKeyType) => void;
}) => {
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /** is control in a hovering state? */
  const hoveringRef = useRef(false);

  /** was control recent focused? */
  const [focusing, setFocusing] = useState(false);

  /** was control recently tabbed into? */
  const [tabbing, setTabbing] = useState(false);

  /** was a selection recently made on the control? */
  const [selecting, setSelecting] = useState(false);

  /** is the control currently showing the menu? */
  const [show, setShow] = useState(false);

  useEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      setShow(false);
    }
    if (
      event.key === "Enter" &&
      document.activeElement === menuButtonRef.current &&
      !selecting
    ) {
      setShow(true);
    }
    if (event.key === "Tab" && show && !focusing) {
      setShow(false);
      setTabbing(true);
      menuButtonRef.current?.focus();
      setTimeout(() => {
        setTabbing(false);
      }, TIMEOUT_DURATION);
    }
  });

  useEventListener("mousedown", (event) => {
    if (hoveringRef.current || event.target === menuButtonRef.current) {
      return;
    }
    setShow(false);
  });

  const setHovering = (value: boolean) => {
    hoveringRef.current = value;
  };

  const onMouseEnter = () => {
    setHovering(true);
    if (!show) {
      setShow(true);
    }
  };

  const onMouseLeave = () => {
    setHovering(false);
    if (show) {
      setTimeout(() => {
        if (!hoveringRef.current) {
          setShow(false);
        }
      }, TIMEOUT_DURATION);
    }
  };

  const onMouseDown: MouseEventHandler<HTMLDivElement> = () => {
    setShow(!show);
  };

  const onFocus = () => {
    if (hoveringRef.current || selecting || tabbing) {
      return;
    }
    setShow(true);
    setFocusing(true);
    setTimeout(() => {
      setFocusing(false);
    }, TIMEOUT_DURATION);
  };

  const getOnMenuItemButtonClick = (clickedKey: MenuItemKeyType) => () => {
    setSelecting(true);
    setTimeout(() => {
      setSelecting(false);
    }, TIMEOUT_DURATION);
    onSelect?.(clickedKey);
    setShow(false);
  };

  return {
    onMouseEnter,
    onMouseLeave,
    getOnMenuItemButtonClick,
    onMouseDown,
    onFocus,
    show,
    menuButtonRef,
  };
};
