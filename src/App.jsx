import { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";

export const ScrollContext = createContext({
  scrollHeight: 0,
  elementRef: undefined,
  setElementRef: undefined,
});

export default function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

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

  return (
    <StyledApp id="app">
      <ScrollContext.Provider value={{ scrollHeight }}>
        <Frame>
          <Intro />
          <Skills />
        </Frame>
      </ScrollContext.Provider>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  z-index: 1;
  position: relative;
  height: 1000%;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
`;

const Frame = styled.div`
  position: fixed;
  top: 5vh;
  left: 5vw;
  height: 90vh;
  width: 90vw;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
`;
