import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../App";
import Pairboard from "./Pairboard";
import Petsagram from "./Petsagram";

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
      <Pairboard />
      <Petsagram />
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 5%;
  background: #eee;
  > h1 {
    width: 100%;
    margin: 5% 0;
    font-family: Mono;
    font-size: 8em;
    color: #333;
    @media screen and (max-width: 600px) {
      font-size: 5em;
    }
  }
`;
