import { css } from "@emotion/css";

const footerStyle = css`
  text-align: center;
  opacity: 0.6;
  margin-top: 16rem;
  margin-bottom: 2rem;
`;

export function Footer() {
  return <div className={footerStyle}>© 2012-2021 Dynatron</div>;
}
