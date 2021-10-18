import { Link } from "@reach/router";
import { Play } from "../../../assets/Play";
import { Playlist } from "../../../types/Playlist";
import "./PlaylistItem.css";

type PlaylistItemProps = {
  playlist: Playlist;
};

const PlaylistItem = ({ playlist }: PlaylistItemProps) => {
  return (
    <Link to={`/playlist/${playlist.id}`} className="link-playlist">
      <div className="playlist">
        <div className="img-container">
          <img src={playlist.image.url} alt="" />
          <div className="play-container">
            <button className="play-button" title="Play">
              <Play />
            </button>
          </div>
        </div>
        <div className="name">{playlist.name}</div>
        <div className="artist">{playlist.owner?.display_name}</div>
      </div>
    </Link>
  );
};

export default PlaylistItem;
