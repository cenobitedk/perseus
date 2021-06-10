import { css, cx } from "@emotion/css";

type Text = (string | string[])[];

type Track = {
  title: string;
  playtime: string;
  linerNotes?: string;
};

type Release = {
  title: string;
  id: string;
  type: string;
  releaseDate: string;
  credits: Text;
  tracklist: Track[];
  linerNotes: Text;
  links: string[];
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
    padding: 5vw;
    padding-bottom: 4rem;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    font-size: 90%;

    @media screen and (min-width: 970px) {
      flex-direction: row;
    }
  `,
  column: css`
    margin: 0 auto;
    flex: auto;
    max-width: 43rem;

    @media screen and (min-width: 970px) {
      margin-left: 2.5vw;
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
  `,
  releaseTitle: css`
    margin-top: 3px;

    span ~ small {
      margin-left: 0.5em;
    }
  `,
  h4: css`
    margin-top: 3rem;
  `,
  tracklist: css`
    padding: 0;
    max-width: 43rem;
  `,
  track: css`
    display: flex;

    & + & {
      margin-top: 0.5rem;
    }
  `,
  trackIndex: css`
    padding-left: 1rem;
    width: 2.5rem;
    flex: none;
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
          return <small>{value}</small>;
        }
      })}
  </h3>
);

const H4 = ({ value }: { value: string | string[] }) => (
  <h4 className={styles.h4}>
    {Array.isArray(value) === false && <span>{value}</span>}
    {Array.isArray(value) && value.map((value) => <span>{value}</span>)}
  </h4>
);

const MultilineParagraph = ({ lines }: { lines: Text }) => (
  <>
    {lines.map((value) => {
      if (Array.isArray(value)) {
        return (
          <p>
            {value.map((value, index, array) => (
              <>
                {value}
                {index !== array.length - 1 && <br />}
              </>
            ))}
          </p>
        );
      } else {
        return <p>{value}</p>;
      }
    })}
  </>
);

const Track = ({
  track,
  trackNumber,
}: {
  track: Track;
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

const TrackList = ({ tracklist }: { tracklist: Release["tracklist"] }) => (
  <ol className={styles.tracklist}>
    {tracklist.map((track, index) => (
      <Track track={track} trackNumber={index + 1} />
    ))}
  </ol>
);

export function Release({ release }: { release: Release }): JSX.Element {
  return (
    <div
      id={release.id}
      className={css`
        ${styles.release}
        background-image: url(${release.images.background})
      `}
    >
      <div className={cx(styles.column, styles.cover)}>
        <img
          src={release.images.frontcover}
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
          Format: {release.type}
        </p>

        <MultilineParagraph lines={release.linerNotes} />

        <H4 value={"TRACKLIST"} />
        <TrackList tracklist={release.tracklist} />

        <H4 value={"CREDITS"} />
        <MultilineParagraph lines={release.credits} />

        <H4 value={["LISTEN", "BUY"]} />
        <iframe
          title={release.bcIframe.title}
          style="border: 0; width: 100%; height: 120px"
          src={release.bcIframe.src}
          seamless
        >
          <a href={release.bcIframe.link}>{release.bcIframe.title}</a>
        </iframe>
      </div>
    </div>
  );
}
