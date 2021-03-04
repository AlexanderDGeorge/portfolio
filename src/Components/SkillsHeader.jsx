import { useContext, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";
// import Skills from "./Skills";

export default function SkillsHeader() {
  const { scrollHeight } = useContext(ScrollContext);

  const [spring, setSpring] = useSpring(() => ({
    scroll: 0,
    config: config.stiff,
  }));

  useEffect(() => {
    const percent = (scrollHeight - 1000) / 20;
    console.log(percent);
    if (scrollHeight > 1000) {
      setSpring({ scroll: percent });
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
      <img src={"/images/Sky.png"} alt="" />
      <h1>SKILLS</h1>
      <animated.img
        style={{
          transform: spring.scroll.interpolate(
            (scroll) => `translateY(-${0.6 * scroll + 175}px)`
          ),
        }}
        src={"/images/Mountains.png"}
        alt=""
      />
      <animated.img
        style={{
          transform: spring.scroll.interpolate(
            (scroll) => `translateY(-${0.8 * scroll + 350}px)`
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
  /* height: 50%; */
  width: 100%;
  background: #333;
  background: #473f39;
  > img {
    z-index: 1;
    height: auto;
    width: 100%;
  }
  > h1 {
    z-index: 0;
    width: 100%;
    font-family: Mono;
    font-size: 8em;
    color: white;
    text-align: center;
    transform: translateY(-150px);
  }
`;
