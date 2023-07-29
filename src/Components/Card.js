import React, { useContext } from "react";
import { UserDataContext } from "../Contexts/UserDataContext";
import "./Card.css";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Card = ({
  video: { _id, title, views, thumbnail, category, creator },
}) => {
  const { removeFormWatchlater, addToWatchlater, watchlater } =
    useContext(UserDataContext);

  const navigate = useNavigate();

  return (
    <article>
      <img
        src={thumbnail}
        alt={title}
        onClick={() => navigate("/video/" + title)}
      />
      <h4>{title}</h4>
      <span>
        {views} views | {creator}
      </span>
      {watchlater.includes(_id) ? (
        <button className="btn-br" onClick={() => removeFormWatchlater(_id)}>
          <MdWatchLater size={"1.5rem"} />
        </button>
      ) : (
        <button className="btn-br" onClick={() => addToWatchlater(_id)}>
          <MdOutlineWatchLater size={"1.5rem"} />
        </button>
      )}
    </article>
  );
};

export default Card;
