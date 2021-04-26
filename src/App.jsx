import styled from "styled-components";
import SlidingDiv from "./Components/AboutMe/SlidingDiv";
// import SkillsHeader from "./Components/SkillsHeader";
// import Skills from "./Components/Skills";
// import Projects from "./Components/Projects";
// import Resume from "./Components/Resume";

export default function App() {
  return (
    <StyledApp id="app">
      <Frame>
        <div id="scroll">
          <SlidingDiv />
          <StyledImage />

          {/* <SkillsHeader />
          <Skills />
          <Projects />
          <Resume /> */}
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

const StyledImage = styled.div`
  position: sticky;
  height: 100%;
  width: 50%;
  top: 0;
  margin-left: 50%;
  background-image: url(/images/waterfall.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
