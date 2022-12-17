/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";

const Card = ({ oneMovie }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

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
              <div className="modal-content--img">
                <img
                  alt={oneMovie.title}
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  onClick={toggleModal}
                />
              </div>
              <h1>
                {oneMovie?.title || oneMovie?.name || oneMovie?.orignal_name}
              </h1>
              <p>{oneMovie?.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
