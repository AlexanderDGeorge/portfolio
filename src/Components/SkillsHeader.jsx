import { useContext, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";

export default function SkillsHeader() {
  const { scrollHeight } = useContext(ScrollContext);
  const [spring, setSpring] = useSpring(() => ({
    scroll: 0,
    config: config.stiff,
  }));

  useEffect(() => {
    if (scrollHeight > 1000) {
      setSpring({ scroll: (scrollHeight - 1000) / 50 });
    } else {
      setSpring({ scroll: 0 });
    }
  }, [scrollHeight, setSpring]);

  return (
    <StyledSkills
      style={{
        transform: spring.scroll.interpolate(
          (scroll) => `translateY(-${scroll}%)`
        ),
      }}
    >
      <h1>SKILLS</h1>
      <img src={"/images/Sky.png"} alt="" />
      {/* <h1>SKILLS</h1> */}
      <animated.img
        style={{
          transform: spring.scroll.interpolate(
            (scroll) => `translateY(-${0.3 * scroll + 16}%)`
          ),
        }}
        src={"/images/Mountains.png"}
        alt=""
      />
      <animated.img
        style={{
          transform: spring.scroll.interpolate(
            (scroll) => `translateY(-${Math.min(140, 0.5 * scroll + 79)}% )`
          ),
        }}
        src={"/images/Foreground.png"}
        alt=""
      />
    </StyledSkills>
  );
}

const StyledSkills = styled(animated.div)`
  position: absolute;
  z-index: 1;
  width: 100%;
  background: #333;
  background: #473f39;
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
