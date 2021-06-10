import { css } from "@emotion/css";
import { ComponentChildren } from "preact";

const style = css`
  padding: 5vw;
  margin: 0 auto;
  max-width: calc(43rem);
  @media screen and (min-width: 970px) {
    max-width: calc(86rem + 5vw);
  }
`;

export function Section({
  children,
}: {
  children?: ComponentChildren;
}): JSX.Element {
  return <div className={style}>{children}</div>;
}
