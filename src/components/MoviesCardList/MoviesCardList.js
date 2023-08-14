import React from "react";

const MoviesCardList = ({
  isSavedMovies,
  isMoreButtonVisible,
  isNotFoundMovies,
  isMoviesError,
  children,
}) => {
  const moviesCardsClassName = `movies-cards ${
    isSavedMovies && "movies-cards_saved"
  }`;

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
          <ul className="movies-cards__list">{children}</ul>
          {isMoreButtonVisible && (
            <button className="movies-cards__more-button">Ещё</button>
          )}
        </>
      )}
    </section>
  );
};

export default MoviesCardList;
