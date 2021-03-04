import styled from "styled-components";
import {
  SiApollographql,
  SiFirebase,
  SiGraphql,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiNextDotJs,
  SiNodeDotJs,
  SiPostgresql,
  SiPython,
  SiRails,
  SiReact,
  SiRedux,
  SiRuby,
  SiTypescript,
  SiDocker,
  SiFigma,
  SiWebrtc,
  SiCss3,
} from "react-icons/si";

const skills = {
  Apollo: <SiApollographql />,
  Ajax: <h2>AJAX</h2>,
  C: <h2>C</h2>,
  "C++": <h2>C++</h2>,
  CSS: <SiCss3 />,
  DevOps: <h2>DevOps</h2>,
  Docker: <SiDocker />,
  Express: <h2>Express</h2>,
  Figma: <SiFigma />,
  Firebase: <SiFirebase />,
  GraphQL: <SiGraphql />,
  Git: <SiGit />,
  HTML: <SiHtml5 />,
  JavaScript: <SiJavascript />,
  jQuery: <SiJquery />,
  MongoDB: <SiMongodb />,
  NextJs: <SiNextDotJs />,
  NodeJs: <SiNodeDotJs />,
  NoSQL: <h2>NoSQL</h2>,
  OOP: <h2>OOP</h2>,
  PostgreSQL: <SiPostgresql />,
  Python: <SiPython />,
  Rails: <SiRails />,
  React: <SiReact />,
  Recoil: <h2>Recoil</h2>,
  Redux: <SiRedux />,
  Ruby: <SiRuby />,
  SQL: <h2>SQL</h2>,
  TDD: <h2>TDD</h2>,
  TypeScript: <SiTypescript />,
  UI: <h2>UI</h2>,
  UX: <h2>UX</h2>,
  WebRTC: <SiWebrtc />,
};

export default function Skills() {
  return (
    <StyledSkills id="skills">
      {Object.keys(skills).map((skill, i) => (
        <StyledSkill key={i}>{skills[skill]}</StyledSkill>
      ))}
    </StyledSkills>
  );
}

const StyledSkills = styled.div`
  background: transparent;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledSkill = styled.div`
  height: 100px;
  width: 100px;
  margin: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333;
  box-shadow: 0 0 20px -12px rgba(0, 0, 0, 0.4);
  border-radius: 24px;
  > svg {
    height: 50px;
    width: auto;
  }
`;
