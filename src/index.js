import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    @font-face {
      font-family: Railway;
      src: url(/Raleway-VariableFont_wght.ttf);
    }
    @font-face {
      font-family: Mono;
      src: url(/RubikMonoOne-Regular.ttf);
    }
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Railway;
  }
  #root {
    height: 100vh;
    width: 100vw;
  }
  h1 {
    font-size: 7em;
    font-family: Mono;
    @media screen and (max-width: 900px) {
      font-size: 6em;
    }
    @media screen and (max-width: 700px) {
      font-size: 5em;
    }
    @media screen and (max-width: 500px) {
      font-size: 3em;
    }
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
