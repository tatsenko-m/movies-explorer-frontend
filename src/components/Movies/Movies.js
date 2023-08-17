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
  onGetSavedMovies,
  onMovieSave,
  onMovieDelete,
  savedMovies,
  movies,
}) => {
  return (
    <>
      <SearchForm
        isSavedMovies={false}
        isShortMovies={isShortMovies}
        onShortMoviesCheck={onShortMoviesCheck}
        onSearchMovies={onSearchMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          isSavedMovies={false}
          isNotFoundMovies={isNotFoundMovies}
          isMoviesError={isMoviesError}
          onMovieSave={onMovieSave}
          onMovieDelete={onMovieDelete}
          onGetSavedMovies={onGetSavedMovies}
          savedMovies={savedMovies}
          movies={movies}
        />
      )}
    </>
  );
};

export default Movies;
