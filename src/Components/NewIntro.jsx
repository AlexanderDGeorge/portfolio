import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config, useChain } from "react-spring";
import TextTrail from "./TextTrail";

export default function Intro() {
  const widthRef = useRef();
  const heightRef = useRef();

  const [open, setOpen] = useState(false);
  const [widthSpring, setWidthSpring] = useSpring(() => ({
    width: "50%",
    minWidth: "50%",
    config: {
      clamp: true,
      ...config.slow,
    },
    ref: widthRef,
  }));

  //   const heightSpring = useSpring({
  //     height: "200%",
  //     from: {
  //       height: "100%",
  //     },
  //     config: {
  //       clamp: true,
  //       ...config.slow,
  //     },
  //     ref: heightRef,
  //   });

  //   useChain([widthRef, heightRef]);

  useEffect(() => {
    const intro = document.getElementById("intro");
    function handleScroll(e) {
      if (e.wheelDeltaY > 0) {
        setOpen(false);
        setWidthSpring({ width: "50%", minWidth: "50%" });
      } else {
        setWidthSpring({ width: "0%", minWidth: "0%" });
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
      <StyledImage ref={widthRef} style={widthSpring} />
      <StyledAbout ref={heightRef}>
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

const StyledImage = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 100%;
  right: 0;
  background-image: url(/pic02.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledAbout = styled(animated.div)`
  position: absolute;
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
