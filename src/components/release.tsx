import { useEffect } from "preact/hooks";
import { css, cx } from "@emotion/css";
import { useInView } from "react-intersection-observer";

type TText = (string | string[])[];

type TTrack = {
  title: string;
  playtime: string;
  linerNotes?: string;
};

type TLink = {
  title: string;
  link: string;
};

type TRelease = {
  title: string;
  id: string;
  type: string;
  format: string;
  releaseDate: string;
  credits: TText;
  tracklist: TTrack[];
  linerNotes: TText;
  links: TLink[];
  images: {
    frontcover: string;
    background: string;
    additional?: string[];
  };
  bcIframe: {
    title: string;
    src: string;
    link: string;
  };
};

const styles = {
  release: css`
    position: relative;
    padding: 5vw;
    padding-bottom: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    @media screen and (min-width: 970px) {
      flex-direction: row;
      align-items: flex-start;
    }

    &:before {
      content: " ";
      position: absolute;
      inset: 0;
      background-position: top center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
    }
  `,
  column: css`
    flex: auto;
    max-width: 680px;

    @media screen and (min-width: 970px) {
      margin-left: 2.5vw;
      margin-right: auto;
    }
  `,
  cover: css`
    margin-bottom: 5%;

    @media screen and (min-width: 970px) {
      margin-right: 2.5vw;
      margin-left: auto;
      flex: none;
      width: 50%;
    }
  `,
  image: css`
    width: 100%;
    height: auto;
    box-shadow: 0 0.5rem 2rem #0000005e;
  `,
  releaseTitle: css`
    margin-top: 3px;

    span ~ small {
      margin-left: 0.5em;
    }
  `,
  details: css`
    margin-top: 1.5em;

    &:not([open]) .less {
      display: none;
    }
    &[open] .more {
      display: none;
    }
  `,
  toggle: css`
    font-weight: bold;
    cursor: pointer;
  `,
  h4: css`
    margin-top: 3em;
  `,
  tracklist: css`
    padding: 0;
    max-width: 680px;
  `,
  track: css`
    display: flex;

    & + & {
      margin-top: 0.7em;
    }
  `,
  trackIndex: css`
    width: 2rem;
    padding-right: 1rem;
    flex: none;
    text-align: right;
  `,
  trackTitle: css`
    flex-grow: 1;
  `,
  trackLinerNotes: css`
    color: #a0a0a0;
    text-shadow: 0 0 1px black;
  `,
  trackPlaytime: css`
    color: #a0a0a0;
    text-shadow: 0 0 1px black;
    padding-left: 1rem;
  `,
  buyButton: css`
    border: 2px solid #ff6633;
    border-radius: 3px;
    padding: 0 0.5em 0.15em;
    margin: 0.5em 0.5em 0 0;
    color: #ff6633;
    font-weight: bold;
    text-transform: uppercase;
    display: inline-block;
    cursor: pointer;
    transition: all 100ms ease;

    &:hover {
      color: white;
      background-color: #ff6633;
      text-decoration: none;
      box-shadow: 0 0 20px #ff663399;

      &:active {
        transform: translateY(1px);
      }
    }
  `,
};

const ReleaseTitle = ({ title }: { title: string }) => (
  <h3 className={styles.releaseTitle}>
    {title
      .toUpperCase()
      .split(", ")
      .map((value, index) => {
        if (index === 0) {
          return <span>{value}</span>;
        } else {
          return (
            <>
              <wbr />
              <small>{value}</small>
            </>
          );
        }
      })}
  </h3>
);

const H4 = ({ value }: { value: string | string[] }) => (
  <h4 className={styles.h4}>
    {Array.isArray(value) === false && <span>{value}</span>}
    {Array.isArray(value) && value.map((sub) => <span>{sub}</span>)}
  </h4>
);

const MultilineParagraph = ({ lines }: { lines: TText }) => (
  <>
    {lines.map((line) => {
      if (Array.isArray(line)) {
        return (
          <p>
            {line.map((value, index, array) => (
              <>
                {value}
                {index !== array.length - 1 && <br />}
              </>
            ))}
          </p>
        );
      } else {
        return <p>{line}</p>;
      }
    })}
  </>
);

const Track = ({
  track,
  trackNumber,
}: {
  track: TTrack;
  trackNumber: number;
}) => (
  <li className={styles.track}>
    <span className={styles.trackIndex}>{trackNumber}</span>
    <span className={styles.trackTitle}>
      {track.title}
      {track.linerNotes && (
        <>
          <br />
          <small className={styles.trackLinerNotes}>{track.linerNotes}</small>
        </>
      )}
    </span>
    <span className={styles.trackPlaytime}>{track.playtime}</span>
  </li>
);

const TrackList = ({ tracklist }: { tracklist: TRelease["tracklist"] }) => (
  <ol className={styles.tracklist}>
    {tracklist.map((track, index) => (
      <Track track={track} trackNumber={index + 1} />
    ))}
  </ol>
);

function getImageUrl(filename: string): string {
  return new URL(`../assets/${filename}`, import.meta.url).href;
}

const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
  navigator.userAgent
);

export function Release({ release }: { release: TRelease }): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "100% 0px",
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        const iframe = document.getElementById(
          `${release.id}-iframe`
        ) as HTMLIFrameElement;
        iframe.src = iframe.dataset.src as string;
      }, 300);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      id={release.id}
      className={css`
        ${styles.release}
        &:before {
          background-image: url(${inView
            ? getImageUrl(release.images.background)
            : ""});
        }
      `}
      data-bgimage-src={getImageUrl(release.images.background)}
    >
      <div className={cx(styles.column, styles.cover)}>
        <img
          loading="lazy"
          src={getImageUrl(release.images.frontcover)}
          alt={`front cover for ${release.title}`}
          width="700"
          height="700"
          className={styles.image}
        />
      </div>
      <div className={styles.column}>
        <ReleaseTitle title={release.title} />

        <p>
          Released: {release.releaseDate}
          <br />
          Type: {release.type}
          <br />
          Format: {release.format}
        </p>

        {release.links.map((link) => (
          <a
            href={link.link}
            target="_blank"
            rel="noopener"
            className={styles.buyButton}
          >
            {link.title}
          </a>
        ))}

        <details className={styles.details} open={!mobile}>
          <summary className={styles.toggle}>
            <span className="more">View details</span>
            <span className="less">Collapse details</span>
          </summary>

          <H4 value="ABOUT" />
          <MultilineParagraph lines={release.linerNotes} />

          <H4 value={"TRACKLIST"} />
          <TrackList tracklist={release.tracklist} />

          <H4 value={"CREDITS"} />
          <MultilineParagraph lines={release.credits} />

          <br />
          <iframe
            id={`${release.id}-iframe`}
            title={release.bcIframe.title}
            style="border: 0; width: 100%; height: 120px"
            data-src={release.bcIframe.src}
            seamless
          >
            <a href={release.bcIframe.link} rel="noopener">
              {release.bcIframe.title}
            </a>
          </iframe>
        </details>
      </div>
    </div>
  );
}
