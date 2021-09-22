import { css } from "@emotion/css";
import { ComponentChildren } from "preact";

const timelineStyle = css`
  position: relative;
  &::after {
    content: "";
    width: 2px;
    position: absolute;
    top: 0.5rem;
    bottom: 0rem;
    left: 160px;
    background: #c5c5c5;
  }
`;

export function Timeline({ children }: { children?: ComponentChildren }) {
  return <div className={timelineStyle}>{children}</div>;
}

const yearStyle = css`
  position: relative;

  & h4 {
    position: sticky;
    top: 3rem;
    width: 136px;
    text-align: right;
    z-index: 1;

    &:after {
      content: "";
      width: 10px;
      height: 10px;
      background: #672324;
      border: 2px solid #c5c5c5;
      border-radius: 50%;
      position: absolute;
      left: 154px;
      top: 3px;
    }
  }

  & ul {
    margin-left: 10rem;
    margin-block-end: 3rem;
    padding-inline-start: 32px;
    list-style-type: none;
    text-align: left;

    li {
      margin-bottom: 1rem;
    }
  }
`;

export function Year({ year, entries }: { year: string; entries: string[] }) {
  return (
    <section className={yearStyle}>
      <h4>{year}</h4>
      <ul>
        {entries.map((entry) => (
          <li>{entry}</li>
        ))}
      </ul>
    </section>
  );
}
