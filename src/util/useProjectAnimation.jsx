import { useContext, useEffect } from "react";
import { useSpring, config } from "react-spring";
import { ScrollContext } from "../App";
import percentageInView from "./percentageInView";

export default function useProjectAnimation(element) {
  const [spring, setSpring] = useSpring(() => ({
    opacity: 0,
    x: 100,
    config: config.slow,
  }));

  useEffect(() => {
    if (!element) return;
    if (percentageInView(element) > 25) {
      setSpring({ opacity: 1, x: 0 });
    } else {
      setSpring({ opacity: 0, x: 100 });
    }
  }, [element, setSpring]);

  return { spring };
}
