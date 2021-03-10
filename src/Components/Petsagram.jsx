import { useContext, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";
import Slideshow from "./Slideshow";
import { FaLink, FaGithub } from "react-icons/fa";
import percentageInView from "../util/percentageInView";
import { projectDescription, projectSection } from "../util/commonStyles";

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
          Petsagram is a simple social media application modeled after Instagram
          but made for pets. Petsagram features a real time feed that paginates
          posts for faster loading, real time messaging, as well as basic
          Instagram features (liking posts, comments, search).
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
  ${projectSection}
`;

const DescriptionBlock = styled(animated.div)`
  ${projectDescription}
`;
