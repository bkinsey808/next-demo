import {
  useState,
  KeyboardEvent,
  MouseEventHandler,
  useEffect,
  SVGProps,
} from "react";
import { useEventListener, useTernaryDarkMode } from "usehooks-ts";

import { ITEM_CONFIG, TernaryDarkModeEnum, TIMEOUT_DURATION } from "./consts";

type SVGIconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export const useDarkModeControl = () => {
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();
  const [MenuButtonIcon, setMenuButtonIcon] = useState<SVGIconType>();
  const [hovered, setHovered] = useState(false);
  const [selecting, setSelecting] = useState(false);
  const [recentMouseDown, setRecentMouseDown] = useState(false);

  useEffect(() => {
    setMenuButtonIcon(ITEM_CONFIG[ternaryDarkMode].Icon as SVGIconType);
  }, [ternaryDarkMode, setMenuButtonIcon]);

  const keydownHandler = (event: WindowEventMap["keydown"]) => {
    if (event.key === "Escape") {
      console.log("esc");
      setHovered(false);
      setSelecting(true);
      setTimeout(() => {
        setSelecting(false);
        setHovered(false);
      }, TIMEOUT_DURATION);
    }
  };

  useEventListener("keydown", keydownHandler);

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

  const onKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape") {
      setHovered(false);
      clearTimeout(timeout);
    }
  };

  /** should we show the menu? */
  const show = hovered && !selecting;

  const onMouseDown: MouseEventHandler<HTMLDivElement> = () => {
    setHovered(!hovered);
    setSelecting(true);
    setRecentMouseDown(true);
    setTimeout(() => {
      setSelecting(false);
      setRecentMouseDown(false);
    }, TIMEOUT_DURATION / 2);
  };

  const onBlur = () => {
    if (recentMouseDown) {
      return;
    }
    console.log("onblur");
  };

  return {
    withTimeoutOpen,
    withTimeoutClose,
    getOnMenuItemButtonClick,
    onKeyUp,
    onMouseDown,
    onBlur,
    MenuButtonIcon,
    show,
    ternaryDarkMode: ternaryDarkMode as TernaryDarkModeEnum,
  };
};
