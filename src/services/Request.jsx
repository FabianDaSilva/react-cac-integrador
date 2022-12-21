//**CONSTANS */
const key = "090986c6c1f70fccf12c463834bf299a";
const base = "https://api.themoviedb.org/3";

const Request = {
  fetchTrending: `${base}/trending/all/week?api_key=${key}&language=es-ES`,
  fetchNetflixOriginals: `${base}/discover/tv?api_key=${key}&with_network=123&language=es-ES`,
  fetchTopRated: `${base}/movie/top_rated?api_key=${key}&language=es-ES`,
  fetchActionMovies: `${base}/discover/movie?api_key=${key}&with_genres=28&language=es-ES`,
  fetchComedyMovies: `${base}/discover/movie?api_key=${key}&with_genres=35&language=es-ES`,
  fetchHorrorMovies: `${base}/discover/movie?api_key=${key}&with_genres=27&language=es-ES`,
  fetchRomanceMovies: `${base}/discover/movie?api_key=${key}&with_genres=10749&language=es-ES`,
  fetchDocumentaries: `${base}/discover/movie?api_key=${key}&with_genres=99&language=es-ES`,
};

export default Request;
