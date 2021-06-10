import { css } from "@emotion/css";
import { ComponentChildren } from "preact";

const styles = {
  list: css`
    margin: 0;
    padding: 0;
  `,
  item: css`
    margin-right: 2rem;
    margin-bottom: 1rem;
    display: inline-block;
  `,
};

export const Submenu = ({ children }: { children?: ComponentChildren }) => (
  <small>
    <ul className={styles.list}>{children}</ul>
  </small>
);

export const SubmenuItem = ({ children }: { children?: ComponentChildren }) => (
  <li className={styles.item}>{children}</li>
);
