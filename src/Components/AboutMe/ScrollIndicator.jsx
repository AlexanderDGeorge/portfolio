import { useEffect, useState } from "react";

import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import TextTrail from "../TextTrail";

export default function ScrollIndicator() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const scrollEle = document.getElementById("scroll");
    if (!scrollEle) return;
    const handleScroll = (e) => {
      if (scrollEle.scrollTop > 12) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    scrollEle.addEventListener("scroll", handleScroll);
    return () => {
      scrollEle.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledIndicator>
      <TextTrail open={open}>
        <FaChevronDown />
        <FaChevronDown />
        <p>scroll</p>
      </TextTrail>
    </StyledIndicator>
  );
}

const StyledIndicator = styled.div`
  position: absolute;
  right: -10px;
  bottom: 0;
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
