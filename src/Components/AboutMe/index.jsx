import { useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import About from "./About";
import ScrollIndicator from "./ScrollIndicator";

export default function SlidingDiv() {
  const [spring, setSpring] = useSpring(() => ({
    transform: "translateX(0%)",
    config: {
      tension: 80,
      friction: 12,
    },
  }));

  useEffect(() => {
    const scrollEle = document.getElementById("scroll");
    if (!scrollEle) return;
    const handleScroll = (e) => {
      if (scrollEle.scrollTop > 12) {
        setSpring({ transform: "translateX(50%)" });
      } else {
        setSpring({ transform: "translateX(0%)" });
      }
    };

    scrollEle.addEventListener("scroll", handleScroll);
    return () => {
      scrollEle.removeEventListener("scroll", handleScroll);
    };
  }, [setSpring]);

  return (
    <Container>
      <StyledSlide style={spring} id="slide">
        <About />
        <ScrollIndicator />
        <h1>
          HEL
          <br /> LO!
        </h1>
      </StyledSlide>
      <StyledImage />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 160%;
  width: 100%;
`;

const StyledSlide = styled(animated.div)`
  position: absolute;
  right: 50%;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #333;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.4);
  > h1 {
    position: absolute;
    z-index: 1;
    top: 0;
    right: -100px;
    height: 62.5%;
    width: 200px;
    font-size: 8em;
    font-weight: 500;
    color: white;
    text-align: center;
    font-family: Mono;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

const StyledImage = styled.div`
  position: sticky;
  height: 62.5%;
  width: 50%;
  top: 0;
  margin-left: 50%;
  background-image: url(/images/waterfall.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
