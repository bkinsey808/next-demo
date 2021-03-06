import {
  useState,
  MouseEventHandler,
  useRef,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useEventListener } from "usehooks-ts";

import { HoverMenuContext } from "./HoverMenuContext";
import { TIMEOUT_DURATION } from "./consts";

export const useHoverMenu = <MenuItemKeyType>({
  onSelect,
}: {
  onSelect?: (itemKey: MenuItemKeyType) => void;
}) => {
  const { activeHoverMenu, setActiveHoverMenu } = useContext(HoverMenuContext);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  /** is control in a hovering state? */
  const hoveringRef = useRef(false);

  /** recent mouse enter? */
  const [mouseEntering, setMouseEntering] = useState(false);

  /** was control recent focused? */
  const [focusing, setFocusing] = useState(false);

  /** was control recently tabbed into? */
  const [tabbing, setTabbing] = useState(false);

  /** was a selection recently made on the control? */
  const [selecting, setSelecting] = useState(false);

  /** is the control currently showing the menu? */
  const [show, setShow] = useState(false);

  const setActive = useCallback(
    (active: boolean) => {
      if (active) {
        setActiveHoverMenu(menuButtonRef.current);
      }

      setShow(active);
    },
    [setActiveHoverMenu, menuButtonRef, setShow]
  );

  useEffect(() => {
    if (
      activeHoverMenu !== undefined &&
      activeHoverMenu !== menuButtonRef.current
    ) {
      setActive(false);
    }
  }, [activeHoverMenu, setShow, setActive]);

  const isActive = show;

  useEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      setActive(false);
    }
    if (
      event.key === "Enter" &&
      document.activeElement === menuButtonRef.current &&
      !selecting
    ) {
      setActive(true);
    }
    if (event.key === "Tab" && isActive && !focusing) {
      setActive(false);
      setTabbing(true);
      menuButtonRef.current?.focus();
      setTimeout(() => {
        setTabbing(false);
      }, TIMEOUT_DURATION);
    }
  });

  const setHovering = (value: boolean) => {
    hoveringRef.current = value;
  };

  const onMouseEnter: MouseEventHandler<
    HTMLButtonElement | HTMLDivElement
  > = () => {
    setHovering(true);
    if (!isActive) {
      setActive(true);
    }
    setMouseEntering(true);
    setTimeout(() => {
      setMouseEntering(false);
    }, TIMEOUT_DURATION);
  };

  const onMouseLeave: MouseEventHandler<
    HTMLButtonElement | HTMLDivElement
  > = () => {
    setHovering(false);
    if (isActive) {
      setTimeout(() => {
        if (!hoveringRef.current) {
          setActive(false);
        }
      }, TIMEOUT_DURATION);
    }
  };

  const onMouseDown: MouseEventHandler<HTMLButtonElement> = () => {
    if (!focusing && !mouseEntering) {
      setActive(!isActive);
    }
  };

  const onFocus = () => {
    if (hoveringRef.current || selecting || tabbing) {
      return;
    }
    setActive(true);
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
    setActive(false);
  };

  return {
    onMouseEnter,
    onMouseLeave,
    getOnMenuItemButtonClick,
    onMouseDown,
    onFocus,
    isActive,
    menuButtonRef,
  };
};
