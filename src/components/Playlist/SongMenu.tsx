import React from "react";

import "./SongMenu.css";
const SongMenu: React.FC = () => {
  return (
    <div className="song-menu">
      <button className="song-menu__button">...</button>
      <div className="song-menu__content">
        <div>Add song to playlist</div>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default React.memo(SongMenu);
