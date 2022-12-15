const Card = ({ oneMovie }) => {
  return (
    <>
      <img
        alt={oneMovie.title}
        className="row__movies--img"
        src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
      />
    </>
  );
};

export default Card;
