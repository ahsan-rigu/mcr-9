import React, { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const UserDataContext = createContext();

const UserDataContextProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [watchlater, setWatchlater] = useState([]);
  const [notes, setNotes] = useState([]);

  const addPlaylist = (name) => {
    setPlaylists((prev) => [...prev, { _id: uuid(), name, videos: [] }]);
  };

  const deletePlaylist = (_id) => {
    setPlaylists((prev) => prev.filter(({ _id: id }) => id !== _id));
  };

  const addToPlaylist = (playlistId, videoId) => {
    setPlaylists((prev) =>
      prev.map((playlist) =>
        playlist._id === playlistId
          ? { ...playlist, videos: [...playlist.videos, videoId] }
          : playlist
      )
    );
  };

  const removeFromPlaylist = (playlistId, videoId) => {
    setPlaylists((prev) =>
      prev.map((playlist) =>
        playlist._id === playlistId
          ? {
              ...playlist,
              videos: playlist.videos.filter((id) => id !== videoId),
            }
          : playlist
      )
    );
  };

  const addToWatchlater = (videoId) => {
    setWatchlater((prev) => [...prev, videoId]);
  };

  const removeFormWatchlater = (videoId) => {
    setWatchlater((prev) => prev.filter((id) => id !== videoId));
  };

  const addNote = (note, videoId) => {
    setNotes((prev) => [...prev, { note, videoId, _id: uuid() }]);
  };

  const deleteNote = (noteId) => {
    setNotes((prev) => prev.filter(({ _id }) => _id !== noteId));
  };

  const editNote = (value, noteId) => {
    setNotes((prev) =>
      prev.map((note) =>
        note._id === noteId ? { ...note, note: value } : note
      )
    );
  };

  useEffect(() => {
    if (playlists.length) {
      localStorage.setItem("playlists", JSON.stringify(playlists));
    }
    if (watchlater.length) {
      localStorage.setItem("watchlater", JSON.stringify(watchlater));
    }
    if (notes.length) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [playlists, notes, watchlater]);

  useEffect(() => {
    let notes = localStorage.getItem("notes");
    const watchlater = localStorage.getItem("watchlater");
    const playlists = localStorage.getItem("playlists");
    if (notes) {
      notes = JSON.parse(notes);
      setNotes([...notes]);
    }
    if (watchlater) {
      setWatchlater(JSON.parse(watchlater));
    }
    if (playlists) {
      setPlaylists(JSON.parse(playlists));
    }
  }, []);

  return (
    <UserDataContext.Provider
      value={{
        addPlaylist,
        removeFromPlaylist,
        removeFormWatchlater,
        deletePlaylist,
        addToWatchlater,
        addToPlaylist,
        addNote,
        deleteNote,
        watchlater,
        notes,
        playlists,
        editNote,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
