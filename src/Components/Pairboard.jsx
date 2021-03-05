import { useContext, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { ScrollContext } from "../App";
import { FaLink, FaGithub } from "react-icons/fa";
import Slideshow from "./Slideshow";

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
        <br />
        <p>
          This project was used to learn TypeScript and take advantage of some
          of the more advanced features provided by Firebase.
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
  margin-left: 5px;
  width: 40%;
  > h2 {
    font-family: Mono;
    /* font-size: em; */
  }
  > p {
    text-align: right;
    font-weight: 200;
    font-size: 1em;
  }
  svg {
    height: 25px;
    width: auto;
    margin: 5px;
    fill: #333;
  }
`;
