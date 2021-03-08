import { FaLongArrowAltDown } from "react-icons/fa";
import styled from "styled-components";

export default function ScrollIndicator() {
  return (
    <StyledScrollIndicator>
      <FaLongArrowAltDown />
    </StyledScrollIndicator>
  );
}

const StyledScrollIndicator = styled.div`
  position: fixed;
  left: calc(50% - (15px / 2));
  > svg {
    width: 15px;
    height: auto;
  }
`;
