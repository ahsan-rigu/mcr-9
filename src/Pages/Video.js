import React, { useContext, useState } from "react";
import { UserDataContext } from "../Contexts/UserDataContext";
import { useParams } from "react-router-dom";
import { videos } from "../data/videosData";
import { MdHdrPlus, MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { BsPencil, BsPlus, BsTrash } from "react-icons/bs";

const Video = () => {
  const [toEdit, setToEdit] = useState();
  const [addToPlaylistModal, setAddToPlaylistModal] = useState(false);
  const { video } = useParams();
  const {
    watchlater,
    removeFormWatchlater,
    addToWatchlater,
    notes,
    addNote,
    deleteNote,
    editNote,
    playlists,
    addToPlaylist,
    addPlaylist,
  } = useContext(UserDataContext);

  const { _id, title, src, creator } = videos.find(
    ({ title }) => title === video
  );

  const filteredNotes = notes.filter(({ videoId }) => _id === videoId);

  console.log(notes);

  return (
    <>
      {addToPlaylistModal && (
        <>
          <div className="modal-wrapper">
            <div
              className="modal-bd"
              onClick={() => setAddToPlaylistModal(false)}
            ></div>
            <div className="modal">
              <h5>Add to playlist</h5>
              {playlists
                .filter(({ videos }) => !videos.includes(_id))
                .map((playlist) => (
                  <button
                    key={playlist._id}
                    onClick={() => addToPlaylist(playlist._id, _id)}
                  >
                    Add to {playlist.name}
                  </button>
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
          </div>
        </>
      )}
      <div className="video-page">
        <iframe src={src}></iframe>
        <div>
          <h4>
            {title} | {creator}
          </h4>

          <span>
            {watchlater.includes(_id) ? (
              <button onClick={() => removeFormWatchlater(_id)}>
                <MdWatchLater size={"1.5rem"} />
              </button>
            ) : (
              <button onClick={() => addToWatchlater(_id)}>
                <MdOutlineWatchLater size={"1.5rem"} />
              </button>
            )}
            <button onClick={() => setAddToPlaylistModal(true)}>
              <BsPlus size={"1.5rem"} />
            </button>
          </span>
        </div>
        <h2>Notes:</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addNote(e.target[0].value, _id);
            e.target[0].value = "";
          }}
        >
          <input type="text" placeholder="addNewNote" />
          <button>ADD NOTE</button>
        </form>
        {filteredNotes.map(({ _id, note }, index) => (
          <p key={_id}>
            {index + 1}. {note}
            <button onClick={() => deleteNote(_id)}>
              <BsTrash size={"1rem"} />
            </button>
            <button onClick={() => setToEdit(_id)}>
              <BsPencil size={"1rem"} />
            </button>
            {toEdit === _id && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  editNote(e.target[0].value, _id);
                  setToEdit("");
                }}
              >
                <input
                  type="text"
                  placeholder="edit note"
                  defaultValue={note}
                />
                <button>Save</button>
              </form>
            )}
          </p>
        ))}
      </div>
    </>
  );
};

export default Video;
