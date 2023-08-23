import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { WINDOW_WIDTH, NUMBER_OF_MOVIES } from "../../constants/config";

const MoviesCardList = ({
  isSavedMovies,
  isNotFoundMovies,
  isMoviesError,
  onMovieSave,
  onMovieDelete,
  savedMovies,
  movies,
}) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const calculateVisibleMoviesCount = React.useCallback(() => {
    if (windowWidth >= WINDOW_WIDTH.LARGE) {
      return NUMBER_OF_MOVIES.INITIAL.MAX;
    } else if (windowWidth >= WINDOW_WIDTH.MEDIUM) {
      return NUMBER_OF_MOVIES.INITIAL.MEAN;
    } else {
      return NUMBER_OF_MOVIES.INITIAL.MIN;
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

  const getAdditionalMoviesCount = () => {
    if (windowWidth >= WINDOW_WIDTH.LARGE) {
      return NUMBER_OF_MOVIES.ADDITIONAL.MAX;
    } else if (windowWidth >= WINDOW_WIDTH.MEDIUM) {
      return NUMBER_OF_MOVIES.ADDITIONAL.MEAN;
    } else {
      return NUMBER_OF_MOVIES.ADDITIONAL.MIN;
    }
  };

  const moviesCardsClassName = `movies-cards ${
    isSavedMovies && "movies-cards_saved"
  }`;

  const isMovieSaved = (movie) => {
    return savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);
  };

  const toggleSaveClick = (isSaved, movie) => {
    if (!isSaved) {
      onMovieSave(movie);
    } else {
      const savedMovie = savedMovies.find(
        (savedMovie) => savedMovie.movieId === movie.id
      );
      if (savedMovie) {
        onMovieDelete(savedMovie._id);
      }
    }
  };

  const renderedMovies = isSavedMovies
    ? savedMovies.map((savedMovie) => (
        <MoviesCard
          movie={savedMovie}
          key={savedMovie._id}
          isSavedMovies={isSavedMovies}
          onMovieDelete={onMovieDelete}
        />
      ))
    : movies
        .slice(0, visibleMoviesCount)
        .map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id}
            isSavedMovies={isSavedMovies}
            isSaved={isMovieSaved(movie)}
            onMovieSave={toggleSaveClick}
          />
        ));

  const handleShowMore = () => {
    if (!isSavedMovies) {
      const additionalMoviesCount = getAdditionalMoviesCount();
      setVisibleMoviesCount(visibleMoviesCount + additionalMoviesCount);
    }
  };

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
          <ul className="movies-cards__list">{renderedMovies}</ul>
          {!isSavedMovies && visibleMoviesCount < movies.length && (
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

export default React.memo(MoviesCardList);
