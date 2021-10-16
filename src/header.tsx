import { css } from "@emotion/css";
import { Hero } from "./hero";
import { Menu } from "./menu";

import bgUrl from "./assets/hero_bg.jpg";
import imgUrl from "./assets/a_or.jpg";
import { Section } from "./components/section";

const styles = {
  header: css`
    margin: 0;
    padding: 0;
    width: 100vw;
    position: relative;
    overflow: hidden;
    background-color: #111111;
    background-image: url(${bgUrl});
    background-position: center;
    background-size: cover;
  `,
  themeOrigins: css`
    background-image: url(${imgUrl});
    background-position: center;
    background-size: auto 90vh;
    background-repeat: no-repeat;

    &:before {
      content: " ";
      inset: 0;
      position: absolute;
      z-index: 0;
      background-image: url(${bgUrl});
      background-position: center;
      background-size: cover;
    }

    &:after {
      content: " ";
      inset: 0;
      position: absolute;
      z-index: 0;
      background-image: url(${imgUrl});
      background-position: center;
      background-size: auto 90vh;
      background-repeat: no-repeat;
    }
  `,
  coverContainer: css`
    width: 100vw;
    height: 100vw;
    margin: 0 auto;
    max-width: 900px;
    max-height: 900px;
  `,
  image: css`
    width: 100%;
    height: auto;
    box-shadow: 0 0.5rem 2rem #0000005e;
  `,
  iframeContainer: css`
    width: 100vw;
    height: 56.25vw;
    margin: 0 auto 14vh;
    max-width: 960px;
    max-height: 540px;
  `,
  video: css`
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 101%;
    transform: translate(-50%, -50%);
  `,
  albumTeaser: css`
    text-align: center;
    font-size: 120%;
    padding: 7vh;
  `,
  title: css`
    font-size: 150%;
    letter-spacing: 10px;
    font-weight: bold;
  `,
  buyButton: css`
    border: 2px solid #ff6633;
    border-radius: 3px;
    padding: 0 0.5em 0.15em;
    margin: 0.5em 0 0;
    color: #ff6633;
    font-weight: bold;
    text-transform: uppercase;
    display: inline-block;
    cursor: pointer;
    transition: all 100ms ease;

    &:hover {
      color: white;
      background-color: #ff6633;
      text-decoration: none;
      box-shadow: 0 0 20px #ff663399;

      &:active {
        transform: translateY(1px);
      }
    }
  `,
};

function getImageUrl(filename: string): string {
  return new URL(`./assets/${filename}`, import.meta.url).href;
}

export function Header() {
  return (
    <div className={styles.header}>
      <Menu />
      {/* <Hero /> */}
      {/* <div className={styles.iframeContainer}>
        <iframe
          title="Dynatron - Origins - Youtube"
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/PSzNvha6MpM"
          frameBorder="0"
          allowFullScreen
        />
      </div> */}
      <div className={styles.coverContainer}>
        <img
          loading="lazy"
          src={getImageUrl("a_or.jpg")}
          alt={`front cover for Origins`}
          width="700"
          height="700"
          className={styles.image}
        />
      </div>
      <Section className={styles.albumTeaser}>
        New album <br />
        <span className={styles.title}>ORIGINS</span>
        <br />
        <br />
        <a
          href="https://ffm.to/dynatronorigins"
          target="_blank"
          rel="noopener"
          className={styles.buyButton}
        >
          LISTEN NOW
        </a>
        <br />
        <a
          href="https://www.blood-music.com/store/"
          target="_blank"
          rel="noopener"
          className={styles.buyButton}
        >
          BUY NOW
        </a>
        <br />
        <small>(CD / VINYL)</small>
        <br />
      </Section>
      <div className={styles.iframeContainer}>
        <iframe
          title="Dynatron - Origins - Youtube"
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/PSzNvha6MpM"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
