/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Card = ({ oneMovie }) => {
  const [modal, setModal] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const toggleModal = () => {
    setModal(!modal);
    trailerUrl
      ? setTrailerUrl("")
      : movieTrailer(
          oneMovie?.title || oneMovie?.name || oneMovie?.orignal_name || ""
        )
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);

            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.error(error));
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
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
              <YouTube opts={opts} videoId={trailerUrl} />
              <h2>
                {oneMovie?.title || oneMovie?.name || oneMovie?.orignal_name}
              </h2>
              <p>{oneMovie?.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
