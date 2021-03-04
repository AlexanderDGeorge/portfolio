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
import Skill from "./Skill";

const skills = [
  { Apollo: <SiApollographql /> },
  { Ajax: <h2>AJAX</h2> },
  { C: <h2>C</h2> },
  { "C++": <h2>C++</h2> },
  { CSS: <SiCss3 /> },
  { DevOps: <h2>DevOps</h2> },
  { Docker: <SiDocker /> },
  { Express: <h2>Express</h2> },
  { Figma: <SiFigma /> },
  { Firebase: <SiFirebase /> },
  { GraphQL: <SiGraphql /> },
  { Git: <SiGit /> },
  { HTML: <SiHtml5 /> },
  { JavaScript: <SiJavascript /> },
  { jQuery: <SiJquery /> },
  { MongoDB: <SiMongodb /> },
  { NextJs: <SiNextDotJs /> },
  { NodeJs: <SiNodeDotJs /> },
  { NoSQL: <h2>NoSQL</h2> },
  { OOP: <h2>OOP</h2> },
  { PostgreSQL: <SiPostgresql /> },
  { Python: <SiPython /> },
  { Rails: <SiRails /> },
  { React: <SiReact /> },
  { Recoil: <h2>RECOIL</h2> },
  { Redux: <SiRedux /> },
  { Ruby: <SiRuby /> },
  { SQL: <h2>SQL</h2> },
  { TDD: <h2>TDD</h2> },
  { TypeScript: <SiTypescript /> },
  { UI: <h2>UI</h2> },
  { UX: <h2>UX</h2> },
  { WebRTC: <SiWebrtc /> },
];

export default function Skills() {
  //   console.log(document.getElementById("skills")?.offsetTop);

  return (
    <StyledSkills id="skills">
      {skills.map((skill, i) => (
        <Skill key={i} skill={skill} i={i} />
      ))}
    </StyledSkills>
  );
}

const StyledSkills = styled.div`
  /* position: absolute; */
  background: transparent;
  height: 100%;
  width: 100%;
`;
