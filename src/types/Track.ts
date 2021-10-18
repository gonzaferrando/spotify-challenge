export declare interface Track {
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
