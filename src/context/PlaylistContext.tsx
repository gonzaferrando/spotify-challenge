import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Playlist } from "../types/Playlist";
import { Track } from "../types/Playlist";

import { availablePlaylists } from "../data/playlists";
import { availableTracks } from "../data/tracks";

interface IPlaylistContext {
  playlistData: Playlist[];
  currentSong: Track | null;
  isPlaying: boolean;
  setCurrentSong: React.Dispatch<React.SetStateAction<Track | null>>;
  playPause: () => void;
  addSongToPlaylist: (songId: string, playlistId: string) => void;
}

const PlaylistContext = createContext<IPlaylistContext>({} as IPlaylistContext);

const PlaylistProvider: React.FC = ({ children }) => {
  // List of playlist (with tracks included)
  const [playlistData, setPlaylistData] = useLocalStorage<Playlist[]>(
    "spotify-player.playlists",
    availablePlaylists
  );

  // Track that is playing now
  const [currentSong, setCurrentSong] = useState<Track | null>(null);
  // Is there any song playing?
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playPause = () => setIsPlaying(!isPlaying);

  const addSongToPlaylist = (songId: string, playlistId: string) => {
    // Since this is In Memory list, updating the playlist by Index.

    // What's song's index?
    const songToAddIndex = availableTracks.findIndex(
      (track) => track.id === songId
    );
    // What's playlist's index?
    const playlistToEditIndex = availablePlaylists.findIndex(
      (playlist) => playlist.id === playlistId
    );

    if (songToAddIndex > -1 && playlistToEditIndex > -1) {
      const songToAdd = availableTracks[songToAddIndex];
      const playlistToEdit = availablePlaylists[playlistToEditIndex];

      // If the song to add is already included in the playlist, ignore
      if (
        !playlistToEdit.tracks.items.find((song) => song.id === songToAdd.id)
      ) {
        playlistToEdit.tracks.items.push(songToAdd);

        const result = [...playlistData];
        result[playlistToEditIndex] = playlistToEdit;

        setPlaylistData(result);
      }
    }
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlistData,
        isPlaying,
        currentSong,
        setCurrentSong,
        playPause,
        addSongToPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylistContext = () => useContext(PlaylistContext);

export { PlaylistProvider, PlaylistContext, usePlaylistContext };
