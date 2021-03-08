import styled from "styled-components";

export default function Resume() {
  return (
    <StyledResume>
      <h1>Impressed?</h1>
      <h2>Let's Talk</h2>
      {/* <img src="/images/BearCreek.jpg" alt="" /> */}
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
`;
