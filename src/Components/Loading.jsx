import styled, { keyframes } from "styled-components";

export default function Loading() {
  return (
    <StyledLoading>
      <svg
        width="78"
        height="103"
        viewBox="0 0 78 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <StyledPath
          id="AG"
          d="M0.5 103L33.5 0.5H44.5L57 40H45L39 21L25.5 65H52.5L49.5 55H42V49H60L77.5 103H64L56 76.5H22L14 103H0.5Z"
          fill="#333"
        />
      </svg>
    </StyledLoading>
  );
}

const draw = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`;

const StyledLoading = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPath = styled.path`
  stroke-dasharray: 480;
  stroke-dashoffset: 480;
  animation: ${draw} 5s ease;
  animation-fill-mode: forwards;
`;

export const Logo = ({ color, style }) => (
  <svg
    width="78"
    height="103"
    viewBox="0 0 78 103"
    fill={color}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <StyledPath
      id="AG"
      d="M0.5 103L33.5 0.5H44.5L57 40H45L39 21L25.5 65H52.5L49.5 55H42V49H60L77.5 103H64L56 76.5H22L14 103H0.5Z"
      fill={color}
    />
  </svg>
);
