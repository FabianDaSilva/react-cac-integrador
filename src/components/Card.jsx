/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";

import { useMovie } from "../hooks";

const Card = ({ oneMovie }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const movie = useMovie("movie");

  return (
    <>
      <img
        alt={oneMovie.title}
        className="row__movies--img"
        src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
        onClick={toggleModal}
      />

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content">
              <h1> {movie?.title || movie?.name || movie?.orignal_name}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
