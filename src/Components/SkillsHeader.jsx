import { useContext, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";
import percentageInView from "../util/percentageInView";

export default function SkillsHeader() {
  const { scrollHeight } = useContext(ScrollContext);
  const ref = useRef();
  const [spring, setSpring] = useSpring(() => ({
    scroll: 0,
    config: config.stiff,
  }));

  useEffect(() => {
    setSpring({ scroll: percentageInView(ref.current) });
  }, [scrollHeight, setSpring]);

  const width = window.innerWidth;
  const height = window.innerHeight;

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
  width: auto;
  > img {
    z-index: 1;
    height: auto;
    width: 100%;
  }
  > h1 {
    position: absolute;
    z-index: 0;
    top: 4vw;
    width: 100%;
    font-family: Mono;
    color: white;
    text-align: center;
    @media screen and (max-width: 600px) {
      top: 5vmax;
    }
  }
  > h2 {
    position: absolute;
    top: 20vw;
    width: 100%;
    font-family: Mono;
    font-size: 3em;
    color: white;
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: 1em;
      top: 12vmax;
    }
  }
`;
