import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import TextTrail from "./TextTrail";
import { ScrollContext } from "../App";

export default function Intro() {
  const { scrollHeight } = useContext(ScrollContext);
  console.log(scrollHeight);
  const [open, setOpen] = useState(false);
  const [spring, setSpring] = useSpring(() => ({
    width: "50%",
    config: {
      clamp: true,
      ...config.slow,
    },
  }));

  useEffect(() => {
    const intro = document.getElementById("intro");
    function handleScroll(e) {
      if (e.wheelDeltaY > 0) {
        setOpen(false);
        setSpring({ width: "50%" });
      } else {
        setSpring({ width: "100%" });
        setTimeout(() => {
          setOpen(true);
        }, 500);
      }
    }
    intro.addEventListener("wheel", handleScroll);
    return () => {
      intro.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <StyledIntro id="intro">
      <StyledImage></StyledImage>
      <StyledAbout style={spring}>
        <TextTrail open={open}>
          <h1>Alexander George</h1>
          <p>ADVENTURER x CREATIVE x DEVELOPER</p>
          <p>
            I'm a Software Engineer experienced with crafting Full Stack Web
            Applications
          </p>
        </TextTrail>
      </StyledAbout>
    </StyledIntro>
  );
}

const StyledIntro = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  background: #333;
`;

const StyledImage = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  right: 0;
  background-image: url(/pic02.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledAbout = styled(animated.div)`
  position: absolute;
  height: 200%;
  padding: 10%;
  background: #83944c;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  h1 {
    color: white;
    font-size: 4em;
  }
  p {
    color: #222;
    font-weight: 800;
    font-size: 2em;
  }
`;
