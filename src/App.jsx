import styled from "styled-components";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills/Skills";

export default function App() {
  return (
    <StyledApp id="app">
      <Frame>
        <div id="scroll">
          <AboutMe />
          <Skills />
        </div>
      </Frame>
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
