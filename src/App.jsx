import styled from "styled-components";
import { lazy, Suspense } from "react";
import Loading, { Logo } from "./Components/Loading";

const AboutMe = lazy(() => import("./Components/AboutMe"));
const Skills = lazy(() => import("./Components/Skills/Skills"));
const SkillsHeader = lazy(() => import("./Components/Skills/SkillsHeader"));
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));

export default function App() {
  return (
    <StyledApp id="app">
      <Suspense fallback={Loading}>
        <Frame>
          <Logo color="#48B18C" />
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
  > svg {
    position: absolute;
    z-index: 5;
    top: 2px;
    left: 2px;
    height: 40px;
    width: 40px;
  }
`;
