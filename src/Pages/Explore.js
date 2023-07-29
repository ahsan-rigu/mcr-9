import React, { useState } from "react";
import "./Page.css";
import { videos } from "../data/videosData";
import Card from "../Components/Card";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const videosFiltered = videos.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header>
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search by title"
        />
      </header>
      <div className="page">
        {videosFiltered.map((video) => (
          <Card video={video} key={video._id} />
        ))}
      </div>
    </>
  );
};

export default Explore;
