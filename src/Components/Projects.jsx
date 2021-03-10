import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../App";
import Pairboard from "./Pairboard";
import Petsagram from "./Petsagram";
import VanillaTetris from "./VanillaTetris";

export default function Projects() {
  const { scrollHeight } = useContext(ScrollContext);
  const [spring, setSpring] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    if (scrollHeight > 2500) {
      setSpring({ opacity: (scrollHeight - 2500) / 750 });
    }
  }, [scrollHeight, setSpring]);

  return (
    <StyledProjects>
      <animated.h1 style={spring}>PROJECTS</animated.h1>
      <animated.p style={spring}>Click the images to cycle through</animated.p>
      <Pairboard />
      <Petsagram />
      <VanillaTetris />
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  width: 100%;
  margin-top: 10%;
  > h1 {
    width: 100%;
    font-family: Mono;
    color: #333;
  }
  > p {
    margin-left: 20%;
  }
`;
