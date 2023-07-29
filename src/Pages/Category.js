import React, { useContext } from "react";
import { videos } from "../data/videosData";
import { UserDataContext } from "../Contexts/UserDataContext";
import Card from "../Components/Card";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();

  const videosFiltered = videos.filter(({ category: cat }) => cat === category);

  return (
    <div className="page">
      {videosFiltered.map((video) => (
        <Card video={video} key={video._id} />
      ))}
    </div>
  );
};

export default Category;
