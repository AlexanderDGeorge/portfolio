import { useContext, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";

const percentageSeen = (ref) => {
  const viewportHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const elementOffsetTop = ref.current.offsetTop;
  const elementHeight = ref.current.offsetHeight;

  console.log(viewportHeight, scrollTop, elementOffsetTop, elementHeight);

  const distance = scrollTop + viewportHeight - elementOffsetTop;
  const percentage = Math.round(
    distance / ((viewportHeight + elementHeight) / 100)
  );

  return Math.min(100, Math.max(0, percentage));
};

export default function Skill({ skill, i }) {
  const { scrollHeight } = useContext(ScrollContext);
  const ref = useRef();
  const key = Object.keys(skill)[0];

  const [spring, setSpring] = useSpring(() => ({
    x: 0,
  }));

  useEffect(() => {
    // console.log(percentageSeen(ref));
    if (percentageSeen(ref) > 10) {
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
