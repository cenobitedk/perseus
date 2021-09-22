import { registerSW } from "virtual:pwa-register";
import { render } from "preact";
import { injectGlobal } from "@emotion/css";
import { App } from "./app";
import bgUrl from "./assets/bg.jpg";

// Boot the service worker
registerSW();

const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
  navigator.userAgent
);

if (mobile) {
  // injectGlobal`
  //   html:before {
  //     background-image: url(${bgUrl});
  //     background-position: top center;
  //     background-size: 100vw;
  //   }
  // `
} else {
  // injectGlobal`
  //   html:before {
  //     background-image: url(${bgUrl});
  //     background-position: top center;
  //     background-size: cover;
  //     background-attachment: fixed;
  //   }
  // `;
}

injectGlobal`
  h2, h3, h4 {
    span {
      background-color: lightgrey;
      padding: 0 0.4rem 0.1rem;
      color: black;
      border-radius: 1.5px;
      & + span {
        margin-left: 0.5em;
      }
    }
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const main = document.querySelector("main");

render(<App />, main!);
