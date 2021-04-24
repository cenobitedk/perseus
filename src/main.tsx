import { render } from "preact";
import { App } from "./app";
import { injectGlobal } from "@emotion/css";

injectGlobal`
  @font-face {
    font-family: "EurostileExt";
    src: url("./src/font/eurostilebq-extended.woff2") format("woff2"),
      url("./src/font/eurostilebq-extended.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  html,
  body {
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: black;
    background-image: url(./src/img/bg1.jpg);
    background-position: top center;
    background-size: cover;
    background-attachment: fixed;
    color: lightgrey;
    font-family: "EurostileExt", Arial, Helvetica, sans-serif;
  }
`;

render(<App />, document.getElementById("app")!);
