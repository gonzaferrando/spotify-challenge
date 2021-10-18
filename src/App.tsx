import React from "react";
import { Redirect, RouteComponentProps, Router } from "@reach/router";
import * as Pages from "./pages";
import SideBar from "./components/SideBar/SideBar";
import Player from "./components/Player";
import { PlaylistProvider } from "./context/PlaylistContext";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";

const isAuthenticated = () => {
  try {
    return localStorage.getItem("spotify-player.user") !== null;
  } catch {
    return false;
  }
};

const Anonymous: React.FC = () => {
  return (
    <Router>
      <Pages.Login path="/login" />
      {!isAuthenticated() && <Redirect from="*" to="/login" noThrow default />}
    </Router>
  );
};

const Authenticated: React.FC = () => {
  return (
    <PlaylistProvider>
      <SideBar />
      <Router>
        <Redirect from="/" to="/playlists" noThrow />
        <Pages.Playlists path="/playlists" />
        <Pages.PlaylistDetails path="/playlist/:id" />
      </Router>
      <Player />
    </PlaylistProvider>
  );
};

const App: React.FC<RouteComponentProps> = () => {
  const logguedUser = isAuthenticated();
  return (
    <div className="app">
      <AuthProvider>
        {logguedUser && <Authenticated />}
        {!logguedUser && <Anonymous />}
      </AuthProvider>
    </div>
  );
};

export default App;
