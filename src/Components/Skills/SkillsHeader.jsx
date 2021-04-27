import { useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import percentageInView from "../../util/percentageInView";

export default function SkillsHeader() {
  const ref = useRef();
  const [spring, setSpring] = useSpring(() => ({
    scroll: 0,
    config: config.stiff,
  }));

  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    const scrollEle = document.getElementById("scroll");
    if (!scrollEle) return;
    const handleScroll = (e) => {
      setSpring({ scroll: percentageInView(ref.current) });
    };

    scrollEle.addEventListener("scroll", handleScroll);
    return () => {
      scrollEle.removeEventListener("scroll", handleScroll);
    };
  }, [setSpring]);

  return (
    <StyledSkillsHeader ref={ref} style={{ height: (width * 9) / 16 - 60 }}>
      <h1>SKILLS</h1>
      <img src={"/images/Sky.png"} alt="" />
      <animated.img
        src={"/images/Mountains.png"}
        alt=""
        style={{
          transform: spring.scroll.interpolate(
            (scroll) => `translateY(-${17 + (width * scroll) / (6 * height)}%)`
          ),
        }}
      />
      <h2>and TECHNOLOGIES</h2>
      <animated.img
        src={"/images/Foreground.png"}
        alt=""
        style={{
          transform: spring.scroll.interpolate(
            (scroll) => `translateY(-${80 + (width * scroll) / (4 * height)}%)`
          ),
        }}
      />
    </StyledSkillsHeader>
  );
}

const StyledSkillsHeader = styled(animated.header)`
  position: relative;
  > img {
    z-index: 1;
    height: auto;
    width: 100%;
  }
  > h1 {
    position: absolute;
    z-index: 0;
    width: 100%;
    font-family: Mono;
    color: white;
    text-align: center;
  }
  > h2 {
    position: absolute;
    bottom: 30vh;
    width: 100%;
    font-family: Mono;
    color: white;
    text-align: center;
  }
`;
