import { render } from "preact";
import { css, injectGlobal } from "@emotion/css";
import { App } from "./app";

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

  h2 span, h3 span, h4 span {
    background-color: lightgrey;
    padding: 0 0.4rem;
    color: black;
    border-radius: 1px;
  }
  h2, h3, h4 {
    span + span {
      margin-left: 0.5em;
    }
  }
`;

const main = document.querySelector("main");
const style = css`
  margin: 0 auto 6rem;
`;
main?.classList.add(style);

render(<App />, main!);
