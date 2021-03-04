import { useContext, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";

export default function Pairboard() {
  const { scrollHeight } = useContext(ScrollContext);

  const [spring, setSpring] = useSpring(() => ({
    opacity: 0,
    x: 100,
    config: config.slow,
  }));

  useEffect(() => {
    if (scrollHeight > 3000) {
      setSpring({ opacity: 1, x: 0 });
    } else {
      setSpring({ opacity: 0, x: 100 });
    }
  }, [scrollHeight, setSpring]);

  return (
    <StyledPairboard>
      <animated.img
        src="/images/pairboard.png"
        alt="pairboard preview"
        style={{
          opacity: spring.opacity,
          transform: spring.x.interpolate((x) => `translateX(-${x}%)`),
        }}
      />
      <DescriptionBlock
        style={{
          opacity: spring.opacity,
          transform: spring.x.interpolate((x) => `translateX(${x}%)`),
        }}
      >
        <h2>Pairboard.dev</h2>
        <p>
          This is the pairboard.dev description block. Sample text to fill up
          the space for now
        </p>
      </DescriptionBlock>
    </StyledPairboard>
  );
}

const StyledPairboard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  > img {
    width: 60%;
    height: auto;
    align-self: flex-start;
  }
`;

const DescriptionBlock = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  > h2 {
    font-family: Mono;
    /* font-size: em; */
  }
  > p {
    text-align: right;
  }
`;
