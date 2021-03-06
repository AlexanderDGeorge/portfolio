import { animated } from "react-spring";
import { useRef } from "react";
import styled from "styled-components";
import { FaLink, FaGithub } from "react-icons/fa";
import Slideshow from "../Slideshow";
import { projectDescription, projectSection } from "../../util/commonStyles";
import useProjectAnimation from "../../util/useProjectAnimation";

export default function Pairboard() {
  const ref = useRef();

  const { spring } = useProjectAnimation(ref);

  console.log(spring);

  return (
    <StyledPairboard ref={ref}>
      <Slideshow
        style={{
          opacity: spring.opacity,
          transform: spring.x.interpolate((x) => `translateX(-${x}%)`),
        }}
        images={[
          "pairboard.png",
          "pairboard2.png",
          "pairboard3.png",
          "pairboard4.png",
        ]}
      />
      <DescriptionBlock
        style={{
          opacity: spring.opacity,
          transform: spring.x.interpolate((x) => `translateX(${x}%)`),
        }}
      >
        <h2>Pairboard.dev</h2>
        <span>
          <a href="https://pairboard.dev">
            <FaLink />
          </a>
          <a href="https://github.com/AlexanderDGeorge/pairboard.dev">
            <FaGithub />
          </a>
        </span>
        <p>
          Pairboard.dev was designed to be a developer platform to connect and
          share coding problems. Users are able to create and share posts with a
          description concerning their problem. Fellow developers/users have the
          ability to respond through comments or messaging. However, the main
          feature of pairboard.dev is the integrated webRTC video chat
          functionality allowing users to discuss, solve, or
          <i>pairboard</i> problems in a real-time environment.
        </p>
      </DescriptionBlock>
    </StyledPairboard>
  );
}

const StyledPairboard = styled.div`
  ${projectSection}
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const DescriptionBlock = styled(animated.div)`
  ${projectDescription}
  align-items: flex-end;
  > p,
  h2 {
    text-align: right;
  }
`;
