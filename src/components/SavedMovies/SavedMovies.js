import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({
  onGetSavedMovies,
  onMovieDelete,
  savedMovies,
  savedMoviesSearchResult,
  isShortMovies,
  onShortMoviesCheck,
  onSearchSavedMovies,
}) => {
  return (
    <>
      <SearchForm
        isSavedMovies={true}
        isShortMovies={isShortMovies}
        onShortMoviesCheck={onShortMoviesCheck}
        onSearchSavedMovies={onSearchSavedMovies}
      />
      <MoviesCardList
        isSavedMovies={true}
        onGetSavedMovies={onGetSavedMovies}
        onMovieDelete={onMovieDelete}
        savedMovies={
          savedMoviesSearchResult.length > 0
            ? savedMoviesSearchResult
            : savedMovies
        }
        savedMoviesSearchResult={savedMoviesSearchResult}
      />
    </>
  );
};

export default SavedMovies;
