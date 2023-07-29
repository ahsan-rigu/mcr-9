import React from "react";
import "./Header.css";
import {
  BsCompassFill,
  BsFillClockFill,
  BsFillHouseFill,
} from "react-icons/bs";
import { MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <span className="logo">mcr-9 | ahsan</span>
      <nav>
        <Link to="/">
          <BsFillHouseFill size={"1.5rem"} />
        </Link>
        <Link to="/explore">
          <BsCompassFill size={"1.5rem"} />
        </Link>
        <Link to="/playlists">
          <MdPlaylistAdd size={"1.5rem"} />
        </Link>
        <Link to="/watchlater">
          <BsFillClockFill size={"1.5rem"} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
