import { animated } from "react-spring";
import { useRef } from "react";
import styled from "styled-components";
import { FaLink, FaGithub } from "react-icons/fa";
import Slideshow from "../Slideshow";
import { projectDescription, projectSection } from "../../util/commonStyles";
import useProjectAnimation from "../../util/useProjectAnimation";

export default function MadCuts() {
  const ref = useRef();

  const { spring } = useProjectAnimation(ref);

  console.log(spring);

  return (
    <StyledMadCuts ref={ref}>
      <DescriptionBlock
        style={{
          opacity: spring.opacity,
          transform: spring.x.interpolate((x) => `translateX(${x}%)`),
        }}
      >
        <h2>MadCutsMobile</h2>
        <span>
          <a href="https://madcutsmobile.firebaseapp.com/">
            <FaLink />
          </a>
          <a href="https://github.com/AlexanderDGeorge/MadCutsMobile">
            <FaGithub />
          </a>
        </span>
        <p>
          MadCutsMobile is my first freelance project! This web-application has
          pretty simple functionality but I learned a lot along the way. I
          learned and implemented the Stripe API to handle payments and included
          the Google Maps API for user location and for calculating mileage
          fees. This project is going to be up and running for real customers
          soon! Because this application is going to be used in production, I
          had to stay diligent and mindful about security.
        </p>
      </DescriptionBlock>
      <Slideshow
        style={{
          opacity: spring.opacity,
          transform: spring.x.interpolate((x) => `translateX(-${x}%)`),
        }}
        images={[
          "MadCuts.png",
          "MadCuts2.png",
          "MadCuts3.png",
          "MadCuts4.png",
          "MadCuts5.png",
        ]}
      />
    </StyledMadCuts>
  );
}

const StyledMadCuts = styled.div`
  ${projectSection}
`;

const DescriptionBlock = styled(animated.div)`
  ${projectDescription}
`;
