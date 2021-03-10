import { useContext, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ModalContext } from "../App";

export default function Modal() {
  const { modalOpen, modalContent, handleModal } = useContext(ModalContext);
  const modalRoot = document.getElementById("modal-root");
  const modalRef = useRef(null);

  const closeModal = () => {
    if (modalOpen) {
      handleModal();
    }
  };

  if (modalOpen && modalRoot) {
    return ReactDOM.createPortal(
      <StyledModal>
        <div></div>
        {/* <ModalContent ref={modalRef}>
          <ModalClose onClick={() => handleModal()}>
            <MdClose />
          </ModalClose> */}
        {modalContent}
        {/* </ModalContent> */}
      </StyledModal>,
      modalRoot
    );
  } else {
    return null;
  }
}

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  height: 100%;
  width: 100%;
  padding: 2% 15%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    padding: 2% 8%;
  }
  @media screen and (max-width: 600px) {
    padding: 2%;
  }
  > div {
    height: 100%;
    width: 100%;
    background: black;
  }
`;
