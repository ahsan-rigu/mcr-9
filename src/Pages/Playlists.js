import React, { useContext } from "react";
import { UserDataContext } from "../Contexts/UserDataContext";
import { Link } from "react-router-dom";

const Playlists = () => {
  const { deletePlaylist, playlists, addPlaylist } =
    useContext(UserDataContext);

  return (
    <div className="page-play">
      <h2>Playlists:</h2>
      {playlists.map(({ _id, name }) => (
        <div key={_id} className="Playlist">
          <Link to={"/playlists/" + _id}>{name}</Link>
          <button onClick={() => deletePlaylist(_id)}>Delete</button>
        </div>
      ))}
      <h5>Create a playlist</h5>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPlaylist(e.target[0].value);
          e.target[0].value = "";
        }}
      >
        <input type="text" placeholder="playlist name" />
        <button>Create</button>
      </form>
    </div>
  );
};

export default Playlists;
