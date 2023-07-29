import React from "react";
import { categories } from "../data/categoriesData";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>CATEGORIES</h1>
      <div className="cat-page">
        {categories.map(({ _id, category, thumbnail }) => (
          <Link to={"/category/" + category} key={_id}>
            <img alt="thubnail" src={thumbnail} />
            <h4>{category}</h4>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
