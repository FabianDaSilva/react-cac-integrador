import { useMovieBanner } from "../hooks";

const Banner = () => {
  //*Llamo el hook "useMovieBanner" para que me renderize de forma aleatoria el banner de la app*/

  const movie = useMovieBanner("movie");

  return (
    <header
      style={{
        maxHeight: "500px",
        margin: "0px",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        alt=""
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        style={{
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          maxHeight: "500px",
          objectFit: "cover",
          backgroundImage: "center center",
        }}
      />
    </header>
  );
};

export default Banner;
