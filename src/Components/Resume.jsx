import { useContext } from "react";
import { ModalContext } from "../App";
import styled from "styled-components";

export default function Resume() {
  const { handleModal } = useContext(ModalContext);

  return (
    <StyledResume>
      <h1>Impressed?</h1>
      <h2>Let's Talk</h2>
      <a href="https://www.linkedin.com/in/AlexanderDGeorge/">LinkedIn</a>
      <button onClick={() => handleModal(<StyledModal></StyledModal>)}>
        View Resume
      </button>
    </StyledResume>
  );
}

const StyledResume = styled.div`
  height: 500px;
  width: 100%;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  > a,
  button {
    padding: 10px;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    box-shadow: 4px 4px 20px -12px black;
    background: transparent;
    font-size: 2em;
    outline: none;
    &:hover {
      box-shadow: 4px 4px 20px -6px black;
    }
  }
`;

const StyledModal = styled.div`
  height: 100px;
  width: 100px;
  background: black;
`;
