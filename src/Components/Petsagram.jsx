import { useContext, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";
import Slideshow from "./Slideshow";
import { FaLink, FaGithub } from "react-icons/fa";
import percentageInView from "../util/percentageInView";

export default function Petsagram() {
  const { scrollHeight } = useContext(ScrollContext);
  const ref = useRef();

  useEffect(() => {
    percentageInView(ref.current);
  }, [scrollHeight]);

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
    <StyledPetsagram ref={ref}>
      <DescriptionBlock
        style={{
          opacity: spring.opacity,
          transform: spring.x.interpolate((x) => `translateX(-${x}%)`),
        }}
      >
        <h2>Petsagram</h2>
        <span>
          <a href="https://pet-feeds.web.app/">
            <FaLink />
          </a>
          <a href="https://github.com/AlexanderDGeorge/petsagram">
            <FaGithub />
          </a>
        </span>
        <p>
          This is the Petsagram description block. Sample text to fill up the
          space for now
        </p>
      </DescriptionBlock>
      <Slideshow
        style={{
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
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const DescriptionBlock = styled(animated.div)`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;
  > h2 {
    font-family: Mono;
    font-size: 2em;
  }
  > p {
    text-align: right;
    font-weight: 200;
    font-size: 1em;
  }
  svg {
    height: 30px;
    width: auto;
    margin: 10px;
    fill: #333;
  }
`;
