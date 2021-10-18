import { useContext, useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { SongItem } from "../../components/Playlist/SongItem";
import { Time } from "../../assets/Time";
import { Track } from "../../types/Track";
import { Playlist } from "../../types/Playlist";
import { PlaylistContext } from "../../context/PlaylistContext";

import "./PlaylistDetail.css";

interface Props {
  id: string;
}

const PlaylistDetail: React.FC<RouteComponentProps<Props>> = ({ id }) => {
  const { currentSong, playlistData, setCurrentSong } =
    useContext(PlaylistContext);
  const [playlist, setPlaylist] = useState<Playlist | null>();

  useEffect(() => {
    setPlaylist(playlistData.find((playlist) => playlist.id === id));
  }, [setPlaylist, playlistData, id]);

  return (
    <>
      {playlist && (
        <div className="playlist-detail">
          <div className="playlist-detail__cover">
            <div className="playlist-detail__cover-gradient"></div>
            <div className="playlist-detail__cover-img">
              <img src={playlist.image.url} alt="playlist img" />
            </div>
            <div className="playlist-detail__info">
              <div className="playlist-detail__info-name">PLAYLIST</div>
              <div className="playlist-detail__info-title">
                <h1>{playlist.name}</h1>
              </div>
              <div className="playlist-detail__info-category">
                {playlist.description}
              </div>
              <div className="playlist-detail__info-details">
                <span className="text-bold">{playlist.owner.display_name}</span>
                <span className="text-light">
                  {playlist.tracks.items.length} songs, about 1 hr 30 min
                </span>
              </div>
            </div>
          </div>

          <div className="list-background" />
          <div className="playlist-detail__list">
            <div className="">
              <div className="heading">
                <div>#</div>
                <div>Title</div>
                <div>Album</div>
                <div>Date added</div>
                <div className="length">
                  <Time />
                </div>
              </div>
            </div>

            {playlist.tracks.items.map((item: Track, index: number) => (
              <SongItem
                key={item.id}
                song={item}
                index={index}
                current={item.id === currentSong?.id ? true : false}
                songClicked={() => setCurrentSong(item)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PlaylistDetail;
