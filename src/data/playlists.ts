import { Playlist } from "../types/Playlist";
import { AvailableTracks } from "./tracks";

export const AvailablePlaylists: Playlist[] = [
  {
    description: "My playlist 1",
    id: "1",
    image: {
      height: 30,
      width: 30,
      url: "https://i.scdn.co/image/ab67616d00001e02668e3aca3167e6e569a9aa20",
    },
    name: "My playlist 1",
    owner: {
      display_name: "Gonzalo",
      id: "1",
    },
    tracks: {
      total: 1,
      items: [AvailableTracks[0]],
      limit: 5,
      next: "",
      offset: 1,
      previous: null,
    },
  },
  {
    description: "My playlist 2",
    id: "2",
    image: {
      height: 30,
      width: 30,
      url: "https://i.scdn.co/image/ab67616d00001e02668e3aca3167e6e569a9aa20",
    },
    name: "My playlist 2",
    owner: {
      display_name: "Gonzalo",
      id: "1",
    },
    tracks: {
      total: 1,
      items: [AvailableTracks[1], AvailableTracks[2]],
      limit: 5,
      next: "",
      offset: 1,
      previous: null,
    },
  },
];
