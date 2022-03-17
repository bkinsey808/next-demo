import {
  useState,
  MouseEventHandler,
  useEffect,
  SVGProps,
  useRef,
} from "react";
import { useEventListener, useTernaryDarkMode } from "usehooks-ts";

import { ITEM_CONFIG, TernaryDarkModeEnum, TIMEOUT_DURATION } from "./consts";

type SVGIconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export const useDarkModeControl = () => {
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();
  const [MenuButtonIcon, setMenuButtonIcon] = useState<SVGIconType>();
  const [hovered, setHovered] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [selecting, setSelecting] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuButtonIcon(ITEM_CONFIG[ternaryDarkMode].Icon as SVGIconType);
  }, [ternaryDarkMode, setMenuButtonIcon]);

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
      } else if (!selecting) {
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

  const getOnMenuItemButtonClick =
    (itemTernaryDarkMode: TernaryDarkModeEnum) => () => {
      setTernaryDarkMode(itemTernaryDarkMode);
      clearTimeout(timeout);
      setSelecting(true);
      setHovered(false);
      setTimeout(() => {
        setSelecting(false);
      }, TIMEOUT_DURATION);
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
    MenuButtonIcon,
    show,
    ternaryDarkMode: ternaryDarkMode as TernaryDarkModeEnum,
    menuButtonRef,
  };
};
