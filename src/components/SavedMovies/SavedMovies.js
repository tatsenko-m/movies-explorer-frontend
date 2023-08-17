import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({
  onGetSavedMovies,
  onMovieDelete,
  savedMovies,
  savedMoviesSearchResult,
  isShortSavedMovies,
  onShortSavedMoviesCheck,
  onSearchSavedMovies,
  isNotFoundMovies,
}) => {
  return (
    <>
      <SearchForm
        isSavedMovies={true}
        isShortSavedMovies={isShortSavedMovies}
        onShortSavedMoviesCheck={onShortSavedMoviesCheck}
        onSearchSavedMovies={onSearchSavedMovies}
      />
      <MoviesCardList
        isSavedMovies={true}
        isNotFoundMovies={isNotFoundMovies}
        onGetSavedMovies={onGetSavedMovies}
        onMovieDelete={onMovieDelete}
        savedMovies={savedMoviesSearchResult}
        savedMoviesSearchResult={savedMoviesSearchResult}
      />
    </>
  );
};

export default SavedMovies;
