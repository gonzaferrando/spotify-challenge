import { Playlist } from "../types/Playlist";
import { availableTracks } from "./tracks";

export const availablePlaylists: Playlist[] = [
  {
    description: "Favourites",
    id: "1",
    image: {
      height: 30,
      width: 30,
      url: "https://i.scdn.co/image/ab67706c0000bebb858d10353ae4a5f3942d0a06",
    },
    name: "Favourites",
    owner: {
      display_name: "Gonzalo",
      id: "1",
    },
    tracks: {
      total: 1,
      items: [availableTracks[0], availableTracks[4]],
      limit: 5,
      next: "",
      offset: 1,
      previous: null,
    },
  },
  {
    description: "Rock stars",
    id: "2",
    image: {
      height: 30,
      width: 30,
      url: "https://i.scdn.co/image/ab67706f000000035ec9a70cbcdd04c17a264f4c",
    },
    name: "Rock stars",
    owner: {
      display_name: "Gonzalo",
      id: "1",
    },
    tracks: {
      total: 1,
      items: [availableTracks[1], availableTracks[2], availableTracks[3]],
      limit: 5,
      next: "",
      offset: 1,
      previous: null,
    },
  },
];
