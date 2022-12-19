
import { Card } from "../components";
import { useMovie } from "../hooks";

const Row = ({ title, fetchUrl }) => {
  const movie = useMovie({ fetchUrl });

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__movies">
        {movie.map((oneMovie, index) => {
          return <Card key={index} oneMovie={oneMovie} />;
        })}
      </div>
    </div>
  );
};

export default Row;
