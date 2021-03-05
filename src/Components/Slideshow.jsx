import { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

export default function Slideshow({ images, style }) {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(
    () => setIndex((state) => (state + 1) % images.length),
    [images.length]
  );
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <StyledSlideshow onClick={onClick} style={style}>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.img
            src={`/images/${images[item]}`}
            alt=""
            style={props}
            key={key}
          />
        );
      })}
    </StyledSlideshow>
  );
}

const StyledSlideshow = styled(animated.div)`
  position: relative;
  height: auto;
  width: 60%;
  cursor: pointer;
  > img {
    border: 1px solid #333;
    position: absolute;
    width: 100%;
    height: auto;
  }
`;
