import { useState } from "react";

export default function useModal(open = true) {
  const [modalOpen, setModalOpen] = useState(open);
  const [modalContent, setModalContent] = useState(undefined);

  const handleModal = (content) => {
    if (content) {
      setModalOpen(true);
      setModalContent(content);
    } else {
      setModalOpen(false);
      setModalContent(content);
    }
  };

  return { handleModal, modalOpen, modalContent };
}
