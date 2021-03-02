import React from "react";
import { useTrail, animated } from "react-spring";

export default function TextTrail({ open, children }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200, delay: 1000 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return trail.map(({ x, height, ...rest }, index) => (
    <animated.div
      key={index}
      style={{
        ...rest,
        transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
      }}
    >
      {items[index]}
    </animated.div>
  ));
}
