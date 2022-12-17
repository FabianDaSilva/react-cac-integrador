/* eslint-disable no-console */
import axios from "axios";
import { useEffect, useState } from "react";
//**CONSTANS */
const key = "090986c6c1f70fccf12c463834bf299a";
const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate}`;

/**
 *@function useMovie: Te renderiza toda la API
 */
export function useMovie() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=090986c6c1f70fccf12c463834bf299a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data;

        setMovie(apiData.results);
      })
      .catch((error) => {
        console.error(`El error esta en: ${error}`);
      });
  }, [setMovie]);

  return movie;
}

/**
 * @function useMovieBanner: Te renderiza los resultados de la API de forma aleatoria
 */
export function useMovieBanner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data;

        setMovie(
          apiData.results[Math.floor(Math.random() * apiData.results.length)]
        );
      })
      .catch((error) => {
        console.error(`El error esta en: ${error}`);
      });
  }, [setMovie]);

  return movie;
}

/**
 * @function useMovieId: Logramos obtener el id de la pelicula para poder acceder a sus detalles
 */
export function useMovieId() {
  const [movie, setMovie] = useState(null);
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  console.log(movieID);

  useEffect(() => {
    const endPointID = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${key}&language=en-US/videos;`;

    axios
      .get(endPointID)
      .then((response) => {
        const apiData = response.data;

        console.log(apiData);

        setMovie(apiData);
      })
      .cath((error) => {
        console.error(`El error esta en: ${error}`);
      });
  }, [movieID]);

  return movie;
}
