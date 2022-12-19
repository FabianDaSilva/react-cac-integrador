/* eslint-disable no-console */
import axios from "axios";
import { useEffect, useState } from "react";

/**
 *@function useMovie: Te renderiza toda la API
 */
export function useMovie({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((response) => {
        const apiData = response.data;

        setMovie(apiData.results);
        /*   console.log(apiData.results); */
      })
      .catch((error) => {
        console.error(`El error esta en: ${error}`);
      });
  }, [fetchUrl]);

  return movie;
}

/**
 * @function useMovieBanner: Te renderiza los resultados de la API de forma aleatoria
 */
export function useMovieBanner() {
  const [movie, setMovie] = useState([]);
  const key = "090986c6c1f70fccf12c463834bf299a";
  const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate}`;

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
  }, [endPoint]);

  return movie;
}
