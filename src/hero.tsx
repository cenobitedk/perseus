import { css } from "@emotion/css";
import { Section } from "./components/section";

import imgUrl from './assets/a_or.jpg';

const styles = {
  section: css`
    padding-top: 0;
    display: flex;
    justify-content: center;
  `,
  image: css`
    max-width: calc(100vw - 10vw);
  `,
}

export function Hero() {
  return (
    <Section className={styles.section}>
      {/* <img src={imgUrl} className={styles.image}/> */}
    </Section>    
  );
}