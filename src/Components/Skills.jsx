import styled from "styled-components";
import { useSprings, animated } from "react-spring";
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
import { useContext, useEffect } from "react";
import { ScrollContext } from "../App";

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

const setSpring = (index, scrollHeight) => {
  const multiplier = index % 2 === 0 ? 1 : -1;
  return {
    top: index * 50,
    left: index % 2 === 0 ? "0%" : "100%",
    x: (multiplier * scrollHeight * (1 / index)) / 2,
  };
};

export default function Skills() {
  const { scrollHeight } = useContext(ScrollContext);
  const [springs, setSprings] = useSprings(skills.length, (index) =>
    setSpring(index, scrollHeight)
  );

  useEffect(() => {
    // console.log(scrollHeight);
    setSprings((index) => setSpring(index, scrollHeight - 1600));
  }, [scrollHeight, setSprings]);

  return (
    <StyledSkills>
      {springs.map((props) => (
        <animated.div
          style={{
            top: props.top,
            left: props.left,
            transform: props.x.interpolate((x) => `translate3d(${x}px, 0, 0)`),
          }}
        ></animated.div>
      ))}
    </StyledSkills>
  );
}

const StyledSkills = styled.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  > div {
    position: absolute;
    height: 20px;
    width: 20px;
    background: white;
  }
`;
