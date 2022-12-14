import axios from "axios";
import { useEffect, useState } from "react";

export function useMovie() {
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

  return movie;
}
