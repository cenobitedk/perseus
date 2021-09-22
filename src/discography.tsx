import { css } from "@emotion/css";

import { Section } from "./components/section";
import { Submenu, SubmenuItem } from "./components/submenu";
import { Release } from "./components/release";

import contents from "./contents";

const sectionStyle = css`
  padding-top: 0;
`;
const headingStyle = css`
  margin-top: 0;
  padding-top: 5vw;
`;

export function Discography() {
  const { discography } = contents;
  return (
    <>
      <Section className={sectionStyle}>
        <h2 id="releases" className={headingStyle}>
          <span>RELEASES</span>
        </h2>
        <Submenu>
          {discography.map((release) => (
            <SubmenuItem>
              <a href={`#${release.id}`}>{release.title.toUpperCase()}</a>
            </SubmenuItem>
          ))}
        </Submenu>
      </Section>
      {discography.map((release) => (
        <Release release={release} />
      ))}
    </>
  );
}
