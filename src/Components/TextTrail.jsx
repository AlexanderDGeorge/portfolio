import React from "react";
import { useTrail, animated } from "react-spring";
import styled from "styled-components";

export default function TextTrail({ open, children }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 8, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return trail.map(({ x, height, ...rest }, index) => (
    <AnimatedDiv
      key={index}
      style={{
        ...rest,
        transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
      }}
    >
      {items[index]}
    </AnimatedDiv>
  ));
}

const AnimatedDiv = styled(animated.div)`
  * {
    transition: all 0.55s ease-in-out;
  }
`;
