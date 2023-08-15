import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({
  isSavedMovies,
  isNotFoundMovies,
  isMoviesError,
  onMovieClick,
  onMovieSave,
  movies,
}) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const calculateVisibleMoviesCount = React.useCallback(() => {
    if (windowWidth >= 1280) {
      return 12;
    } else if (windowWidth >= 768) {
      return 8;
    } else {
      return 5;
    }
  }, [windowWidth]);

  const [visibleMoviesCount, setVisibleMoviesCount] = React.useState(
    calculateVisibleMoviesCount()
  );

  React.useEffect(() => {
    setVisibleMoviesCount(calculateVisibleMoviesCount());
  }, [movies, windowWidth, calculateVisibleMoviesCount]);

  React.useEffect(() => {
    let resizeTimeout;

    const handleResizeWithTimeout = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        calculateCount();
      }, 300);

      setWindowWidth(window.innerWidth);
    };

    const calculateCount = () => {
      setVisibleMoviesCount(calculateVisibleMoviesCount());
    };

    calculateCount();
    window.addEventListener("resize", handleResizeWithTimeout);
    return () => {
      window.removeEventListener("resize", handleResizeWithTimeout);
    };
  }, [calculateVisibleMoviesCount]);

  const handleShowMore = () => {
    const additionalMoviesCount = getAdditionalMoviesCount();
    setVisibleMoviesCount(visibleMoviesCount + additionalMoviesCount);
  };

  const getAdditionalMoviesCount = () => {
    if (windowWidth >= 1280) {
      return 3;
    } else if (windowWidth >= 768) {
      return 2;
    } else {
      return 2;
    }
  };

  const moviesCardsClassName = `movies-cards ${
    isSavedMovies && "movies-cards_saved"
  }`;

  const moviesElements = movies
    .slice(0, visibleMoviesCount)
    .map((movie) => (
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
          {visibleMoviesCount < movies.length && (
            <button
              className="movies-cards__more-button"
              onClick={handleShowMore}
            >
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default MoviesCardList;
