import { css } from "@emotion/css";

import { Section } from "./components/section";
import { Timeline, Year } from "./components/timeline";

const bioStyle = css`
  margin: auto;
  max-width: 42rem;
`;

export function Biography() {
  return (
    <Section center>
      <h2 id="biography">
        <span>BIOGRAPHY</span>
      </h2>

      <div className={bioStyle}>
        {/* <h3>
          <span>ABOUT</span>
        </h3>
        <p>
          Interplanetary synth music. Inspired by space and science-fiction,
          movies and soundtracks. In particular Jean-Michel Jarre, Alien, Blade
          Runner and 80's rock.
        </p> */}

        <h3>
          <span>TIMELINE</span>
        </h3>

        <Timeline>
          <Year
            year="2017–2020"
            entries={[
              "Dynatron is working on the third album while playing various shows in \
          Europe with College (FR), Daniel Deluxe (DK), Christine (FR), Midnight \
          Danger (SE), Starcadian (US), Irving Force (SE) and many more.",
            ]}
          />
          <Year
            year="2016"
            entries={[
              "Dynatron signs with finnish label Blood Music. One of the biggest and \
            most prolific labels in the genre, also harboring major artists \
            Perturbator (FR), GOST (US) and Dan Terminus (FR).",
              "The first live shows are performed during October and November in France, \
            Finland and Hungary.",
              'On November 4 the EP "The Rigel Axiom" is released on Blood Music.',
            ]}
          />
          <Year
            year="2015"
            entries={[
              'On September 4 the second album entitled "Aeternus" is released by \
          Aphasia Records. The album is very well received and highly rated among \
          fans and reviewers with words as "masterpiece", "meticulous" and \
          "cinematic".',
            ]}
          />
          <Year
            year="2014"
            entries={[
              'On May 23 the Hollywood movie "Cold in July" hit the theaters in USA \
            featuring the Dynatron track "Cosmo Black" from the "Fireburner" EP.',
              'On September 25 the "Throttle Up" EP is released by Rad Rush Records.',
            ]}
          />
          <Year
            year="2013"
            entries={[
              'On May 5 the "Flashbacks" EP is released by Aphasia Records.',
            ]}
          />
          <Year
            year="2012"
            entries={[
              "The first 4 tracks are published on SoundCloud in April and May.",
              'On September 8 the "Fireburner" EP is released.',
              'On November 22 the first album entitled "Escape Velocity" is relased \
            by Aphasia Records.',
            ]}
          />
        </Timeline>
      </div>
    </Section>
  );
}
