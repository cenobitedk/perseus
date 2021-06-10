import { Section } from "./components/section";
import { Submenu, SubmenuItem } from "./components/submenu";
import { Release } from "./components/release";

import { discography } from "../contents.json";

export function Discography() {
  return (
    <>
      <Section>
        <h2 id="releases">
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
