import { createContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";

export const ScrollContext = createContext({
  scrollHeight: 0,
  elementRef: undefined,
  setElementRef: undefined,
});

export default function App() {
  const scrollHeightRef = useRef();
  const [elementRef, setElementRef] = useState(undefined);

  useEffect(() => {
    const scrollOverlay = document.getElementById("scroll-overlay");
    function handleScroll(e) {
      // console.log(e);
      scrollHeightRef.current = e.deltaY;
    }
    scrollOverlay.addEventListener("wheel", handleScroll);
    return () => {
      scrollOverlay.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <StyledApp id="app">
      <ScrollContext.Provider
        value={{
          scrollHeight: scrollHeightRef.current,
          elementRef,
          setElementRef,
        }}
      >
        <div id="scroll-overlay">
          <Intro />
          {/* <Skills /> */}
        </div>
      </ScrollContext.Provider>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease-in-out;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    padding: 0;
  }
  > div {
    height: 1000%;
    width: 100%;
    overflow-y: scroll;
  }
`;
