import { useEffect, useState } from "react";
import styled from "styled-components";
import TextTrail from "../TextTrail";

export default function About() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const scrollEle = document.getElementById("scroll");
    if (!scrollEle) return;
    const handleScroll = (e) => {
      if (scrollEle.scrollTop > 12) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    scrollEle.addEventListener("scroll", handleScroll);
    return () => {
      scrollEle.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledAbout id="about">
      <TextTrail open={open}>
        <h3>I'm</h3>
        <h1>Alexander George</h1>
        <h4>ADVENTURER x CREATIVE x DEVELOPER</h4>
        <p>
          I'm a <strong>Software Engineer</strong> experienced with crafting
          Full Stack Web Applications. I have been learning about and working
          with code for over five years.
        </p>
      </TextTrail>
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  position: sticky;
  top: 50%;
  right: 0;
  width: 100%;
  margin-bottom: 10%;
  padding: 5%;
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: white;
    word-wrap: break-word;
  }
  h3 {
    color: white;
  }
  h4 {
    color: #ccc;
  }
  p {
    max-width: 75ch;
    margin-top: 40px;
    color: white;
    font-weight: 200;
    font-size: 1em;
  }
`;
