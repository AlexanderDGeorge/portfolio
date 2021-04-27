import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import "firebase/analytics";
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
  html, body, #root {
    height: 100%;
    width: 100%;
  }
  #modal-root {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
  }
  h1 {
    font-size: clamp(8vw, 5em, 10vw);
    display: inline;
    font-family: Mono;
  }
  h2 {
    font-size: clamp(6vw, 4em, 8vw);
  }
  h3 {
    font-size: 4vw;
  }
`;

const firebaseConfig = {
  apiKey: "AIzaSyAIiUEjxoVhybpP1fxFg9E6MtDFFnBJSYY",
  authDomain: "portfolio-faccf.firebaseapp.com",
  projectId: "portfolio-faccf",
  storageBucket: "portfolio-faccf.appspot.com",
  messagingSenderId: "982822449555",
  appId: "1:982822449555:web:a426c84c0e8095d9323866",
  measurementId: "G-SQD47JBXPD",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
