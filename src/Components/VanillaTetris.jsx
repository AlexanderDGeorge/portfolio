import { useRef } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { animated } from "react-spring";
import styled from "styled-components";
import { projectDescription, projectSection } from "../util/commonStyles";
import useProjectAnimation from "../util/useProjectAnimation";
import Slideshow from "./Slideshow";

export default function VanillaTetris() {
  const ref = useRef();

  const { spring } = useProjectAnimation(ref.current);

  return (
    <StyledVanillaTetris ref={ref}>
      <Slideshow
        style={{
          opacity: spring.opacity,
          transform: spring.x.interpolate((x) => `translateX(-${x}%)`),
        }}
        images={["tetris.png", "tetris2.png", "tetris3.png"]}
      />
      <DescriptionBlock
        style={{
          opacity: spring.opacity,
          transform: spring.x.interpolate((x) => `translateX(${x}%)`),
        }}
      >
        <h2>Vanilla Tetris</h2>
        <span>
          <a href="https://vanilla-tetris.netlify.app/">
            <FaLink />
          </a>
          <a href="https://github.com/AlexanderDGeorge/Vanilla-Tetris">
            <FaGithub />
          </a>
        </span>
        <p>
          Vanilla Tetris was one of the first solo projects I created during the
          App Academy bootcamp. Vanilla Tetris boasts a barebones construction
          of only vanilla JavaScript, HTML, and CSS. The game is animated
          through the HTML canvas and simple keyframes animations.
        </p>
        <p>
          Vanilla Tetris also allows the user to save high scores into
          localStorage and comes complete with an annoying dubstep remix of the
          Tetris theme song that <strong>can</strong> 🙏 be muted.
        </p>
      </DescriptionBlock>
    </StyledVanillaTetris>
  );
}

const StyledVanillaTetris = styled.div`
  ${projectSection};
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const DescriptionBlock = styled(animated.div)`
  ${projectDescription}
  align-items: flex-end;
  > p {
    text-align: right;
  }
`;
