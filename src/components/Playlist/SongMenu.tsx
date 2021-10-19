import React, { useContext } from "react";
import { PlaylistContext } from "../../context/PlaylistContext";
import { Track } from "../../types/Playlist";

import "./SongMenu.css";

interface SongMenuOptions {
  song: Track;
}

const SongMenu: React.FC<SongMenuOptions> = ({ song }) => {
  const { playlistData, addSongToPlaylist } = useContext(PlaylistContext);

  return (
    <div className="song-menu">
      <button className="song-menu__button">...</button>
      <div className="song-menu__content">
        <div className="song-menu__title">Add song to playlist</div>
        {playlistData?.map((playlist) => (
          <div
            key={playlist.id}
            className="song-menu__option"
            onClick={() => addSongToPlaylist(song.id, playlist.id)}
          >
            {playlist.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(SongMenu);
