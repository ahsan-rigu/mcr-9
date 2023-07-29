import React, { useContext } from "react";
import { videos } from "../data/videosData";
import { UserDataContext } from "../Contexts/UserDataContext";
import Card from "../Components/Card";

const Watchlater = () => {
  const { watchlater } = useContext(UserDataContext);

  const videosFiltered = videos.filter(({ _id }) => watchlater.includes(_id));

  return (
    <div className="page">
      {videosFiltered.map((video) => (
        <Card video={video} key={video._id} />
      ))}
    </div>
  );
};

export default Watchlater;
