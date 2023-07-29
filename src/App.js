import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Watchlater from "./Pages/Watchlater";
import Category from "./Pages/Category";
import Video from "./Pages/Video";
import Playlists from "./Pages/Playlists";
import Playlist from "./Pages/Playlist";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="watchlater" element={<Watchlater />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/video/:video" element={<Video />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlists/:playlistID" element={<Playlist />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
