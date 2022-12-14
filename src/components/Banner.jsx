import React from "react";

import { useMovieBanner } from "../hooks/useMovie";

const Banner = () => {
  //*Llamo el hook "useMovieBanner" para que me renderize de forma aleatoria el banner de la app*/

  const movie = useMovieBanner("movie");

  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        height: "400px",
      }}
    >
      <p>HOla</p>
      <img alt="" src="" />
      <h1 className="banner__title">
        {movie?.title || movie?.name || movie?.orignal_name}
      </h1>
     
    </header>
  );
};

export default Banner;
