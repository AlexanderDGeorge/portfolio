import { css } from "styled-components";

export const projectSection = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const projectDescription = css`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;
  > h2 {
    font-family: Mono;
    font-size: 2em;
  }
  > p {
    text-align: left;
    font-weight: 200;
    font-size: 1em;
  }
  svg {
    height: 30px;
    width: auto;
    margin: 10px;
    fill: #333;
  }
`;
