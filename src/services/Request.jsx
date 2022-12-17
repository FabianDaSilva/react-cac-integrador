//**CONSTANS */
const key = "090986c6c1f70fccf12c463834bf299a";
const base = "https://api.themoviedb.org/3";

const Request = {
  fetchTrending: `${base}/trending/all/week?api_key=${key}&language=en-US`,
  fetchNetflixOriginals: `${base}/discover/tv?api_key=${key}&with_network=123`,
  fetchTopRated: `${base}/movie/top_rated?api_key=${key}&language=en-US`,
  fetchActionMovies: `${base}/discover/movie?api_key=${key}&with_genres=28`,
  fetchComedyMovies: `${base}/discover/movie?api_key=${key}&with_genres=35`,
  fetchHorrorMovies: `${base}/discover/movie?api_key=${key}&with_genres=27`,
  fetchRomanceMovies: `${base}/discover/movie?api_key=${key}&with_genres=10749`,
  fetchDocumentaries: `${base}/discover/movie?api_key=${key}&with_genres=99`,
};

export default Request;
