import { css } from "@emotion/css";
import { Section } from "./components/section";
import { menu } from "../site.json";

const navStyles = css`
  text-align: center;
  text-shadow: 0 0 2px black;
`;
const menuStyle = css`
  margin: 0;
  padding: 0;
`;
const menuItemStyle = css`
  display: inline-block;
  padding: 0.5rem 1rem;
`;

export function Menu() {
  return (
    <Section>
      <nav className={navStyles}>
        <ul className={menuStyle}>
          {menu.links.map((link) => (
            <li className={menuItemStyle}>
              <a href={link.to}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </Section>
  );
}
