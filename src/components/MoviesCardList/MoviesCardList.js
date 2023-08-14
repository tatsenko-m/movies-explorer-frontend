import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({
  isSavedMovies,
  isMoreButtonVisible,
  isNotFoundMovies,
  isMoviesError,
  onMovieClick,
  onMovieSave,
  movies,
}) => {
  const moviesCardsClassName = `movies-cards ${
    isSavedMovies && "movies-cards_saved"
  }`;

  const moviesElements = movies.map((movie) => (
    <MoviesCard
      movie={movie}
      key={movie.id}
      isSavedMovies={isSavedMovies}
      isSaved={false}
      onMovieClick={onMovieClick}
      onMovieSave={onMovieSave}
    />
  ));

  return (
    <section className={moviesCardsClassName}>
      {isNotFoundMovies ? (
        <p className="movies-cards__message">Ничего не найдено</p>
      ) : isMoviesError ? (
        <p className="movies-cards__message">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : (
        <>
          <ul className="movies-cards__list">{moviesElements}</ul>
          {isMoreButtonVisible && (
            <button className="movies-cards__more-button">Ещё</button>
          )}
        </>
      )}
    </section>
  );
};

export default MoviesCardList;
