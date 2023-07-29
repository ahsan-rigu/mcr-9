import React, { useContext } from "react";
import { videos } from "../data/videosData";
import { UserDataContext } from "../Contexts/UserDataContext";
import Card from "../Components/Card";
import { useNavigate, useParams } from "react-router-dom";

const Playlist = () => {
  const { playlistID } = useParams();
  const { deletePlaylist, playlists } = useContext(UserDataContext);
  const navigate = useNavigate();

  const { name, videos: playlistVideos } = playlists.find(
    ({ _id }) => playlistID === _id
  );

  const videosFiltered = videos.filter(({ _id }) =>
    playlistVideos.includes(_id)
  );

  return (
    <>
      <h2>Playlist: {name}</h2>
      <div className="page">
        {videosFiltered.map((video) => (
          <Card video={video} />
        ))}
      </div>
      <button
        onClick={() => deletePlaylist(playlistID) || navigate("/playlists")}
      >
        Delete Playlist
      </button>
    </>
  );
};

export default Playlist;
