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
