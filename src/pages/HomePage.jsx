/* eslint-disable jsx-a11y/media-has-caption */
import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const key = "090986c6c1f70fccf12c463834bf299a";
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate}`;

    axios.get(endPoint).then((response) => {
      const apiData = response.data;

      console.log(apiData);
      setMovie(apiData.results);
    });
  }, [setMovie]);

  return (
    <>
      {movie.map((oneMovie, index) => {
        return (
          <div key={index} className="col-3 px-3 pt-4">
            <img
              alt=""
              src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
            />

            <video autoPlay loop muted className="hero__video">
              <source src={oneMovie.movie_id} type="video/mp4" />
            </video>
            <h5>{oneMovie.title}</h5>

            <p>{oneMovie.overview.substring(0, 100)}</p>
          </div>
        );
      })}
    </>
  );
};

export default HomePage;
