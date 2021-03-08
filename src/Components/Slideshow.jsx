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
      <div>
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
      </div>
    </StyledSlideshow>
  );
}

const StyledSlideshow = styled(animated.div)`
  position: relative;
  height: auto;
  min-width: 60%;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    min-width: 80%;
  }
  > div {
    width: 100%;
    padding-bottom: calc(9 / 16 * 100%);
  }
  img {
    box-shadow: 0 0 20px -8px rgba(0, 0, 0, 0.4);
    position: absolute;
    width: 100%;
    height: auto;
  }
`;
