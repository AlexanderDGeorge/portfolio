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
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
