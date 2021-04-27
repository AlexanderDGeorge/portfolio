import { useEffect } from "react";
import { useSpring, config } from "react-spring";
import percentageInView from "./percentageInView";

export default function useProjectAnimation(ref) {
  const [spring, setSpring] = useSpring(() => ({
    opacity: 0,
    x: 100,
    config: config.slow,
  }));

  useEffect(() => {
    const scrollEle = document.getElementById("scroll");
    console.log(ref);
    if (!ref || !scrollEle) return;
    const handleScroll = (e) => {
      if (percentageInView(ref.current) > 25) {
        setSpring({ opacity: 1, x: 0 });
      } else {
        setSpring({ opacity: 0, x: 100 });
      }
    };

    scrollEle.addEventListener("scroll", handleScroll);
    return () => {
      scrollEle.removeEventListener("scroll", handleScroll);
    };
  }, [setSpring, ref]);

  return { spring };
}
