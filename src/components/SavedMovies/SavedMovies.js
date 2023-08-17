import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = ({
  onGetSavedMovies,
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
        savedMovies={savedMovies}
        savedMoviesSearchResult={savedMoviesSearchResult}
      />
    </>
  );
};

export default SavedMovies;
