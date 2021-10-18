import { AvailablePlaylists } from "../../data/playlists";
import { Playlist } from "../../types/Playlist";

const playlistKey = "spotify-player.playlists";

const getPlaylist = (): Playlist[] => {
  if (localStorage.getItem(playlistKey))
    return JSON.parse(localStorage.getItem(playlistKey) ?? "{}");

  const data = JSON.stringify(AvailablePlaylists);
  localStorage.setItem(playlistKey, data);

  return JSON.parse(data ?? "[]");
};

export { getPlaylist };
