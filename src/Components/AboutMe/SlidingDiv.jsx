import { useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import About from "./About";
import ScrollIndicator from "./ScrollIndicator";

export default function SlidingDiv() {
  const [spring, setSpring] = useSpring(() => ({
    transform: "translateX(0%)",
    config: {
      tension: 80,
      friction: 12,
    },
  }));

  useEffect(() => {
    const scrollEle = document.getElementById("scroll");
    if (!scrollEle) return;
    const handleScroll = (e) => {
      if (scrollEle.scrollTop > 12) {
        setSpring({ transform: "translateX(50%)" });
      } else {
        setSpring({ transform: "translateX(0%)" });
      }
    };

    scrollEle.addEventListener("scroll", handleScroll);
    return () => {
      scrollEle.removeEventListener("scroll", handleScroll);
    };
  }, [setSpring]);

  return (
    <StyledSlide style={spring}>
      <About />
      <ScrollIndicator />
      <animated.h1>
        HEL
        <br /> LO!
      </animated.h1>
    </StyledSlide>
  );
}

const StyledSlide = styled(animated.div)`
  position: absolute;
  right: 50%;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #333;
  > h1 {
    position: absolute;
    z-index: 1;
    top: 0;
    right: -100px;
    height: 100%;
    width: 200px;
    font-size: 8em;
    font-weight: 500;
    color: white;
    text-align: center;
    font-family: Mono;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
