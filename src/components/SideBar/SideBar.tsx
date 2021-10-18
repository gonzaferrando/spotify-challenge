import { Logo } from "../../assets/Logo";
import Option from "./Option";

import { Link } from "@reach/router";
import { Playlist } from "../../types/Playlist";

import "./SideBar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PlaylistContext } from "../../context/PlaylistContext";

const SideBar = () => {
  const { logout } = useContext(AuthContext);
  const { playlistData } = useContext(PlaylistContext);

  return (
    <div className="side-bar">
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <div className="logo">
          <Logo />
        </div>
      </Link>
      <h1 className="title">Playlists</h1>
      <hr className="separator" />
      <div className="list-container">
        <ul className="list">
          {playlistData?.map((item: Playlist) => {
            return <Option playlist={item} key={item.id} />;
          })}
        </ul>
      </div>
      <Link
        to="/login"
        onClick={() => {
          logout();
          // navigate("/login");
        }}
      >
        Logout
      </Link>
      <button
        onClick={() => {
          logout();
          // navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default SideBar;
