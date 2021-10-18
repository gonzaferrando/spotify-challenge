import { useContext } from "react";
import { RouteComponentProps } from "@reach/router";
import { Playlist as PlaylistType } from "../../types/Playlist";
import { PlaylistContext } from "../../context/PlaylistContext";
import Playlist from "./PlaylistItem/PlaylistItem";

import "./index.css";

const Playlists: React.FC<RouteComponentProps> = () => {
  const { playlistData } = useContext(PlaylistContext);
  return (
    <div className="playlists">
      <h1 className="title">Playlists</h1>

      <div className="container">
        {playlistData?.map((item: PlaylistType) => (
          <Playlist key={item.id} playlist={item} />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
