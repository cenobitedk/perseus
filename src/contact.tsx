import { css} from "@emotion/css";
import { Section } from "./components/section";

const labelStyle = css`
  margin-top: 3rem;
  display: block;
  opacity: 0;
`

const inputStyle = css`
  background-color: transparent;
  border: none;
  color: #ddd;
  font-size: clamp(14px, 3vw, 18px);
  font-family: inherit;
  width: clamp(18rem, 60vw, 22rem);
  text-align: center;
  border-radius: 2px;
  box-sizing: border-box;

  &:-internal-autofill-selected {
    background-color: #422 !important;
    color: #edd !important;
    background-color: transparent;
  }
`;


export function Contact() {
  return (
    <Section center>
      <h2 id="contact">
        <span>CONTACT</span>
      </h2>

      <label for="contact_address" className={labelStyle}>Contact address:</label>
      <input
        id="contact_address"
        className={inputStyle}
        value="contact@dynatronsynth.com"
        disabled
      />
    </Section>
  );
}
