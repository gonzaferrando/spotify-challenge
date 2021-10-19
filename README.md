# Code Challenge

## Requirements

Your task is to implement a simple Spotify Playlist Creator in React + Typescript without using any libraries (other than React)
Minimum requirements:

- You must use Typescript.
- You must use Spotify’s public API.
- There should be a login screen.
- Once logged in, there should be a screen where you can see the current song you are playing on Spotify (The app) - We will judge the amount of info/design choices you make on this screen.
- There needs to be a button to add the song to a playlist on the current playing screen, and the user should be able to add a name to the playlist or select from a list of created playlists.
  NOTE: We prefer you to create the playlists without using Spotify’s API (see bonus points). But bear in mind that the playlists need to be persisted for future uses.
- There should be a screen that shows the list of playlists.
- When a user clicks on one of the playlists, show the list of songs.

Bonus points

- You can remove songs from playlists.
- You can remove playlists.
- You don’t use Spotify’s API for playlists :)

## Gonzalo's Notes

### Tech stack

Since this challenge requires not to use any external library (Redux, Sass, etc), I've decided to use:

- React
- Typescript
- Plain css
- Reach/Router
- Context Api
- localStorage

### IMPORTANT!

- Some components are using BEM for managing classes. Some others don't.
- Some components are created at index.tsx, some others don't.
- No unit test created.
- Login: No validation applied. You just need to complete with any email and then press "Login" button.

### Want to see how it works?

First time running this project:

```sh
yarn install
yarn start
```

Then, only:

```sh
yarn start
```

### Clean up data

Open local storage, find key **spotify-player.playlists** and remove it. Refresh page to reload all data.
