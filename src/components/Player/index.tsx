import { useContext, useEffect, useRef, useState } from "react";
import { Like } from "../../assets/Like";
import { Play } from "../../assets/Play";
import { Pause } from "../../assets/Pause";
import { Volume } from "../../assets/Volume";
import { useBar } from "../../utils/useBar";
import { VolumeMuted } from "../../assets/VolumeMuted";

import "./index.css";
import { PlaylistContext } from "../../context/PlaylistContext";

const Player: React.FC = () => {
  const { currentSong, isPlaying, playPause } = useContext(PlaylistContext);
  const [volume, setVolume] = useState(70);
  const volumeRef = useRef<HTMLDivElement | null>(null);

  const [mute, setMute] = useState(false);

  const barCallBack = useBar;

  useEffect(() => {
    if (volume < 5) {
      setMute(true);
    } else {
      setMute(false);
    }
  }, [volume]);

  if (!currentSong) {
    return null;
  } else {
    return (
      <div className="player">
        <footer>
          <div className="player__song">
            <div className="img">
              <img src={currentSong.album.image.url} alt="song" />
            </div>
            <div className="infos">
              <div className="name">{currentSong.name}</div>
              <div className="artist">{currentSong.artist.name}</div>
            </div>
            <div className="like">
              <Like />
            </div>
          </div>

          <div className="player__controls">
            <div>
              <button onClick={playPause}>
                {isPlaying ? <Pause /> : <Play />}
              </button>
            </div>
            <div className="barContainer">
              <div>0:00</div>
            </div>
          </div>

          <div className="player__volume">
            <div>
              <button onClick={() => setMute(!mute)}>
                {mute ? <VolumeMuted /> : <Volume />}
              </button>
            </div>
            <div
              className="player__volume-wrapper"
              onClick={(event) => barCallBack(event, volumeRef, setVolume)}
              ref={volumeRef}
            >
              <div className="bar">
                <div
                  className="progress"
                  style={{
                    transform: `translateX(-${mute ? "100" : 100 - volume}%)`,
                  }}
                />
              </div>
              <button style={{ left: `${mute ? "0" : volume}%` }} />
            </div>
          </div>
        </footer>
      </div>
    );
  }
};

export default Player;
