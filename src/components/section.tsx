import { css, cx } from "@emotion/css";
import { ComponentChildren } from "preact";

const style = css`
  position: relative;
  padding: 5vw;
  margin: 0 auto;
  max-width: calc(680px);
  @media screen and (min-width: 970px) {
    max-width: calc(1360px + 5vw);
  }
`;

const flexStyle = css`
  display: flex;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
`;

const centerStyle = css`
  text-align: center;
`;

export function Section({
  children,
  className,
  flex = false,
  center = false,
}: {
  children?: ComponentChildren;
  className?: string;
  flex?: boolean;
  center?: boolean;
}): JSX.Element {
  return (
    <div
      className={cx(style, className, {
        [flexStyle]: flex,
        [centerStyle]: center,
      })}
    >
      {children}
    </div>
  );
}

const columnStyle = css`
  flex: auto;
  flex-basis: 50%;
  margin: 0 2.5vw;
`;

export function Column({
  children,
  className,
}: {
  children?: ComponentChildren;
  className?: string;
}): JSX.Element {
  return <div className={cx(columnStyle, className)}>{children}</div>;
}
