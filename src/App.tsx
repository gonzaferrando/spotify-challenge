import React from "react";
import { Redirect, RouteComponentProps, Router } from "@reach/router";
import * as Pages from "./pages";

import SideBar from "./components/SideBar/SideBar";
import Player from "./components/Player/Player";

import "./App.css";
import { PlaylistProvider } from "./context/PlaylistContext";
import { AuthProvider } from "./context/AuthContext";

const Anonymous: React.FC = () => {
  const existingUser = localStorage.getItem("user");
  const user = existingUser ? JSON.parse(existingUser) : null;
  console.log("user");
  return (
    <Router>
      <Pages.Login path="/login" />
      {!user && <Redirect from="*" to="/login" noThrow default />}
    </Router>
  );
};

const Authenticated: React.FC = () => {
  return (
    <PlaylistProvider>
      <SideBar />
      <Router>
        <Redirect from="login" to="/playlists" noThrow />
        <Redirect from="/" to="/playlist" noThrow />
        <Pages.Playlists path="/playlists" />
        <Pages.PlaylistDetails path="/playlist/:id" />
      </Router>
      <Player />
    </PlaylistProvider>
  );
};

const App: React.FC<RouteComponentProps> = () => {
  const existingUser = localStorage.getItem("user");
  const user = existingUser ? JSON.parse(existingUser) : null;

  return (
    <div className="app">
      <AuthProvider>
        {}
        {user !== null && <Authenticated />}
        {user === null && <Anonymous />}
      </AuthProvider>
    </div>
  );
};

export default App;
