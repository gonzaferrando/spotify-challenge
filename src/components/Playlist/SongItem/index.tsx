import { Play } from "../../../assets/Play";
import { Track } from "../../../types/Track";
import { formatDate } from "../../../utils/formatDate";
import { millisToMinutesAndSeconds } from "../../../utils/msToMinutes";
import "./SongItem.css";

type SongItemPros = {
  song: Track;
  index: number;
  songClicked: () => void;
  current: boolean;
};

export const SongItem = ({
  song,
  index,
  songClicked,
  current,
}: SongItemPros) => {
  return (
    <>
      {song && (
        <div className={"song-item enabled"} onClick={songClicked}>
          <div className="song-item__index">
            <span style={current ? { color: "#1db954" } : { color: "white" }}>
              {index + 1}
            </span>
            <button>
              <Play />
            </button>
          </div>

          <div className="song-item__title">
            <img src={song.album.image.url} alt="cover img" />
            <div className="name-container">
              <div
                className="name"
                style={current ? { color: "#1db954" } : { color: "white" }}
              >
                <span>{song.name}</span>
              </div>
              <div className="artist">{song.artist.name}</div>
            </div>
          </div>
          <div>{song.album.name}</div>
          <div>{formatDate(song.added_at)}</div>
          <div className="song-item__length">
            {millisToMinutesAndSeconds(song.duration_ms)}
            <button className="more">...</button>
          </div>
        </div>
      )}
    </>
  );
};
