import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../App";
import Pairboard from "./Pairboard";
import Petsagram from "./Petsagram";
import VanillaTetris from "./VanillaTetris";
import percentageInView from "../util/percentageInView";

export default function Projects() {
  const { scrollHeight } = useContext(ScrollContext);
  const ref = useRef();
  const [spring, setSpring] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    setSpring({ opacity: percentageInView(ref.current) / 25 });
  }, [scrollHeight, setSpring]);

  return (
    <StyledProjects ref={ref}>
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
