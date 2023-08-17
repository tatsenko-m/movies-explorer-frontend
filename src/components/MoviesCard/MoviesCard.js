import React from "react";

const MoviesCard = ({
  movie,
  isSavedMovies,
  isSaved,
  onMovieSave,
  onMovieDelete,
}) => {
  const movieSaveButtonClassName = `movies-card__save-button ${
    isSaved && "movies-card__save-button_active"
  }`;

  function handleSaveClick() {
    onMovieSave(isSaved, movie);
  }

  function handleDeleteClick() {
    onMovieDelete(movie._id);
  }

  function handleImageClick() {
    if (movie.trailerLink) {
      window.open(movie.trailerLink, "_blank");
    }
  }

  const declOfMinutes = (number) => {
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ["минута", "минуты", "минут"];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  const formatDuration = (duration) => {
    if (duration < 60) {
      return `${duration} ${declOfMinutes(duration)}`;
    } else {
      const hours = Math.floor(duration / 60);
      const minutes = duration % 60;
      const hoursText = hours === 1 ? "час" : hours < 5 ? "часа" : "часов";
      const minutesText = minutes === 1 ? "минута" : declOfMinutes(minutes);
      return `${hours} ${hoursText} ${minutes} ${minutesText}`;
    }
  };

  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <p className="movies-card__title">{movie.nameRU}</p>
        <p className="movies-card__duration">
          {formatDuration(movie.duration)}
        </p>
      </div>
      <img
        className="movies-card__image"
        src={
          isSavedMovies
            ? movie.image
            : `https://api.nomoreparties.co${movie.image.url}`
        }
        alt={`Постер фильма ${movie.nameRU}`}
        onClick={handleImageClick}
      />
      <div className="movies-card__footer">
        {isSavedMovies ? (
          <button
            className="movies-card__delete-button"
            type="button"
            onClick={handleDeleteClick}
          ></button>
        ) : (
          <button
            className={movieSaveButtonClassName}
            type="button"
            onClick={handleSaveClick}
          >
            {isSaved ? "" : "Сохранить"}
          </button>
        )}
      </div>
    </li>
  );
};

export default MoviesCard;
