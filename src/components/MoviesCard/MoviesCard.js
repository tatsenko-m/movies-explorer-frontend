import React from "react";
import movieImage from "../../images/movie-image.png";

const MoviesCard = ({ isSavedMovies, isSaved }) => {
  const [isSavedState, setIsSavedState] = React.useState(isSaved);

  const movieSaveButtonClassName = `movies-card__save-button ${
    isSavedState && "movies-card__save-button_active"
  }`;

  function handleSaveClick() {
    setIsSavedState(!isSavedState);
  }

  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <p className="movies-card__title">В погоне за Бенкси</p>
        <p className="movies-card__duration">27 минут</p>
      </div>
      <img
        className="movies-card__image"
        src={movieImage}
        alt="Постер фильма"
      />
      <div className="movies-card__footer">
        {isSavedMovies ? (
          <button className="movies-card__delete-button" type="button"></button>
        ) : (
          <button className={movieSaveButtonClassName} type="button" onClick={handleSaveClick}>
            {isSavedState ? "" : "Сохранить"}
          </button>
        )}
      </div>
    </li>
  );
};

export default MoviesCard;
