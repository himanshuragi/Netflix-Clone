import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components_css/Row.css";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {Movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_poster_large"}`}
            src={`${BASE_IMG_URL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
