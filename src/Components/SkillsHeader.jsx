import { useContext, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";

export default function SkillsHeader() {
  const { scrollHeight } = useContext(ScrollContext);
  const ref = useRef();
  const [spring, setSpring] = useSpring(() => ({
    scroll: 0,
    config: config.stiff,
  }));

  useEffect(() => {
    if (scrollHeight > 1400) {
      setSpring({ scroll: (scrollHeight - 1400) / 50 });
    } else {
      setSpring({ scroll: 0 });
    }
  }, [scrollHeight, setSpring]);

  return (
    <StyledSkillsHeader
      style={{
        height: spring.scroll.interpolate(
          (scroll) => `${ref.current?.offsetTop - 2 * scroll}px`
        ),
      }}
    >
      <h1>SKILLS</h1>
      <img src={"/images/Sky.png"} alt="" />
      <animated.img
        style={{
          transform: spring.scroll.interpolate(
            (scroll) => `translateY(-${1.6 * scroll + 16}%)`
          ),
          top: "16%",
        }}
        src={"/images/Mountains.png"}
        alt=""
      />
      <animated.img
        style={{
          transform: spring.scroll.interpolate(
            (scroll) => `translateY(-${Math.min(140, 2 * scroll + 85)}% )`
          ),
        }}
        src={"/images/Foreground.png"}
        alt=""
        ref={ref}
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
    font-size: 8em;
    color: white;
    text-align: center;
    @media screen and (max-width: 600px) {
      font-size: 5em;
      top: 5vmax;
    }
  }
`;
