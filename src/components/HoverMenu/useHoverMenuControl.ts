import { useState, MouseEventHandler, useRef } from "react";
import { useEventListener } from "usehooks-ts";

import { TIMEOUT_DURATION } from "./consts";

export const useHoverMenu = <MenuItemKeyType>({
  onSelect,
}: {
  onSelect: (itemKey: MenuItemKeyType) => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [selecting, setSelecting] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const keyupHandler = (event: WindowEventMap["keyup"]) => {
    if (event.key === "Escape") {
      setHovered(false);
      setSelecting(true);
      setTimeout(() => {
        setSelecting(false);
        setHovered(false);
      }, TIMEOUT_DURATION);
    }
    if (event.key === "Enter") {
      if (hovered) {
        setHovered(false);
        setSelecting(true);
        setTimeout(() => {
          setHovered(false);
          setSelecting(false);
        }, TIMEOUT_DURATION * 5);
      } else if (
        !selecting &&
        document.activeElement === menuButtonRef.current
      ) {
        setHovered(true);
      }
    }
    if (event.key === "Tab" && hovered && !hovering) {
      menuButtonRef.current?.focus();
      setHovered(false);
    }
  };

  useEventListener("keyup", keyupHandler);

  let timeout: NodeJS.Timeout;

  const withTimeoutOpen = () => {
    if (selecting) {
      return;
    }
    setHovered(true);
    clearTimeout(timeout);
  };
  const withTimeoutClose = () => {
    if (hovered) {
      timeout = setTimeout(() => setHovered(false), TIMEOUT_DURATION);
    }
  };

  const getOnMenuItemButtonClick = (clickedKey: MenuItemKeyType) => () => {
    clearTimeout(timeout);
    setSelecting(true);
    setHovered(false);
    setTimeout(() => {
      setSelecting(false);
    }, TIMEOUT_DURATION);
    onSelect?.(clickedKey);
  };

  /** should we show the menu? */
  const show = hovered && !selecting;

  const onMouseDown: MouseEventHandler<HTMLDivElement> = () => {
    setHovered(!hovered);
    setSelecting(true);
    setTimeout(() => {
      setSelecting(false);
    }, TIMEOUT_DURATION / 2);
  };

  const onFocus = () => {
    if (selecting) {
      return;
    }
    setHovered(true);
    setHovering(true);
    setTimeout(() => {
      setHovering(false);
    }, TIMEOUT_DURATION);
  };

  return {
    withTimeoutOpen,
    withTimeoutClose,
    getOnMenuItemButtonClick,
    onMouseDown,
    onFocus,
    show,
    menuButtonRef,
  };
};
