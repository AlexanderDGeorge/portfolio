import { useContext, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";
import percentageInView from "../util/percentageInView";

export default function Skill({ skill, i }) {
  const { scrollHeight } = useContext(ScrollContext);
  const ref = useRef();
  const key = Object.keys(skill)[0];

  const [spring, setSpring] = useSpring(() => ({
    x: 0,
  }));

  useEffect(() => {
    if (percentageInView(ref.current) > 10) {
      setSpring({ x: 10 });
    }
  }, [scrollHeight, setSpring]);

  return (
    <StyledSkill
      style={{ transform: spring.x.interpolate((x) => `translateX(${x}%)`) }}
      ref={ref}
    >
      {skill[key]}
    </StyledSkill>
  );
}

const StyledSkill = styled(animated.div)`
  color: white;
  > svg {
    height: 30px;
    width: auto;
  }
  > h2 {
    font-family: Mono;
  }
`;
