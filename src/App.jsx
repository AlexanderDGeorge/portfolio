import { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import Intro from "./Components/Intro";
import SkillsHeader from "./Components/SkillsHeader";
import Skills from "./Components/Skills";
import { useSpring, animated, config } from "react-spring";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import ScrollIndicator from "./Components/ScrollIndicator";

export const ScrollContext = createContext({
  scrollHeight: 0,
  elementRef: undefined,
  setElementRef: undefined,
});

export default function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [spring, setSpring] = useSpring(() => ({
    scroll: 0,
    config: config.stiff,
  }));

  useEffect(() => {
    const app = document.getElementById("app");
    function handleScroll() {
      const posY = app.getBoundingClientRect().top;
      const offset = window.pageYOffset - posY;
      setScrollHeight(offset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollHeight > 1400) {
      setSpring({ scroll: (scrollHeight - 1400) / 50 });
    } else {
      setSpring({ scroll: 0 });
    }
  }, [scrollHeight, setSpring]);

  return (
    <StyledApp id="app">
      <ScrollContext.Provider value={{ scrollHeight }}>
        <Frame>
          <div>
            <Intro />
            <ScrollContainer
              style={{
                transform: spring.scroll.interpolate(
                  (scroll) => `translateY(-${scroll}%)`
                ),
              }}
            >
              <SkillsHeader />
              <Skills />
              <Projects />
              <Resume />
            </ScrollContainer>
          </div>
          {/* <ScrollIndicator /> */}
        </Frame>
      </ScrollContext.Provider>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  z-index: 1;
  position: relative;
  height: 500%;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
`;

const Frame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 40px;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    padding: 0px;
  }
  > div {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`;

const ScrollContainer = styled(animated.div)`
  position: absolute;
  z-index: 1;
  /* height: 500%; */
  width: 100%;
  background: #eee;
  box-shadow: 0 0 20px -4px rgba(0, 0, 0, 0.5);
`;
