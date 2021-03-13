import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import reactDom from "react-dom";
import { Document, Page } from "react-pdf";
import pdf from "./resume.pdf";

export default function Resume() {
  const modalRoot = document.getElementById("modal-root");
  const [open, setOpen] = useState(false);

  return (
    <StyledResume>
      <h1>Impressed?</h1>
      <h2>Let's Talk</h2>

      <a href="https://www.linkedin.com/in/AlexanderDGeorge/">
        <FaLinkedin style={{ fill: "#0072b1", background: "white" }} />
      </a>
      <h4>+1(775)301-8981</h4>
      <h4>alexander97.george@gmail.com</h4>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        View Resume
      </button>
      {open
        ? reactDom.createPortal(
            <StyledModal>
              <Document file={pdf}>
                <Page pageNumber={1} />
              </Document>
            </StyledModal>,
            modalRoot
          )
        : null}
    </StyledResume>
  );
}

const StyledResume = styled.div`
  width: 100%;
  padding: 10%;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  > h2 {
    margin: 10% 0;
  }
  > a,
  h4,
  button {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 200;
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    background: transparent;
    font-size: 2em;
    outline: none;
  }
  > a,
  button {
    box-shadow: 0 0 20px -14px;
    &:hover {
      box-shadow: 0 0 20px -10px;
    }
  }
`;

const StyledModal = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease-in;
`;
