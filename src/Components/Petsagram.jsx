import { useContext, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";
import Slideshow from "./Slideshow";

export default function Petsagram() {
  const { scrollHeight } = useContext(ScrollContext);

  const [spring, setSpring] = useSpring(() => ({
    opacity: 0,
    x: 100,
    config: config.slow,
  }));

  useEffect(() => {
    if (scrollHeight > 3800) {
      setSpring({ opacity: 1, x: 0 });
    } else {
      setSpring({ opacity: 0, x: 100 });
    }
  }, [scrollHeight, setSpring]);

  return (
    <StyledPetsagram>
      <DescriptionBlock
        style={{
          opacity: spring.opacity,
          transform: spring.x.interpolate((x) => `translateX(-${x}%)`),
        }}
      >
        <h2>Petsagram</h2>
        <p>
          This is the Petsagram description block. Sample text to fill up the
          space for now
        </p>
      </DescriptionBlock>
      <Slideshow
        style={{
          width: "60%",
          opacity: spring.opacity,
          transform: spring.x.interpolate((x) => `translateX(${x}%)`),
        }}
        images={["petsagram.png", "petsagram2.png", "petsagram3.png"]}
      />
    </StyledPetsagram>
  );
}

const StyledPetsagram = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  > img {
    width: 60%;
    height: auto;
    align-self: flex-end;
  }
`;

const DescriptionBlock = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > h2 {
    font-family: Mono;
    /* font-size: em; */
  }
  > p {
    text-align: left;
  }
`;
