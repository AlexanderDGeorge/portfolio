import { useContext, useEffect } from "react";
import { useSpring, animated, config, interpolate } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";
import Skills from "./Skills";

export default function SkillsHeader() {
  const { scrollHeight } = useContext(ScrollContext);

  const [spring, setSpring] = useSpring(() => ({
    scroll: 0,
    x: 0,
    y: 0,
    opacity: 0,
    config: config.stiff,
  }));

  useEffect(() => {
    const percent = (scrollHeight - 1000) / 20;
    if (scrollHeight > 1000) {
      setSpring({ scroll: percent, opacity: percent / 50 });
    } else {
      setSpring({ scroll: 0, opacity: 0 });
    }
  }, [scrollHeight, setSpring]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const offCenterX = window.outerWidth / 2 - e.clientX;
      const offCenterY = window.outerHeight / 2 - e.clientY;
      setSpring({
        x: offCenterX / 5,
        y: offCenterY / 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [setSpring]);

  return (
    <StyledSkills
      style={{
        transform: spring.scroll.interpolate(
          (scroll) => `translateY(-${scroll}%)`
        ),
      }}
    >
      <img src={"/ellinoir.jpg"} alt="" />
      <animated.h1
        style={{
          transform: interpolate(
            [spring.x, spring.y],
            (x, y) => `translate3d(${x}px, ${y}px, 0)`
          ),
          opacity: spring.opacity,
        }}
      >
        SKILLS
      </animated.h1>
      <Skills />
    </StyledSkills>
  );
}

const StyledSkills = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 300%;
  width: 100%;
  /* background: #473f39; */
  background: #333;
  > img {
    height: auto;
    width: 100%;
  }
  > h1 {
    position: absolute;
    top: 5%;
    width: 100%;
    font-family: Mono;
    font-size: 8em;
    color: white;
    text-align: center;
  }
`;
