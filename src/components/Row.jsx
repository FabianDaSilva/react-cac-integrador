import { Card } from "../components";

const Row = ({ movie }) => {
  return (
    <div className="row">
      <div className="row__movies">
        {movie.map((oneMovie, index) => {
          return <Card key={index} oneMovie={oneMovie} />;
        })}
      </div>
    </div>
  );
};

export default Row;
