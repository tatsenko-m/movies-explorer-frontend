import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

const Movies = ({
  isLoading,
  isShortMovies,
  onShortMoviesCheck,
  onSearchMovies,
  isNotFoundMovies,
  isMoviesError,
  onMovieSave,
  movies,
}) => {
  const isSavedMovies = false;

  return (
    <>
      <SearchForm
        isShortMovies={isShortMovies}
        onShortMoviesCheck={onShortMoviesCheck}
        onSearchMovies={onSearchMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          isSavedMovies={isSavedMovies}
          isMoreButtonVisible={true}
          isNotFoundMovies={isNotFoundMovies}
          isMoviesError={isMoviesError}
          onMovieSave={onMovieSave}
          movies={movies}
        ></MoviesCardList>
      )}
    </>
  );
};

export default Movies;
