import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { useEffect, useRef } from "react";
import Pairboard from "./Pairboard";
import Petsagram from "./Petsagram";
import VanillaTetris from "./VanillaTetris";
import percentageInView from "../../util/percentageInView";

export default function Projects() {
  const ref = useRef();
  const [spring, setSpring] = useSpring(() => ({
    opacity: 0,
  }));

  // useEffect(() => {
  //   setSpring({ opacity: percentageInView(ref.current) / 25 });
  // }, [setSpring]);

  useEffect(() => {
    const scrollEle = document.getElementById("scroll");
    if (!scrollEle) return;
    const handleScroll = (e) => {
      setSpring({ opacity: percentageInView(ref.current) / 25 });
    };

    scrollEle.addEventListener("scroll", handleScroll);
    return () => {
      scrollEle.removeEventListener("scroll", handleScroll);
    };
  }, [setSpring]);

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
  padding: 10% 0;
  background: #eee;
  > h1 {
    width: 100%;
    font-family: Mono;
    color: #333;
  }
  > p {
    margin-left: 20%;
  }
`;
