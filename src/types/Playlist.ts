export interface Track {
  album: {
    image: {
      height: number;
      width: number;
      url: string;
    };
    name: string;
  };
  artist: {
    name: string;
  };
  disc_number: number;
  duration_ms: number;
  id: string;
  name: string;
  track: boolean;
  track_number: number;
  preview_url: string;
  added_at: string;
}

export interface Playlist {
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

export interface Playlists {
  href: string;
  items: Playlist[];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}
