import { Header } from "./header";
import { Discography } from "./discography";
import { Live } from "./live";
import { Biography } from "./biography";
import { Contact } from "./contact";
import { Footer } from "./footer";

export function App() {
  return (
    <>
      <Header />
      <Discography />
      {/* <Live /> */}
      {/* <Biography /> */}
      <Contact />
      <Footer />
    </>
  );
}
