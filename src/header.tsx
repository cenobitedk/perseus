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
  iframeContainer: css`
    width: 100vw;
    height: 56.25vw;
    margin: 0 auto;
    max-width: 1600px;
    max-height: 900px;
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
    padding-bottom: 14vh;
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
    margin: 0.5em 0.5em 0 0;
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

export function Header() {
  return (
    <div className={styles.header}>
      <Menu />
      {/* <Hero /> */}
      <div className={styles.iframeContainer}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/PSzNvha6MpM"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        />
      </div>
      <Section className={styles.albumTeaser}>
        New album <br />
        <span className={styles.title}>ORIGINS</span>
        <br />
        <br /> Release date:
        <br />
        October 15, 2021
        <br />
        <br />
        <a
          href="https://www.blood-music.com/store/"
          target="_blank"
          className={styles.buyButton}
        >
          Pre-order
        </a>
      </Section>
    </div>
  );
}
