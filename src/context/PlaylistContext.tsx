import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Playlist } from "../types/Playlist";
import { Track } from "../types/Track";

import { AvailablePlaylists } from "../data/playlists";

interface IPlaylistContext {
  playlistData: Playlist[];
  currentSong: Track | null;
  isPlaying: boolean;
  setCurrentSong: React.Dispatch<React.SetStateAction<Track | null>>;
  playPause: () => void;
}

const PlaylistContext = createContext<IPlaylistContext>({} as IPlaylistContext);

const PlaylistProvider: React.FC = ({ children }) => {
  const [playlistData, setPlaylistData] = useLocalStorage(
    "spotify-player.playlists",
    AvailablePlaylists
  );
  const [currentSong, setCurrentSong] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlistData,
        isPlaying,
        currentSong,
        setCurrentSong,
        playPause,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylistContext = () => useContext(PlaylistContext);

export { PlaylistProvider, PlaylistContext, usePlaylistContext };
