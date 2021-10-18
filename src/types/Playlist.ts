import { Track } from "./Track";

export declare interface Playlist {
  description: string;
  id: string;
  image: {
    height: number;
    width: number;
    url: string;
  };
  name: string;
  owner: {
    display_name: string;
    id: string;
  };
  tracks: {
    total: number;
    items: Track[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
  };
}
