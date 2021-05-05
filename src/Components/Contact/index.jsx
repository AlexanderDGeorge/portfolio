import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import reactDom from "react-dom";
import pdf from "./resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Contact() {
  const modalRoot = document.getElementById("modal-root");
  const [open, setOpen] = useState(false);
  const pdfRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const closePdf = (e) => {
      console.log(e.target);
      if (e.target !== pdfRef.current) {
        setOpen(false);
      }
    };

    modalRoot.addEventListener("click", closePdf);
    return () => {
      modalRoot.removeEventListener("click", closePdf);
    };
  }, [open, modalRoot]);

  return (
    <StyledContact>
      <h1>Contact</h1>
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
              <Document file={pdf} onLoadError={console.error} ref={pdfRef}>
                <Page pageNumber={1} />
              </Document>
            </StyledModal>,
            modalRoot
          )
        : null}
    </StyledContact>
  );
}

const StyledContact = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 2% 10%;
  background: #48b18c;
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
    padding: 16px;
    border-radius: 16px;
    color: white;
    text-decoration: none;
    background: transparent;
    font-size: 2em;
    outline: none;
  }
  > a,
  button {
    box-shadow: 0 0 20px -4px rgba(0, 0, 0, 0.4);
    &:hover {
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.4);
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
  canvas {
    height: 60vmax !important;
    width: auto !important;
  }
`;
