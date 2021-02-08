import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components_css/Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  function mini(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    });
  }, [fetchUrl]);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
          <h1 className="banner_description">{mini(movie.overview, 250)}</h1>
        </div>
      </div>
      <div className="banner_fade"></div>
    </header>
  );
}

export default Banner;
