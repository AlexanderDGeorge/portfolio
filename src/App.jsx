import styled from "styled-components";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills/Skills";
import SkillsHeader from "./Components/Skills/SkillsHeader";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { Suspense } from "react";
import Loading from "./Components/Loading";

export default function App() {
  return (
    <StyledApp id="app">
      <Suspense fallback={Loading}>
        <Frame>
          <div id="scroll">
            <AboutMe />
            <SkillsHeader />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </Frame>
      </Suspense>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
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
    background: #333;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;
