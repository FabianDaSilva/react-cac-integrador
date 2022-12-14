import Banner from "../components/Banner";
import Nav from "../components/Nav";
import { useMovie } from "../hooks/useMovie";

const HomePage = () => {
  const movie = useMovie("movie");

  return (
    <>
      <Nav />
      <Banner />
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
