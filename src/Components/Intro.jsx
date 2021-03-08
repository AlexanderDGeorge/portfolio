import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import TextTrail from "./TextTrail";
import { ScrollContext } from "../App";

export default function Intro() {
  const { scrollHeight } = useContext(ScrollContext);

  const [open, setOpen] = useState(false);
  const [spring, setSpring] = useSpring(() => ({
    width: 50,
    config: config.slow,
    onFrame: () => {
      if (spring.width.getValue() >= 90) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    },
  }));
  const [hiSpring, setHiSpring] = useSpring(() => ({
    transform: "translateX(0vw)",
  }));

  useEffect(() => {
    if (scrollHeight < 10) {
      setSpring({ width: 50 });
      setHiSpring({
        transform: "translateX(0vw)",
      });
    } else {
      setSpring({ width: 100 });
      if (window.innerWidth < 600) {
        setHiSpring({ transform: "translateX(100vw)" });
      } else {
        setHiSpring({
          transform: "translateX(50vw)",
        });
      }
    }
  }, [scrollHeight, setSpring, setHiSpring]);

  return (
    <StyledIntro id="intro">
      <StyledImage></StyledImage>
      <StyledAbout
        style={{ width: spring.width.interpolate((width) => `${width}%`) }}
      >
        <TextTrail open={open}>
          <h2>I'm</h2>
          <h1>Alexander George</h1>
          <h4>ADVENTURER x CREATIVE x DEVELOPER</h4>
          <p>
            I'm a <strong>Software Engineer</strong> experienced with crafting
            Full Stack Web Applications. I have been learning about and working
            with code for over five years.
          </p>
        </TextTrail>
      </StyledAbout>
      <animated.h1 style={hiSpring}>
        HEL
        <br /> LO!
      </animated.h1>
    </StyledIntro>
  );
}

const StyledIntro = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  background: #333;
  > h1 {
    position: absolute;
    z-index: 1;
    left: calc(50% - 100px);
    height: 100%;
    width: 200px;
    font-size: 8em;
    font-weight: 900;
    color: white;
    text-align: center;
    font-family: Mono;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const StyledImage = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  right: 0;
  background-image: url(/images/waterfall.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledAbout = styled(animated.div)`
  position: absolute;
  height: 100%;
  padding: 5% 25% 5% 10%;
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: white;
    font-size: 4em;
  }
  h4 {
    color: #ccc;
  }
  p {
    margin-top: 40px;
    color: white;
    font-weight: 200;
    font-size: 1em;
    max-width: 600px;
  }
`;
