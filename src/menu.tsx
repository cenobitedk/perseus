import { css } from "@emotion/css";
import { Section } from "./components/section";

const menu = {
  links: [
    {
      title: "Releases",
      to: "#releases",
      description: "",
    },
    // {
    //   "title": "Live",
    //   "to": "#live",
    //   "description": ""
    // },
    // {
    //   "title": "Biography",
    //   "to": "#biography",
    //   "description": ""
    // },
    {
      title: "Contact",
      to: "#contact",
      description: "",
    },
  ],
};

const sectionStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7vh;
`;
const logoLinkStyle = css`
  line-height: 0;
`;
const logoStyle = css`
  width: 3rem;
  height: 3rem;
`;
const navStyles = css`
  flex: auto;
  margin-left: 1rem;
`;
const menuStyle = css`
  margin: 0;
  padding: 0;
`;
const menuItemStyle = css`
  display: inline-block;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-weight: bold;
`;
const linkStyle = css`
  &:hover {
    margin: 0 -0.4rem -0.1rem;
    padding: 0 0.4rem 0.1rem;
    background-color: lightgrey;
    color: black;
    border-radius: 1.5px;
    text-decoration: none;
  }
`;

export function Menu() {
  return (
    <Section className={sectionStyle}>
      <a href="/" className={logoLinkStyle}>
        <img src="/d-logo-small.png" alt="Logo" className={logoStyle} />
      </a>
      {/* <nav className={navStyles}>
        <ul className={menuStyle}>
          {menu.links.map((link) => (
            <li className={menuItemStyle}>
              <a className={linkStyle} href={link.to}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}
    </Section>
  );
}
